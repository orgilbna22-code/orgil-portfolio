'use strict';
const translations = {
  mn: {
    'nav.work':'Төслүүд','nav.about':'Миний тухай','nav.learning':'Суралцаж буй зүйлс','header.note':'Бүтээж, суралцсаар байна.',
    'hero.eyebrow':'СУРАГЧ. СОНИУЧ СЭТГЭЛГЭЭ. БҮТЭЭЛЧ.','hero.line1':'Суралцъя.','hero.line2':'Бүтээе.','hero.line3':'Хөгжье.',
    'hero.description':'Би Оргил. Монголд сурдаг, санаагаа программ болгож суралцаж буй сурагч. Миний туршилтууд энд төслүүд болон хөгжиж байна.',
    'hero.cta':'Миний төслүүдийг үзэх','hero.codecomment':'# өдөр бүр нэг жижиг алхам','hero.visualbottom':'Жижиг санаа. Бодит ахиц.','hero.tag':'Сониуч зангаас эхэлсэн','hero.foot':'Эхний мөр кодоос хэрэгтэй бүтээл хүртэл.',
    'work.eyebrow':'МИНИЙ ХӨГЖҮҮЛЖ БУЙ САНААНУУД','work.title':'Жижиг эхлэл.<br>Үнэ цэнтэй төслүүд.','work.intro':'Компьютерын хараа, өдөр тутмын хэрэгслүүд болон нийгэмд хэрэгтэй технологийн туршилтууд.','work.details':'Төслийн талаар <span aria-hidden="true">+</span>',
    'whiteboard.preview':'ХУЛГАНААР ТУРШИХ','whiteboard.sketch':'Нэг зурааснаас санаа эхэлнэ.','whiteboard.sketchhint':'Хулгана, хуруу эсвэл сумтай товчоор зураарай','whiteboard.clear':'Зургийг цэвэрлэх','whiteboard.description':'Камер, OpenCV, MediaPipe ашиглан гарын хөдөлгөөнийг зурах үйлдэл болгон хувиргах Python туршилт.',
    'status.prototype':'Туршилтын хувилбар','status.development':'Хөгжүүлж буй','status.building':'Сайжруулж буй',
    'fire.concept':'САНААНЫ ЗАГВАР','fire.visual':'Гал гарахаас өмнө<br>эрсдэлийг нь харуулна.','fire.factor1':'Хүн амын нягтрал','fire.factor2':'Орчны нөхцөл','fire.factor3':'Ойлгомжтой тайлбар','fire.note':'Бодит эрсдэлийн өгөгдөлгүй санааны загвар.','fire.description':'Газрын зураг, өгөгдөл ашиглан Улаанбаатарын галын эрсдэлийг ойлгомжтой харуулах боломжийг судалж буй багийн төсөл.',
    'tag.web':'Веб хөгжүүлэлт','tag.maps':'Газрын зураг','tag.team':'Багийн төсөл','tag.desktop':'Компьютерын апп','tag.interface':'Интерфейсийн дизайн',
    'music.concept':'ИНТЕРФЕЙСИЙН ЗАГВАР','music.visualsmall':'ЧИНИЙ ХӨГЖИМ, ЧИНИЙ ОРОН ЗАЙ','music.visual':'Дуртай хөгжмөө<br>өөрийн орчинд.','music.note':'Дуу тоглуулахгүй интерфейсийн загвар.','music.title':'Офлайн хөгжим тоглуулагч','music.description':'Өөрийн хөгжмийн файлуудыг тоглуулах, цэвэрхэн интерфейстэй компьютерын программ бүтээж суралцаж байна.',
    'about.eyebrow':'МИНИЙ ТУХАЙ','about.title':'Сайн уу, би Оргил.<br>Суралцсаар байна.<br><span class="serif">Бүтээсээр байна.</span>','about.lead':'Миний зорилго бол программ хангамжийн инженер болох. Одоохондоо асуулт асууж, туршиж, код яагаад ажилладгийг ойлгохоос эхэлж байна.','about.body':'Python бол миний эхлэл. Мөн веб хөгжүүлэлт, GitHub болон технологийг ашиглахад хялбар болгох дизайныг судалж байна. Эдгээр төслүүд бол миний суралцаж буй замын нэг хэсэг.','about.value1':'Яагаад гэдгийг ойлгох.','about.value2':'Хэрэгтэй зүйл бүтээх.','about.value3':'Тасралтгүй сайжрах.',
    'learning.eyebrow':'ДАРААГИЙН АЛХАМ','learning.title':'Дараагийн бүлэг<br>суралцахаас эхэлнэ.','learning.intro':'Программ хангамжийн инженер болохын тулд анхаарч буй чадварууд.','learning.python':'Python-ийн үндэс','learning.pythonbody':'Төсөл бүтээж, мөр бүрийг ойлгож, асуудал шийдэх чадвараа хөгжүүлэх.','learning.current':'Гол анхаарах зүйл','learning.web':'Веб ба GitHub','learning.webbody':'Санаагаа вебсайт болгож, хийсэн ажлаа хадгалах, эмхлэх, хуваалцаж сурах.','learning.exploring':'Судалж буй','learning.english':'Англи хэл ба харилцаа','learning.englishbody':'Илүү их уншиж, санаагаа ойлгомжтой тайлбарлаж, шинэ боломжуудад бэлдэх.','learning.ongoing':'Үргэлжлүүлж буй',
    'closing.eyebrow':'МИНИЙ ЗОРИЛГО','closing.statement':'Бүтээхийн тулд суралц.<br>Суралцахын тулд <em>бүтээ.</em>','closing.cta':'Төслүүд рүү буцах','footer.text':'Суралцсан зүйлээ хуваалцъя. Нэг төслөөс эхэлнэ.','dialog.eyebrow':'ТӨСЛИЙН ТЭМДЭГЛЭЛ','dialog.done':'Портфолио руу буцах'
  }
};
const en = {};
document.querySelectorAll('[data-i18n]').forEach(el => { en[el.dataset.i18n] = el.innerHTML; });
en['whiteboard.sketchhint'] = 'Drag to sketch, or focus here and use arrow keys';
translations.en = en;
const projectNotes = {
  whiteboard: {
    en: {title:'Virtual Whiteboard Pro',summary:'An experiment in making a computer respond to a hand gesture instead of a mouse.',notes:[['The idea','Use a camera to track a hand, then turn fingertip movement into strokes on a digital board.'],['In the Python prototype','OpenCV and MediaPipe support drawing and erasing gestures. The code also includes brush controls, undo and redo, fullscreen, and PNG captures.'],['What this page shows','The sketchpad is a small browser demonstration using a mouse, touch, or arrow keys. The camera-based Python app runs separately.'],['What I’m exploring','Computer vision, smoother input, and clear feedback when gestures change.']]},
    mn: {title:'Virtual Whiteboard Pro',summary:'Хулганын оронд гарын хөдөлгөөнөөр компьютерт үйлдэл хийх туршилт.',notes:[['Санаа','Камераар гарын хөдөлгөөн илрүүлж, хурууны хөдөлгөөнийг дижитал самбар дээрх зураас болгох.'],['Python туршилтын хувилбар','OpenCV, MediaPipe ашиглан зурах, арилгах хөдөлгөөн илрүүлнэ. Кодод бийрийн тохиргоо, undo/redo, бүтэн дэлгэц болон PNG зураг хадгалах боломжууд бий.'],['Энэ хуудсан дээр','Хулгана, хуруу эсвэл сумтай товчоор зурах жижиг веб туршилт байна. Камер ашигладаг Python программ тусдаа ажиллана.'],['Судалж буй зүйлс','Компьютерын хараа, хөдөлгөөний жигд байдал болон дохио солигдоход ойлгомжтой мэдээлэл өгөх.']]}
  },
  fire: {
    en: {title:'FireWatch UB',summary:'A school team project exploring a clearer way to understand fire risk in Ulaanbaatar.',notes:[['The question','Could a map help people see which conditions may contribute to fire risk, and understand the reasons?'],['The direction','Explore area-level factors such as population density, compare them consistently, and explain the result in plain language.'],['Current stage','The concept and implementation are in development. This portfolio does not display a validated risk model or live risk predictions.'],['What I’m exploring','Web development, data normalization, maps, and working as part of a team.']]},
    mn: {title:'FireWatch UB',summary:'Улаанбаатарын галын эрсдэлийг ойлгомжтой харуулах боломжийг судалж буй сургуулийн багийн төсөл.',notes:[['Асуулт','Газрын зураг ашиглан галын эрсдэлд нөлөөлж болох нөхцөлүүд болон шалтгааныг нь ойлгомжтой харуулж болох уу?'],['Чиглэл','Хүн амын нягтрал зэрэг бүсийн хүчин зүйлсийг судалж, нэг хэмжүүрээр харьцуулан, үр дүнг нь энгийн үгээр тайлбарлах.'],['Одоогийн үе шат','Санаа болон хэрэгжүүлэлтийг хөгжүүлж байна. Энэ портфолио баталгаажсан эрсдэлийн загвар, бодит цагийн таамаглал харуулахгүй.'],['Судалж буй зүйлс','Веб хөгжүүлэлт, өгөгдлийн нормализаци, газрын зураг болон багийн ажил.']]}
  },
  music: {
    en: {title:'Offline Music Player',summary:'A personal desktop project that makes learning Python feel useful in everyday life.',notes:[['The idea','Build a place for local music files with a simple, personal interface.'],['The process','Work through opening folders, finding music files, playback behavior, and interface refinements.'],['Current stage','Building and troubleshooting the Python project. The visual on this page is an interface study with no audio playback.'],['What I’m exploring','Desktop interfaces, file handling, and turning a familiar app idea into my own project.']]},
    mn: {title:'Офлайн хөгжим тоглуулагч',summary:'Python сурахыг өдөр тутмын хэрэглээтэй холбосон хувийн компьютерын төсөл.',notes:[['Санаа','Өөрийн хөгжмийн файлуудад зориулсан энгийн, хувийн интерфейстэй орчин бүтээх.'],['Хийж буй ажил','Хавтас нээх, хөгжмийн файл олох, тоглуулах үйлдэл болон интерфейсийг сайжруулах.'],['Одоогийн үе шат','Python төслөө бүтээж, алдааг нь засаж байна. Энэ хуудсан дахь дүрслэл нь дуу тоглуулахгүй интерфейсийн загвар.'],['Судалж буй зүйлс','Компьютерын интерфейс, файлтай ажиллах болон танил санааг өөрийн төсөл болгон хэрэгжүүлэх.']]}
  }
};
let language = 'en';
let openedProject = null;
const languageButton = document.querySelector('.language-toggle');
const dialog = document.querySelector('#project-dialog');
function renderProject() {
  if (!openedProject) return;
  const data = projectNotes[openedProject][language];
  document.querySelector('#dialog-title').textContent = data.title;
  document.querySelector('.dialog-summary').textContent = data.summary;
  const notes = document.querySelector('.dialog-notes');
  notes.replaceChildren();
  data.notes.forEach(([title, body]) => {
    const dt = document.createElement('dt'); dt.textContent = title;
    const dd = document.createElement('dd'); dd.textContent = body;
    notes.append(dt, dd);
  });
}
function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[language][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  languageButton.innerHTML = language === 'en' ? '<strong>EN</strong> <span>/</span> MN' : 'EN <span>/</span> <strong>MN</strong>';
  languageButton.setAttribute('aria-label',language === 'en' ? 'Switch to Mongolian' : 'Switch to English');
  document.querySelector('.skip-link').textContent = language === 'en' ? 'Skip to content' : 'Үндсэн хэсэг рүү очих';
  document.querySelector('nav').setAttribute('aria-label',language === 'en' ? 'Main navigation' : 'Үндсэн цэс');
  document.querySelector('.dialog-close').setAttribute('aria-label',language === 'en' ? 'Close project notes' : 'Төслийн тэмдэглэлийг хаах');
  document.querySelector('#sketch').setAttribute('aria-label',language === 'en' ? 'Interactive sketchpad. Drag to draw or use arrow keys.' : 'Зурах самбар. Хулгана, хуруу эсвэл сумтай товчоор зураарай.');
  const colors = language === 'en' ? ['Green ink','White ink','Sage ink'] : ['Ногоон өнгө','Цагаан өнгө','Бүдэг ногоон өнгө'];
  document.querySelectorAll('.color-choice').forEach((el,i) => el.setAttribute('aria-label', colors[i]));
  document.title = language === 'en' ? 'Orgil — Learning. Building. Becoming.' : 'Оргил — Суралцъя. Бүтээе. Хөгжье.';
  renderProject();
  try { localStorage.setItem('orgil-language',language); } catch {}
}
languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'mn' : 'en'));
try { if (localStorage.getItem('orgil-language') === 'mn') language = 'mn'; } catch {}
setLanguage(language);
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  openedProject = button.dataset.project;
  renderProject();
  dialog.showModal();
}));
document.querySelectorAll('.dialog-close,.dialog-done').forEach(button => button.addEventListener('click',() => dialog.close()));
dialog.addEventListener('click',event => { if(event.target === dialog) { const r=dialog.getBoundingClientRect(); if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom) dialog.close(); } });
dialog.addEventListener('close',() => { openedProject=null; });
document.querySelector('#year').textContent = String(new Date().getFullYear());

