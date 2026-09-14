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

const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menu&&nav){
  menu.setAttribute('aria-expanded','false');
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
}

const answers={};let step=0;const steps=[...document.querySelectorAll('.finder-step')];const bars=[...document.querySelectorAll('.finder-progress i')];
function render(){steps.forEach((el,i)=>el.classList.toggle('active',i===step));bars.forEach((el,i)=>el.classList.toggle('on',i<=step))}
document.querySelectorAll('.option').forEach(btn=>btn.addEventListener('click',()=>{answers[btn.dataset.key]=btn.dataset.value;btn.parentElement.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));btn.classList.add('selected');setTimeout(()=>{if(step<steps.length-1){step++;render()}else{document.querySelector('.finder-questions').style.display='none';const result=document.querySelector('.finder-result');result.classList.add('show');const profile=answers.plaque==='Induction'?'une cafetière en inox compatible induction':'une moka traditionnelle';result.querySelector('[data-result]').textContent=`Nous vous conseillons ${profile}, en ${answers.taille||'6 tasses'}, avec un budget ${answers.budget||'€€'}.`; }},180)}));
document.querySelector('.reset')?.addEventListener('click',()=>{step=0;Object.keys(answers).forEach(k=>delete answers[k]);document.querySelector('.finder-questions').style.display='block';document.querySelector('.finder-result').classList.remove('show');document.querySelectorAll('.option').forEach(x=>x.classList.remove('selected'));render()});
