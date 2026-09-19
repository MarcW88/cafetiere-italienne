function loadStylesheet(href,key){
  if(document.querySelector(`link[data-style-key="${key}"]`))return;
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href=href;
  link.dataset.styleKey=key;
  document.head.append(link);
}

loadStylesheet('assets/editorial.css','editorial');
loadStylesheet('assets/families.css','families');
loadStylesheet('assets/navigation.css','navigation');

const currentPath=window.location.pathname.replace(/\/+$/,'')||'/';
const isComparison=currentPath==='/comparatifs'||currentPath.startsWith('/comparatifs/');
const isBrand=currentPath==='/marques'||currentPath.startsWith('/marques/');
const isModel=currentPath==='/modeles'||currentPath.startsWith('/modeles/');
const isGuide=currentPath==='/guides'||currentPath.startsWith('/guides/');
const isCapacity=currentPath==='/capacites'||currentPath.startsWith('/capacites/');
const isAccessory=currentPath==='/accessoires'||currentPath.startsWith('/accessoires/');
const isCafeMoka=currentPath==='/cafe-moka'||currentPath.startsWith('/cafe-moka/');

if(isComparison){
  document.documentElement.classList.add('comparison-page');
  if(currentPath==='/comparatifs')document.documentElement.classList.add('comparison-hub-page');
  else if(currentPath==='/comparatifs/meilleure-cafetiere-italienne')document.documentElement.classList.add('comparison-general-page');
  else document.documentElement.classList.add('comparison-specialized-page');
  loadStylesheet('comparisons.css','comparisons');
}
if(isBrand){
  document.documentElement.classList.add('brand-page');
  if(currentPath==='/marques')document.documentElement.classList.add('brand-hub-page');
}
if(isModel){
  document.documentElement.classList.add('model-page');
  if(currentPath==='/modeles')document.documentElement.classList.add('model-hub-page');
}
if(isGuide){
  document.documentElement.classList.add('guide-page');
  if(currentPath==='/guides')document.documentElement.classList.add('guide-hub-page');
}

const guideTypeByPath={
  '/guides/comment-choisir-cafetiere-italienne':'decision',
  '/guides/cafetiere-italienne-aluminium-ou-inox':'decision',
  '/guides/cafetiere-italienne-induction-compatibilite':'decision',
  '/guides/cafetiere-italienne-vs-espresso':'decision',
  '/guides/comment-utiliser-cafetiere-italienne':'procedure',
  '/guides/premiere-utilisation-cafetiere-italienne':'procedure',
  '/guides/nettoyer-cafetiere-italienne':'procedure',
  '/guides/detartrer-cafetiere-italienne':'procedure',
  '/guides/changer-joint-cafetiere-italienne':'procedure',
  '/guides/dosage-cafe-cafetiere-italienne':'tuning',
  '/guides/mouture-cafetiere-italienne':'tuning',
  '/guides/quel-cafe-pour-cafetiere-italienne':'tuning',
  '/guides/cafetiere-italienne-cafe-amer-brule':'diagnostic',
  '/guides/cafetiere-italienne-fuite-vapeur':'diagnostic',
};
const guideType=guideTypeByPath[currentPath];
if(guideType)document.documentElement.classList.add(`guide-type-${guideType}`);
if(isCapacity){
  document.documentElement.classList.add('capacity-page');
  if(currentPath==='/capacites')document.documentElement.classList.add('capacity-hub-page');
}
if(isAccessory){
  document.documentElement.classList.add('accessory-page');
  if(currentPath==='/accessoires')document.documentElement.classList.add('accessory-hub-page');
}
if(isCafeMoka){
  document.documentElement.classList.add('cafe-moka-page');
  if(currentPath==='/cafe-moka')document.documentElement.classList.add('cafe-moka-hub-page');
}

const maintenancePaths=[
  '/guides/nettoyer-cafetiere-italienne',
  '/guides/detartrer-cafetiere-italienne',
  '/guides/changer-joint-cafetiere-italienne',
  '/guides/cafetiere-italienne-fuite-vapeur',
  '/guides/cafetiere-italienne-cafe-amer-brule',
];
const isMaintenance=maintenancePaths.some(path=>currentPath===path);

function chevron(){
  return '<svg class="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
}

