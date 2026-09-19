#!/usr/bin/env node

import { chromium } from '@playwright/test';
import { spawn } from 'node:child_process';
import { mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const BRAND_ROUTES = [
  '/marques/',
  '/marques/bialetti/',
  '/marques/alessi/',
  '/marques/giannini/',
];

const COMPARISON_ROUTES = [
  '/comparatifs/',
  '/comparatifs/meilleure-cafetiere-italienne/',
  '/comparatifs/cafetiere-italienne-induction/',
  '/comparatifs/cafetiere-italienne-inox/',
  '/comparatifs/cafetiere-italienne-electrique/',
  '/comparatifs/cafetiere-italienne-design/',
  '/comparatifs/petite-cafetiere-italienne/',
];

const MODEL_ROUTES = [
  '/modeles/',
  '/modeles/bialetti-moka-express/',
  '/modeles/bialetti-venus/',
  '/modeles/bialetti-moka-induction/',
  '/modeles/bialetti-brikka/',
  '/modeles/bialetti-mini-express/',
  '/modeles/alessi-9090/',
];

const CAPACITY_ROUTES = [
  '/capacites/',
  '/capacites/cafetiere-italienne-2-tasses/',
  '/capacites/cafetiere-italienne-4-tasses/',
  '/capacites/cafetiere-italienne-6-tasses/',
  '/capacites/cafetiere-italienne-10-tasses/',
  '/capacites/cafetiere-italienne-12-tasses/',
];

const GUIDE_ROUTES = [
  '/guides/',
  '/guides/comment-choisir-cafetiere-italienne/',
  '/guides/comment-utiliser-cafetiere-italienne/',
  '/guides/premiere-utilisation-cafetiere-italienne/',
  '/guides/dosage-cafe-cafetiere-italienne/',
  '/guides/mouture-cafetiere-italienne/',
  '/guides/quel-cafe-pour-cafetiere-italienne/',
  '/guides/cafetiere-italienne-aluminium-ou-inox/',
  '/guides/cafetiere-italienne-induction-compatibilite/',
  '/guides/nettoyer-cafetiere-italienne/',
  '/guides/detartrer-cafetiere-italienne/',
  '/guides/cafetiere-italienne-cafe-amer-brule/',
  '/guides/cafetiere-italienne-fuite-vapeur/',
  '/guides/changer-joint-cafetiere-italienne/',
  '/guides/cafetiere-italienne-vs-espresso/',
];

const ACCESSORY_ROUTES = [
  '/accessoires/',
  '/accessoires/adaptateur-induction-cafetiere-italienne/',
  '/accessoires/joint-cafetiere-italienne/',
  '/accessoires/filtre-cafetiere-italienne/',
  '/accessoires/pieces-detachees-bialetti/',
];

const CAFE_MOKA_ROUTES = [
  '/cafe-moka/',
  '/cafe-moka/quest-ce-que-le-cafe-moka/',
  '/cafe-moka/comment-preparer-un-cafe-moka/',
];

const TRUST_ROUTES = [
  '/a-propos/',
  '/notre-methode/',
  '/affiliation/',
  '/contact/',
];

const BASE_SCOPES = {
  brands: BRAND_ROUTES,
  comparisons: COMPARISON_ROUTES,
  models: MODEL_ROUTES,
  capacities: CAPACITY_ROUTES,
  guides: GUIDE_ROUTES,
  accessories: ACCESSORY_ROUTES,
  'cafe-moka': CAFE_MOKA_ROUTES,
  trust: TRUST_ROUTES,
};

const SCOPES = {
  ...BASE_SCOPES,
  all: [...new Set(Object.values(BASE_SCOPES).flat())],
};

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

function parseArgs(argv) {
  const options = {
    baseUrl: '',
    output: '.artifacts/design-review',
    port: 4173,
    routes: [],
    scope: '',
  };

  for (let index = 0; index < argv.length; index += 1) {
    const value = argv[index];
    const next = argv[index + 1];
    if (value === '--base-url') options.baseUrl = next, index += 1;
    else if (value === '--output') options.output = next, index += 1;
    else if (value === '--port') options.port = Number(next), index += 1;
    else if (value === '--route') options.routes.push(next), index += 1;
    else if (value === '--scope') options.scope = next, index += 1;
    else if (value === '--help') options.help = true;
    else throw new Error(`Option inconnue : ${value}`);
  }

  if (options.scope && !SCOPES[options.scope]) {
    throw new Error(`Scope inconnu : ${options.scope}. Scopes disponibles : ${Object.keys(SCOPES).join(', ')}`);
  }
  if (!options.routes.length && options.scope) options.routes = SCOPES[options.scope];
  if (!options.routes.length) options.routes = ['/'];
  return options;
}

function slug(route) {
  return route.replace(/^\/+|\/+$/g, '').replaceAll('/', '--') || 'home';
}

async function waitForServer(url) {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error(`Le serveur local ne répond pas : ${url}`);
}

async function prepareFullPageCapture(page, viewportHeight) {
  await page.evaluate(async viewportHeightValue => {
    const sleep = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const step = Math.max(320, Math.round(viewportHeightValue * 0.72));
    const pageHeight = Math.max(
      document.body?.scrollHeight || 0,
      document.documentElement?.scrollHeight || 0,
    );

    for (let position = 0; position < pageHeight; position += step) {
      window.scrollTo(0, position);
      await sleep(25);
    }
    window.scrollTo(0, pageHeight);
    await sleep(80);

    const images = [...document.images];
    await Promise.all(images.map(async image => {
      if (!image.complete) {
        await Promise.race([
          new Promise(resolve => {
            image.addEventListener('load', resolve, { once: true });
            image.addEventListener('error', resolve, { once: true });
          }),
          sleep(1500),
        ]);
      }
      if (typeof image.decode === 'function') {
        try {
          await image.decode();
        } catch {}
      }
    }));

    window.scrollTo(0, 0);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  }, viewportHeight);
}

const options = parseArgs(process.argv.slice(2));
if (options.help) {
  console.log(`Usage: run-visual-review.mjs [--scope ${Object.keys(SCOPES).join('|')}] [--route /chemin/] [--base-url URL] [--output dossier] [--port 4173]`);
  process.exit(0);
}

const outputRoot = path.resolve(options.output);
await rm(outputRoot, { recursive: true, force: true });
await mkdir(outputRoot, { recursive: true });

let server;
let baseUrl = options.baseUrl.replace(/\/$/, '');
if (!baseUrl) {
  baseUrl = `http://127.0.0.1:${options.port}`;
  server = spawn('python3', ['-m', 'http.server', String(options.port), '--bind', '127.0.0.1', '--directory', '.'], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  await waitForServer(`${baseUrl}/`);
}

const report = {
  generatedAt: new Date().toISOString(),
  baseUrl,
  scope: options.scope || null,
  routes: options.routes,
  viewports: VIEWPORTS,
  pages: [],
  technicalFailures: [],
};

let browser;
try {
  browser = await chromium.launch({ headless: true });

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: viewport.width, height: viewport.height },
      reducedMotion: 'reduce',
    });

    for (const route of options.routes) {
      const page = await context.newPage();
      const consoleErrors = [];
      const pageErrors = [];
      page.on('console', message => {
        if (message.type() === 'error') consoleErrors.push(message.text());
      });
      page.on('pageerror', error => pageErrors.push(error.message));

      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts?.ready);
      await prepareFullPageCapture(page, viewport.height);

      const measurements = await page.evaluate(() => {
        const main = document.querySelector('.content-main, .guide-article, article, main');
        const sidebar = document.querySelector('.content-sidebar, .guide-sidebar, aside');
        const headings = [...document.querySelectorAll('main h1, main h2, main h3')];
        const toc = document.querySelector('.sidebar-toc');
        const tocLinks = [...document.querySelectorAll('.sidebar-toc a')];
        const fixedHeader = document.querySelector('.site-header');
        const tables = [...document.querySelectorAll('main table')];
        const articleAnswer = document.querySelector('.article-answer, .guide-answer');
        const firstEditorialLink = main?.querySelector('a:not(.btn):not(.product-card__cta)') || null;
        const buttonsMissingAccessibleName = [...document.querySelectorAll('button')]
          .filter(button => {
            const text = button.textContent?.trim();
            const ariaLabel = button.getAttribute('aria-label')?.trim();
            const labelledBy = button.getAttribute('aria-labelledby')?.trim();
            const title = button.getAttribute('title')?.trim();
            return !text && !ariaLabel && !labelledBy && !title;
          })
          .map(button => button.className || button.outerHTML.slice(0, 120));
        const imagesMissingAlt = [...document.querySelectorAll('img:not([alt])')]
          .map(img => img.getAttribute('src'));
        const tablesWithoutResponsiveWrapper = tables
          .filter(table => !table.closest('.table-wrapper, .table-wrap'))
          .map(table => table.className || '(table sans classe)');
        const generatedImages = [...document.querySelectorAll('[data-generated-image] img')]
          .map(image => ({
            id: image.closest('[data-generated-image]')?.getAttribute('data-generated-image') || null,
            src: image.getAttribute('src'),
            complete: image.complete,
            naturalWidth: image.naturalWidth,
            naturalHeight: image.naturalHeight,
          }));

        return {
          title: document.title,
          statusReady: document.readyState,
          horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          h1Count: document.querySelectorAll('main h1').length,
          headingCount: headings.length,
          tocLinkCount: tocLinks.length,
          tocParentClass: toc?.parentElement?.className || null,
          missingHeadingIds: [...document.querySelectorAll('.content-main h2, .content-main h3')]
            .filter(heading => !heading.id)
            .map(heading => heading.textContent.trim()),
          tableCount: tables.length,
          tablesWithoutResponsiveWrapper,
          overflowingTables: tables
            .map(table => table.closest('.table-wrapper, .table-wrap') || table)
            .filter(element => element.scrollWidth > element.clientWidth)
            .map(element => ({ scrollWidth: element.scrollWidth, clientWidth: element.clientWidth })),
          generatedImages,
          articleAnswer: articleAnswer ? {
            height: Math.round(articleAnswer.getBoundingClientRect().height),
            background: getComputedStyle(articleAnswer).backgroundColor,
            borderLeftWidth: getComputedStyle(articleAnswer).borderLeftWidth,
          } : null,
          firstEditorialLink: firstEditorialLink ? {
            color: getComputedStyle(firstEditorialLink).color,
            decoration: getComputedStyle(firstEditorialLink).textDecorationLine,
          } : null,
          sidebar: sidebar ? {
            height: Math.round(sidebar.getBoundingClientRect().height),
            top: Math.round(sidebar.getBoundingClientRect().top),
            position: getComputedStyle(sidebar).position,
          } : null,
          headerHeight: fixedHeader ? Math.round(fixedHeader.getBoundingClientRect().height) : 0,
          buttonsMissingAccessibleName,
          imagesMissingAlt,
          focusableCount: document.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])').length,
        };
      });

      const viewportFolder = path.join(outputRoot, viewport.name);
      await mkdir(viewportFolder, { recursive: true });
      const screenshot = path.join(viewportFolder, `${slug(route)}.png`);
      await page.screenshot({ path: screenshot, fullPage: true, animations: 'disabled' });

      await page.keyboard.press('Tab');
      const focusCheck = await page.evaluate(() => {
        const active = document.activeElement;
        if (!active || active === document.body) return null;
        const style = getComputedStyle(active);
        return {
          tag: active.tagName,
          className: active.className || null,
          text: active.textContent?.trim().slice(0, 80) || active.getAttribute('aria-label') || null,
          outlineStyle: style.outlineStyle,
          outlineWidth: style.outlineWidth,
          boxShadow: style.boxShadow,
        };
      });

      let mobileMenu = null;
      if (viewport.name === 'mobile' && route === options.routes[0]) {
        const menuButton = page.locator('.menu-btn');
        if (await menuButton.count() && await menuButton.isVisible()) {
          const ariaExpandedBefore = await menuButton.getAttribute('aria-expanded');
          await menuButton.click();
          const nav = page.locator('.nav');
          mobileMenu = {
            ariaExpandedBefore,
            ariaExpandedAfter: await menuButton.getAttribute('aria-expanded'),
            navVisibleAfterClick: await nav.count() ? await nav.isVisible() : false,
            navClassAfterClick: await nav.count() ? await nav.getAttribute('class') : null,
          };
          await page.screenshot({
            path: path.join(viewportFolder, `${slug(route)}--menu-open.png`),
            fullPage: false,
            animations: 'disabled',
          });
        }
      }

      const httpStatus = response?.status() ?? null;
      const pageReport = {
        route,
        viewport: viewport.name,
        httpStatus,
        screenshot: path.relative(process.cwd(), screenshot),
        consoleErrors,
        pageErrors,
        focusCheck,
        mobileMenu,
        ...measurements,
      };
      report.pages.push(pageReport);

      if (httpStatus !== null && httpStatus >= 400) {
        report.technicalFailures.push(`${viewport.name} ${route}: HTTP ${httpStatus}`);
      }
      if (pageErrors.length) {
        report.technicalFailures.push(`${viewport.name} ${route}: ${pageErrors.length} erreur(s) JavaScript de page`);
      }
      if (measurements.horizontalOverflow) {
        report.technicalFailures.push(`${viewport.name} ${route}: débordement horizontal global (${measurements.scrollWidth}px > ${measurements.clientWidth}px)`);
      }
      const unloadedGeneratedImages = measurements.generatedImages.filter(image => !image.complete || image.naturalWidth === 0);
      if (unloadedGeneratedImages.length) {
        report.technicalFailures.push(
          `${viewport.name} ${route}: ${unloadedGeneratedImages.length} image(s) éditoriale(s) générée(s) non décodée(s): ${unloadedGeneratedImages.map(image => image.id || image.src).join(', ')}`,
        );
      }

      await page.close();
    }
    await context.close();
  }
} finally {
  if (browser) await browser.close();
  if (server) server.kill('SIGTERM');
}

await writeFile(path.join(outputRoot, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);
console.log(`Captures créées : ${report.pages.length}`);
console.log(`Rapport : ${path.join(outputRoot, 'report.json')}`);

if (report.technicalFailures.length) {
  console.error('Échecs techniques détectés :');
  for (const failure of report.technicalFailures) console.error(`- ${failure}`);
  process.exitCode = 1;
}