const canvas = document.querySelector('#sketch');
canvas.tabIndex = 0;
const context = canvas.getContext('2d');
const prompt = document.querySelector('.sketch-prompt');
let drawing = false;
let ink = '#b2ec54';
let previous = null;
let keyboardPoint = null;
let canvasWidth = 0;
let canvasHeight = 0;
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  if (rect.width === canvasWidth && rect.height === canvasHeight) return;
  const copy = document.createElement('canvas');
  copy.width=canvas.width;copy.height=canvas.height;
  if(copy.width && copy.height) copy.getContext('2d').drawImage(canvas,0,0);
  canvasWidth=rect.width;canvasHeight=rect.height;
  const ratio = Math.min(window.devicePixelRatio || 1,2);
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  context.setTransform(ratio,0,0,ratio,0,0);
  if(copy.width && copy.height) context.drawImage(copy,0,0,copy.width,copy.height,0,0,canvasWidth,canvasHeight);
  context.lineWidth = 3;context.lineCap='round';context.lineJoin='round';
  keyboardPoint = null;
}
new ResizeObserver(resizeCanvas).observe(canvas);
function getPoint(event) { const rect=canvas.getBoundingClientRect(); return {x:event.clientX-rect.left,y:event.clientY-rect.top}; }
function stroke(from,to) {
  prompt.classList.add('hidden');
  context.strokeStyle=ink;context.beginPath();context.moveTo(from.x,from.y);context.lineTo(to.x,to.y);context.stroke();
}
canvas.addEventListener('pointerdown',event => {
  if(event.button !== 0) return;
  event.preventDefault();canvas.focus({preventScroll:true});canvas.setPointerCapture(event.pointerId);
  drawing=true;previous=getPoint(event);stroke(previous,{x:previous.x+.1,y:previous.y+.1});
});
canvas.addEventListener('pointermove',event => {
  if(!drawing) return;
  const points=event.getCoalescedEvents ? event.getCoalescedEvents() : [event];
  (points.length ? points : [event]).forEach(pointEvent => {const point=getPoint(pointEvent);stroke(previous,point);previous=point;});
});
function stopDrawing(){drawing=false;previous=null;}
canvas.addEventListener('pointerup',stopDrawing);canvas.addEventListener('pointercancel',stopDrawing);canvas.addEventListener('lostpointercapture',stopDrawing);
canvas.addEventListener('keydown',event => {
  const moves={ArrowUp:[0,-8],ArrowDown:[0,8],ArrowLeft:[-8,0],ArrowRight:[8,0]};
  if(!moves[event.key]) return;
  event.preventDefault();
  const start=keyboardPoint || {x:canvasWidth/2,y:canvasHeight/2};
  const move=moves[event.key];
  const end={x:Math.max(2,Math.min(canvasWidth-2,start.x+move[0])),y:Math.max(2,Math.min(canvasHeight-2,start.y+move[1]))};
  stroke(start,end);keyboardPoint=end;
});
document.querySelectorAll('.color-choice').forEach(button => button.addEventListener('click',() => {
  ink=button.dataset.color;
  document.querySelectorAll('.color-choice').forEach(color => {const selected=color===button;color.classList.toggle('active',selected);color.setAttribute('aria-pressed',String(selected));});
}));
document.querySelector('.clear-sketch').addEventListener('click',() => {context.clearRect(0,0,canvasWidth,canvasHeight);prompt.classList.remove('hidden');keyboardPoint=null;});
