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

const answers={};let step=0;const steps=[...document.querySelectorAll('.finder-step')];const bars=[...document.querySelectorAll('.finder-progress i')];
function render(){steps.forEach((el,i)=>el.classList.toggle('active',i===step));bars.forEach((el,i)=>el.classList.toggle('on',i<=step))}
document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>{answers[btn.dataset.key]=btn.dataset.value;btn.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');setTimeout(()=>{if(step<steps.length-1){step++;render()}else{document.querySelector('.finder-questions').style.display='none';const result=document.querySelector('.finder-result');result.classList.add('show');const profile=answers.plaque==='Induction'?'une cafetière en inox compatible induction':'une moka traditionnelle';result.querySelector('[data-result]').textContent=`Nous vous conseillons ${profile}, en ${answers.taille||'6 tasses'}, avec un budget ${answers.budget||'€€'}.`; }},180)}));
document.querySelector('.reset')?.addEventListener('click',()=>{step=0;Object.keys(answers).forEach(k=>delete answers[k]);document.querySelector('.finder-questions').style.display='block';document.querySelector('.finder-result').classList.remove('show');document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));render()});