function navItem({href,label,active,content}){
  return `<div class="nav-item"><a class="nav-link" href="${href}"${active?' aria-current="page"':''}>${label}${chevron()}</a><div class="nav-dropdown">${content}</div></div>`;
}

function createNavigationMarkup(){
  const comparisons=navItem({
    href:'/comparatifs/',label:'Comparatifs',active:isComparison,
    content:`<span class="nav-dropdown-label">Sélections</span>
      <a href="/comparatifs/meilleure-cafetiere-italienne/">Meilleures cafetières italiennes</a>
      <a href="/comparatifs/cafetiere-italienne-induction/">Pour l’induction</a>
      <a href="/comparatifs/cafetiere-italienne-inox/">Modèles inox</a>
      <a href="/comparatifs/cafetiere-italienne-electrique/">Modèles électriques</a>
      <a href="/comparatifs/cafetiere-italienne-design/">Cafetières design</a>
      <a href="/comparatifs/petite-cafetiere-italienne/">Petits formats</a>`
  });

  const brands=navItem({
    href:'/marques/',label:'Marques',active:isBrand||isModel,
    content:`<span class="nav-dropdown-label">Marques</span>
      <a href="/marques/bialetti/">Bialetti</a>
      <a href="/marques/alessi/">Alessi</a>
      <div class="nav-dropdown-separator"></div>
      <span class="nav-dropdown-label">Modèles</span>
      <a href="/modeles/">Tous les modèles</a>
      <a href="/modeles/bialetti-moka-express/">Bialetti Moka Express</a>
      <a href="/modeles/bialetti-venus/">Bialetti Venus</a>
      <a href="/modeles/bialetti-moka-induction/">Bialetti Moka Induction</a>
      <a href="/modeles/alessi-9090/">Alessi 9090</a>`
  });

  const capacities=navItem({
    href:'/capacites/',label:'Par taille',active:isCapacity,
    content:`<span class="nav-dropdown-label">Choisir le bon volume</span>
      <a href="/capacites/">Guide des tailles</a>
      <div class="nav-dropdown-separator"></div>
      <a href="/capacites/cafetiere-italienne-2-tasses/">2 tasses · ≈ 85–100 ml</a>
      <a href="/capacites/cafetiere-italienne-4-tasses/">4 tasses · ≈ 150–185 ml</a>
      <a href="/capacites/cafetiere-italienne-6-tasses/">6 tasses · ≈ 235–300 ml</a>
      <a href="/capacites/cafetiere-italienne-10-tasses/">10 tasses</a>
      <a href="/capacites/cafetiere-italienne-12-tasses/">12 tasses · ≈ 595 ml</a>`
  });

  const guides=navItem({
    href:'/guides/',label:'Guides',active:(isGuide&&!isMaintenance)||isCafeMoka,
    content:`<span class="nav-dropdown-label">Bien choisir</span>
      <a href="/guides/comment-choisir-cafetiere-italienne/">Comment choisir sa moka</a>
      <a href="/guides/cafetiere-italienne-aluminium-ou-inox/">Aluminium ou inox ?</a>
      <a href="/guides/cafetiere-italienne-induction-compatibilite/">Compatibilité induction</a>
      <div class="nav-dropdown-separator"></div>
      <span class="nav-dropdown-label">Préparer</span>
      <a href="/guides/comment-utiliser-cafetiere-italienne/">Comment utiliser une moka</a>
      <a href="/guides/premiere-utilisation-cafetiere-italienne/">Première utilisation</a>
      <a href="/guides/dosage-cafe-cafetiere-italienne/">Dosage du café</a>
      <a href="/guides/mouture-cafetiere-italienne/">Choisir la mouture</a>
      <a href="/guides/quel-cafe-pour-cafetiere-italienne/">Quel café choisir ?</a>
      <div class="nav-dropdown-separator"></div>
      <span class="nav-dropdown-label">Comprendre</span>
      <a href="/cafe-moka/">Café moka</a>
      <a href="/guides/cafetiere-italienne-vs-espresso/">Moka ou espresso ?</a>`
  });

  const care=navItem({
    href:'/accessoires/',label:'Entretien',active:isAccessory||isMaintenance,
    content:`<span class="nav-dropdown-label">Entretenir et dépanner</span>
      <a href="/guides/nettoyer-cafetiere-italienne/">Nettoyer sa moka</a>
      <a href="/guides/detartrer-cafetiere-italienne/">Détartrer</a>
      <a href="/guides/changer-joint-cafetiere-italienne/">Changer le joint</a>
      <a href="/guides/cafetiere-italienne-fuite-vapeur/">Fuite de vapeur</a>
      <a href="/guides/cafetiere-italienne-cafe-amer-brule/">Café amer ou brûlé</a>
      <div class="nav-dropdown-separator"></div>
      <span class="nav-dropdown-label">Pièces et accessoires</span>
      <a href="/accessoires/">Tous les accessoires</a>
      <a href="/accessoires/adaptateur-induction-cafetiere-italienne/">Adaptateur induction</a>
      <a href="/accessoires/joint-cafetiere-italienne/">Joint</a>
      <a href="/accessoires/filtre-cafetiere-italienne/">Filtre</a>
      <a href="/accessoires/pieces-detachees-bialetti/">Pièces détachées Bialetti</a>`
  });

  return comparisons+brands+capacities+guides+care;
}

