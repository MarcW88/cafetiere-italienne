import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const page=path.join(root,'modeles','bialetti-moka-induction','index.html');
if(!fs.existsSync(page)) throw new Error('Bialetti Moka Induction generated page not found.');

let html=fs.readFileSync(page,'utf8');
const canonical='https://cafetiere-italienne.be/modeles/bialetti-moka-induction/';
if(!html.includes(`<link rel="canonical" href="${canonical}">`)) throw new Error('Unexpected Moka Induction canonical before v2 retest correction.');

const oldRow='<tr><td>2 tasses</td><td>≈ 100 ml</td><td>≈ 9,5 cm</td></tr>';
const newRow='<tr><td>2 tasses</td><td>≈ 90–100 ml selon référence / marché</td><td>≈ 9,5 cm sur la référence NZ vérifiée</td></tr>';
if(!html.includes(oldRow)) throw new Error('Moka Induction 2-cup volume row not found.');
html=html.replace(oldRow,newRow);

const oldVariant='<p>La Bi-Layer noire actuelle est donnée à environ 100, 150 et 280 ml en 2, 4 et 6 tasses. Des éditions Dolce&amp;Gabbana consultées affichent pourtant environ 90 ml en 2 tasses et 190 ml en 4 tasses, tout en restant dans la famille Moka Induction.</p>';
const newVariant='<p>La référence Bi-Layer noire consultée en Nouvelle-Zélande est donnée à environ 100, 150 et 280 ml en 2, 4 et 6 tasses. Mais le shop officiel Bialetti Russie et une fiche belge actuelle donnent environ 90 ml pour la 2 tasses standard, avec 150 et 280 ml pour les 4 et 6 tasses. La 2 tasses doit donc être lue comme <strong>≈ 90–100 ml selon la référence et le marché</strong>, pas comme un chiffre mondial unique.</p><p>Les éditions confirment cette prudence : une D&amp;G 4 tasses vérifiée est donnée à environ 190 ml, tandis qu’une Blu Mediterraneo 4 tasses est autour de 150 ml et sa 6 tasses autour de 225 ml. Le nom “Moka Induction” — ou même “D&amp;G Moka Induction” — ne suffit donc pas pour déduire le volume exact.</p>';
if(!html.includes(oldVariant)) throw new Error('Moka Induction exact-variant paragraph not found.');
html=html.replace(oldVariant,newVariant);

const sourceAnchor='<li><a href="https://www.bialetti.co.nz/products/bialetti-dolce-gabbana-moka-induction-2-cup-blumed">Bialetti — variante D&amp;G 4 tasses</a></li>';
if(!html.includes(sourceAnchor)) throw new Error('Moka Induction sources anchor not found.');
const extraSources=sourceAnchor+'<li><a href="https://bialetti.ru/catalog/geyzernye_kofevarki/geyzernaya_kofevarka_bialetti_moka_induction_2020_chyernaya.html">Bialetti — Moka Induction 2020, volumes marché RU</a></li><li><a href="https://www.interismo.be/fr-BE/bialetti/moka-induction-rouge">Interismo Belgique — Moka Induction rouge, volumes UE</a></li>';
html=html.replace(sourceAnchor,extraSources);

if(!html.includes('≈ 90–100 ml selon référence / marché')) throw new Error('Moka Induction cross-market volume qualification not applied.');
if(!html.includes('Blu Mediterraneo 4 tasses')) throw new Error('Moka Induction edition-specific qualification not applied.');

fs.writeFileSync(page,html);
console.log('PASS: Moka Induction cross-market volume correction applied.');
