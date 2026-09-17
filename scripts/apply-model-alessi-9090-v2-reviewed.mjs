import fs from 'node:fs';

const file = 'modeles/alessi-9090/index.html';
let html = fs.readFileSync(file, 'utf8');

const marker = '<section><h2>Induction : la 1 tasse demande un contrôle particulier</h2>';
const reducerHeading = '<h2>Une 9090 peut couvrir deux volumes — mais seulement certains</h2>';

if (html.includes(reducerHeading)) {
  console.log('Alessi 9090 v2 reducer layer already applied');
  process.exit(0);
}

if (!html.includes(marker)) {
  throw new Error('Alessi 9090 v2: induction anchor not found');
}

const reducerSection = `<section><h2>Une 9090 peut couvrir deux volumes — mais seulement certains</h2><p>La taille nominale n’est pas toujours le seul volume utilisable. Le manuel de la 9090 documente trois couples avec <strong>filtre réducteur</strong> : la <strong>3 tasses peut préparer 1 tasse</strong>, la <strong>6 tasses peut préparer 3 tasses</strong> et la <strong>10 tasses peut préparer 6 tasses</strong>.</p><div class="table-wrap"><table class="guide-table"><thead><tr><th>9090 choisie</th><th>Capacité nominale</th><th>Second rendement documenté</th></tr></thead><tbody><tr><td>3 tasses</td><td>≈ 150 ml</td><td>1 tasse avec réducteur</td></tr><tr><td>6 tasses</td><td>≈ 300 ml</td><td>3 tasses avec réducteur</td></tr><tr><td>10 tasses</td><td>≈ 500 ml</td><td>6 tasses avec réducteur</td></tr></tbody></table></div><p>Pour quelqu’un qui alterne régulièrement entre 3 et 6 tasses, cela peut rendre la 6 tasses plus polyvalente qu’une lecture du seul volume nominal ne le laisse penser. En revanche, n’extrapolez pas d’autres combinaisons : seuls ces rendements sont documentés dans le manuel consulté.</p><div class="guide-callout"><strong>Attention :</strong> les réducteurs ne sont pas universels. Alessi référence encore aujourd’hui un réducteur distinct pour la 9090/3 (17605/R), la 9090/6 (17602/R) et la 9090/M 10 tasses (17611/R).</div></section>\n\n`;

html = html.replace(marker, reducerSection + marker);

const oldParts = '<p>Alessi commercialise encore des joints spécifiques aux 9090 1, 3, 6 et 10 tasses. La marque référence aussi des éléments dédiés comme un funnel 6 tasses, un microfiltre, un réducteur et un funnel 10 tasses.</p><p>C’est un signal utile pour la réparabilité, mais pas une promesse d’universalité : les références changent avec la taille. Pour une 9090 d’occasion ou ancienne, relevez le code du modèle avant de commander un consommable.</p>';
const newParts = '<p>Alessi commercialise encore des joints spécifiques aux 9090 1, 3, 6 et 10 tasses, ainsi que des funnels, microfiltres et <strong>réducteurs liés à une taille précise</strong>. Les réducteurs actuels portent notamment les références 17605/R pour la 3 tasses, 17602/R pour la 6 tasses et 17611/R pour la 10 tasses.</p><p>C’est un signal utile pour la réparabilité et la flexibilité du produit, mais pas une promesse d’universalité : les références changent avec la taille. Pour une 9090 d’occasion ou ancienne, relevez le code du modèle avant de commander un consommable ou un réducteur.</p>';
if (!html.includes(oldParts)) {
  throw new Error('Alessi 9090 v2: spare-parts anchor not found');
}
html = html.replace(oldParts, newParts);

const sourceAnchor = '<li><a href="https://alessi.com/collections/spare-parts">Alessi — catalogue de pièces détachées</a></li>';
if (!html.includes(sourceAnchor)) {
  throw new Error('Alessi 9090 v2: sources anchor not found');
}
const addedSources = '<li><a href="https://alessi.com/products/17605-r">Alessi — réducteur 9090/3</a></li><li><a href="https://alessi.com/products/17602-r">Alessi — réducteur 9090/6</a></li><li><a href="https://alessi.com/products/17611-r">Alessi — réducteur 9090/M 10 tasses</a></li><li><a href="https://www.manualslib.fr/manual/488734/Alessi-9090.html?page=7">Manuel 9090 — rendements avec filtre réducteur</a></li>';
html = html.replace(sourceAnchor, addedSources + sourceAnchor);

fs.writeFileSync(file, html);
console.log('Applied Alessi 9090 v2 reducer decision layer');