function setupNavigation(){
  const header=document.querySelector('.site-header');
  const row=header?.querySelector('.header-row');
  if(!header||!row)return;

  let navigation=row.querySelector('#site-navigation.site-nav');
  let cta=row.querySelector('.header-cta');
  let menu=row.querySelector('.menu-btn');

  if(!navigation||!cta||!menu){
    const brand=row.querySelector('.brand');
    if(!brand)return;

    navigation=document.createElement('nav');
    navigation.className='site-nav nav';
    navigation.id='site-navigation';
    navigation.setAttribute('aria-label','Navigation principale');
    navigation.innerHTML=createNavigationMarkup();

    cta=document.createElement('a');
    cta.className='header-cta';
    cta.href='/#finder';
    cta.textContent='Trouver ma moka';

    menu=document.createElement('button');
    menu.className='menu-btn burger';
    menu.type='button';
    menu.setAttribute('aria-label','Ouvrir le menu');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-controls','site-navigation');
    menu.innerHTML='<span class="burger-lines" aria-hidden="true"><span></span><span></span><span></span></span>';

    row.replaceChildren(brand,navigation,cta,menu);
  }

  document.querySelector('.quick-nav')?.remove();

  const closeMenu=()=>{
    document.body.classList.remove('nav-open');
    navigation.classList.remove('open');
    menu.setAttribute('aria-expanded','false');
    menu.setAttribute('aria-label','Ouvrir le menu');
  };
  const setMobileNavTop=()=>{
    document.documentElement.style.setProperty('--mobile-nav-top',`${Math.round(header.getBoundingClientRect().bottom)}px`);
  };

  menu.setAttribute('aria-expanded','false');
  menu.setAttribute('aria-controls','site-navigation');
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')==='true';
    if(open){
      closeMenu();
      return;
    }
    setMobileNavTop();
    document.body.classList.add('nav-open');
    navigation.classList.add('open');
    menu.setAttribute('aria-expanded','true');
    menu.setAttribute('aria-label','Fermer le menu');
  });

  navigation.addEventListener('click',event=>{
    if(event.target.closest('a')&&window.matchMedia('(max-width:900px)').matches)closeMenu();
  });
  document.addEventListener('keydown',event=>{
    if(event.key==='Escape')closeMenu();
  });
  window.addEventListener('resize',()=>{
    if(!window.matchMedia('(max-width:900px)').matches)closeMenu();
    else if(document.body.classList.contains('nav-open'))setMobileNavTop();
  });
}

setupNavigation();

function slugifyHeading(value){
  return value.toLowerCase().normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}

