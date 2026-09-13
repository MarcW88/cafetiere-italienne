import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');let errors=[];let html=0;
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','node_modules'].includes(e.name))continue;const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.html')){html++;const s=fs.readFileSync(p,'utf8');for(const m of s.matchAll(/href="(\/[^"]*)"/g)){const u=m[1].split('#')[0];if(!u||u.includes('.'))continue;const target=path.join(root,u,'index.html');if(!fs.existsSync(target))errors.push(`${path.relative(root,p)} → ${u}`)}}}}
walk(root);if(errors.length){console.error('Liens internes cassés:\n'+errors.join('\n'));process.exit(1)}console.log(`${html} pages HTML vérifiées, aucun lien interne cassé.`);
