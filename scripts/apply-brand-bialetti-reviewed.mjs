import fs from 'node:fs';
import path from 'node:path';

const root=path.resolve(import.meta.dirname,'..');
const page=path.join(root,'marques','bialetti','index.html');
let html=fs.readFileSync(page,'utf8');

const needle=`<div class="guide-callout"><strong>Deuxième hard gate :</strong> même lorsqu’une variante est annoncée induction, Bialetti demande de vérifier que le diamètre de sa base est détecté par votre table de cuisson. La compatibilité du matériau ne suffit donc pas à elle seule.</div><p><a class="text-link" href="/guides/cafetiere-italienne-induction-compatibilite/">Vérifier la compatibilité induction pas à pas →</a> · <a class="text-link" href="/comparatifs/cafetiere-italienne-induction/">Comparer les moka induction →</a></p>`;

const replacement=`<div class="guide-callout"><strong>Deuxième hard gate :</strong> même lorsqu’une variante est annoncée induction, Bialetti demande de vérifier que le diamètre de sa base est détecté par votre table de cuisson. La compatibilité du matériau ne suffit donc pas à elle seule.</div><p><strong>Troisième voie : l’adaptateur induction.</strong> Si vous tenez à une variante aluminium qui n’est pas compatible directement, l’adaptateur constitue une option distincte plutôt qu’une nouvelle famille de moka. Bialetti le mentionne notamment pour la Moka Exclusive classique. Vérifiez toutefois les dimensions et les consignes de votre plaque avant de retenir cette solution.</p><p><a class="text-link" href="/accessoires/adaptateur-induction-cafetiere-italienne/">Comprendre quand utiliser un adaptateur induction →</a> · <a class="text-link" href="/guides/cafetiere-italienne-induction-compatibilite/">Vérifier la compatibilité induction pas à pas →</a> · <a class="text-link" href="/comparatifs/cafetiere-italienne-induction/">Comparer les moka induction →</a></p>`;

if(!html.includes(needle)){
  throw new Error('Bialetti induction decision block not found; reviewed override not applied.');
}

html=html.replace(needle,replacement);
fs.writeFileSync(page,html);
console.log('PASS: reviewed Bialetti induction decision layer applied.');