function setupGuideReadingTools(){
  if(!guideType)return;
  const layout=document.querySelector('.guide-layout');
  const article=layout?.querySelector('.guide-article');
  if(!layout||!article)return;

  const headings=[...article.querySelectorAll(':scope > section:not(.guide-answer):not(.guide-sources) > h2')];
  const used=new Set();
  headings.forEach((heading,index)=>{
    if(heading.id){used.add(heading.id);return;}
    let base=slugifyHeading(heading.textContent)||`section-${index+1}`;
    let id=base;
    let suffix=2;
    while(used.has(id)||document.getElementById(id))id=`${base}-${suffix++}`;
    heading.id=id;
    used.add(id);
  });

  if(headings.length>=4){
    const makeToc=className=>{
      const nav=document.createElement('nav');
      nav.className=className;
      nav.setAttribute('aria-label','Dans ce guide');
      nav.innerHTML=`<span class="eyebrow">Dans ce guide</span><ol>${headings.map((heading,index)=>`<li><a href="#${heading.id}"><span>${String(index+1).padStart(2,'0')}</span>${heading.textContent}</a></li>`).join('')}</ol>`;
      return nav;
    };
    const aside=layout.querySelector('aside');
    if(aside)aside.prepend(makeToc('sidebar-toc'));
    layout.insertBefore(makeToc('guide-mobile-toc'),article);
  }

  article.querySelectorAll('.guide-table').forEach(table=>{
    const headers=[...table.querySelectorAll('thead th')].map(th=>th.textContent.trim());
    if(headers.length<2||headers.length>3)return;
    table.classList.add('guide-table--stackable');
    table.querySelectorAll('tbody tr').forEach(row=>{
      [...row.children].forEach((cell,index)=>{
        if(headers[index])cell.dataset.label=headers[index];
      });
    });
  });
}

setupGuideReadingTools();

const comparisonBuyerCues={
  '/comparatifs/meilleure-cafetiere-italienne':{
    title:'À vérifier avant achat',
    items:['Votre plaque de cuisson','Le volume réellement préparé','Le mode d’entretien accepté']
  },
  '/comparatifs/cafetiere-italienne-induction':{
    title:'À vérifier avant achat',
    items:['Diamètre minimal détecté par votre plaque','Compatibilité de la taille exacte','Volume réellement préparé']
  },
  '/comparatifs/cafetiere-italienne-inox':{
    title:'À vérifier avant achat',
    items:['Compatibilité de votre plaque','Construction réellement en inox','Consignes de lavage du fabricant']
  },
  '/comparatifs/cafetiere-italienne-electrique':{
    title:'À vérifier avant achat',
    items:['Capacité réellement utile','Arrêt automatique / maintien au chaud','Disponibilité actuelle de la référence']
  },
  '/comparatifs/cafetiere-italienne-design':{
    title:'À vérifier avant achat',
    items:['Compatibilité avec votre plaque','Fonction apportée par le design','Place visible ou rangement après usage']
  },
  '/comparatifs/petite-cafetiere-italienne':{
    title:'À vérifier avant achat',
    items:['Volume en ml, pas seulement en “tasses”','Détection induction si nécessaire','Taille minimale vraiment utile']
  }
};

function enhanceReconsideredSection(article){
  const heading=[...article.querySelectorAll('h2')].find(h=>/^reconsider/i.test(h.id||'')||/reconsid/i.test(h.textContent));
  if(!heading)return;
  heading.classList.add('comparison-reconsidered__heading');
  let node=heading.nextElementSibling;
  let index=1;
  while(node&&node.tagName!=='H2'){
    if(node.tagName==='P'){
      node.classList.add('comparison-reconsidered__item');
      const strong=node.querySelector(':scope > strong:first-child');
      if(strong){
        const label=document.createElement('span');
        label.className='comparison-reconsidered__index';
        label.textContent=String(index++).padStart(2,'0');
        node.prepend(label);
        strong.classList.add('comparison-reconsidered__name');
      }
    }
    node=node.nextElementSibling;
  }
}

function addComparisonBuyerCue(aside){
  const cue=comparisonBuyerCues[currentPath];
  if(!cue||!aside)return;
  const block=document.createElement('section');
  block.className='comparison-buyer-cue';
  block.innerHTML=`<span class="eyebrow">${cue.title}</span><ul>${cue.items.map(item=>`<li>${item}</li>`).join('')}</ul>`;
  aside.append(block);
}

function addDesignLanguageMap(article){
  if(currentPath!=='/comparatifs/cafetiere-italienne-design')return;
  const verdict=article.querySelector('.article-answer');
  if(!verdict)return;
  const map=document.createElement('section');
  map.className='comparison-design-map';
  map.setAttribute('aria-label','Cinq approches du design');
  map.innerHTML=`<span class="eyebrow">Quel design cherchez-vous ?</span>
    <div class="comparison-design-map__grid">
      <div><strong>Fonctionnel</strong><span>Alessi 9090</span></div>
      <div><strong>Sculptural</strong><span>Pulcina</span></div>
      <div><strong>Architectural</strong><span>La Cupola</span></div>
      <div><strong>Décoratif</strong><span>Bialetti × D&G</span></div>
      <div><strong>Contemporain</strong><span>Alessi Vite</span></div>
    </div>`;
  verdict.insertAdjacentElement('afterend',map);
}

function setupComparisonTools(){
  if(!isComparison||currentPath==='/comparatifs')return;
  const layout=document.querySelector('.comparison-layout');
  const article=layout?.querySelector('.content-main');
  const aside=layout?.querySelector('aside');
  if(!layout||!article)return;

  if(aside)aside.classList.add('content-sidebar');

  const headings=[...article.querySelectorAll('h2')].filter(heading=>heading.id);
  if(headings.length>=5&&aside){
    const toc=document.createElement('nav');
    toc.className='sidebar-toc';
    toc.setAttribute('aria-label','Dans ce comparatif');
    toc.innerHTML=`<h4>Dans ce comparatif</h4>${headings.map((heading,index)=>`<a href="#${heading.id}"><span>${String(index+1).padStart(2,'0')}</span>${heading.textContent}</a>`).join('')}`;
    aside.prepend(toc);

    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top)[0];
      if(!visible)return;
      toc.querySelectorAll('a').forEach(link=>link.classList.toggle('is-active',link.getAttribute('href')===`#${visible.target.id}`));
    },{rootMargin:'-18% 0px -68% 0px',threshold:0});
    headings.forEach(heading=>observer.observe(heading));
  }

  enhanceReconsideredSection(article);
  addComparisonBuyerCue(aside);
  addDesignLanguageMap(article);

  const firstTable=article.querySelector('.table-wrapper .comp-table');
  const firstHeading=firstTable?.closest('.table-wrapper')?.previousElementSibling;
  if(firstTable&&firstHeading?.tagName==='H2'){
    const rows=[...firstTable.querySelectorAll('tbody tr')].slice(0,4);
    if(rows.length>=2){
      const shortlist=document.createElement('section');
      shortlist.className='comparison-shortlist';
      shortlist.setAttribute('aria-label','Choix à retenir');
      shortlist.innerHTML=`<span class="eyebrow">À retenir</span><div class="comparison-shortlist__rows">${rows.map((row,index)=>{
        const cells=[...row.children];
        const context=cells[0]?.textContent.trim()||'';
        const choice=cells[1]?.textContent.trim()||context;
        const detail=(cells[2]?.textContent.trim()||'').replace(/\s+/g,' ');
        return `<div class="comparison-shortlist__row"><span class="comparison-shortlist__index">${String(index+1).padStart(2,'0')}</span><div><strong>${choice}</strong><span>${context}</span>${detail?`<small>${detail}</small>`:''}</div></div>`;
      }).join('')}</div>`;
      const verdict=article.querySelector('.article-answer');
      verdict?.insertAdjacentElement('afterend',shortlist);
    }
  }
}

setupComparisonTools();

const answers={};let step=0;const steps=[...document.querySelectorAll('.finder-step')];const bars=[...document.querySelectorAll('.finder-progress i')];
function render(){steps.forEach((el,i)=>el.classList.toggle('active',i===step));bars.forEach((el,i)=>el.classList.toggle('on',i<=step))}
document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>{answers[btn.dataset.key]=btn.dataset.value;btn.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');setTimeout(()=>{if(step<steps.length-1){step++;render()}else{document.querySelector('.finder-questions').style.display='none';const result=document.querySelector('.finder-result');result.classList.add('show');const profile=answers.plaque==='Induction'?'une cafetière en inox compatible induction':'une moka traditionnelle';result.querySelector('[data-result]').textContent=`Nous vous conseillons ${profile}, en ${answers.taille||'6 tasses'}, avec un budget ${answers.budget||'€€'}.`; }},180)}));
document.querySelector('.reset')?.addEventListener('click',()=>{step=0;Object.keys(answers).forEach(k=>delete answers[k]);document.querySelector('.finder-questions').style.display='block';document.querySelector('.finder-result').classList.remove('show');document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));render()});
