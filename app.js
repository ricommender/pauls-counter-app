'use strict';

// Schuljahr 2026/27: Ereignisse aus ferienplan-2026-2027.md.
// Ereignisse bedeuten NICHT automatisch schulfrei.
const events = [
  ['2026-10-03', 'Tag der Deutschen Einheit', '🇩🇪', 'Feiertag', 'Ein Feiertag für ganz Deutschland.'],
  ['2026-10-31', 'Halloween', '🎃', 'Fun & Feste', 'Kürbisse, Kostüme und ein bisschen Grusel.'],
  ['2026-11-01', 'Allerheiligen', '🕯️', 'Feiertag', 'Ein stiller Feiertag in Baden-Württemberg.'],
  ['2026-11-11', 'St. Martin & Faschingsauftakt', '🏮', 'Tradition', 'Laternenzeit – und die Faschingssaison startet.'],
  ['2026-11-29', '1. Advent', '🕯️', 'Weihnachtszeit', 'Die gemütlichste Zeit des Jahres beginnt.'],
  ['2026-12-06', 'Nikolaus & 2. Advent', '🎅', 'Weihnachtszeit', 'Schuhe raus, es ist Nikolaustag!'],
  ['2026-12-13', '3. Advent', '🕯️', 'Weihnachtszeit', 'Nur noch wenige Tage bis Weihnachten.'],
  ['2026-12-20', '4. Advent', '🕯️', 'Weihnachtszeit', 'Der Weihnachtscountdown läuft.'],
  ['2026-12-24', 'Heiligabend', '🎄', 'Weihnachtszeit', 'Lichter an – Weihnachten ist da.'],
  ['2026-12-25', '1. Weihnachtsfeiertag', '🎁', 'Weihnachtszeit', 'Weihnachten feiern und entspannen.'],
  ['2026-12-26', '2. Weihnachtsfeiertag', '🎁', 'Weihnachtszeit', 'Noch ein Tag Weihnachtsgefühl.'],
  ['2026-12-31', 'Silvester', '🎆', 'Fun & Feste', 'Tschüss 2026, hallo neues Jahr!'],
  ['2027-01-01', 'Neujahr', '🎊', 'Feiertag', 'Neues Jahr, neue Highlights.'],
  ['2027-01-06', 'Heilige Drei Könige', '👑', 'Feiertag', 'Gesetzlicher Feiertag in Baden-Württemberg.'],
  ['2027-02-04', 'Schmotziger Donnerstag', '🎭', 'Fasching', 'Jetzt wird es närrisch!'],
  ['2027-02-08', 'Rosenmontag', '🎭', 'Fasching', 'Höhepunkt der Faschingszeit.'],
  ['2027-02-09', 'Faschingsdienstag', '🎉', 'Fasching', 'Noch einmal richtig feiern.'],
  ['2027-02-10', 'Aschermittwoch', '🥨', 'Fasching', 'Die Faschingszeit ist vorbei.'],
  ['2027-02-14', 'Valentinstag', '💌', 'Aktionstag', 'Kleine Gesten machen Freude.'],
  ['2027-03-21', 'Palmsonntag', '🌿', 'Osterzeit', 'Der Auftakt zur Karwoche.'],
  ['2027-03-25', 'Gründonnerstag', '🥖', 'Osterzeit', 'Ein Tag der Karwoche.'],
  ['2027-03-26', 'Karfreitag', '✝️', 'Osterzeit', 'Gesetzlicher Feiertag in Baden-Württemberg.'],
  ['2027-03-28', 'Ostersonntag', '🐣', 'Osterzeit', 'Zeit für Ostereier und Frühlingsgefühle.'],
  ['2027-03-29', 'Ostermontag', '🐰', 'Osterzeit', 'Noch ein Tag Ostern!'],
  ['2027-05-01', 'Tag der Arbeit', '🌷', 'Feiertag', 'Ein gesetzlicher Feiertag.'],
  ['2027-05-06', 'Christi Himmelfahrt & Vatertag', '☀️', 'Feiertag', 'Ein zusätzlicher schulfreier Donnerstag.', true],
  ['2027-05-09', 'Muttertag', '💐', 'Aktionstag', 'Ein Tag, um Danke zu sagen.'],
  ['2027-05-16', 'Pfingstsonntag', '🕊️', 'Pfingsten', 'Das Pfingstwochenende beginnt.'],
  ['2027-05-17', 'Pfingstmontag', '🕊️', 'Pfingsten', 'Ein zusätzlicher schulfreier Montag.', true],
  ['2027-05-27', 'Fronleichnam', '🌼', 'Feiertag', 'Feiertag während der Pfingstferien.'],
  ['2027-06-05', 'Maientag Nürtingen', '🎉', 'Lokal', 'Ein besonderes Ereignis in Nürtingen.']
].map(([date,title,emoji,category,description,freeDay=false], index) => ({
  id: `event-${index}`, date, start: date, end: date, title, emoji, category, description, kind:'event', freeDay
}));

const vacations = [
  ['2026-09-01','2026-09-13','Sommerferien 2026 (Rest)','🌞'],
  ['2026-10-26','2026-10-30','Herbstferien','🍂'],
  ['2026-12-23','2027-01-08','Weihnachtsferien','🎄'],
  ['2027-03-25','2027-04-02','Osterferien','🐣'],
  ['2027-05-18','2027-05-28','Pfingstferien','🛼'],
  ['2027-07-29','2027-09-12','Sommerferien 2027','🏖️']
].map(([start,end,title,emoji],index)=>({
  id:`vacation-${index}`,start,end,title,emoji,kind:'vacation',category:'Ferien',
  description:'Schulferien in Nürtingen und Umgebung.'
}));

const offDays = [
  ['2027-02-08','2027-02-12','Faschingsferien / unterrichtsfreie Tage','🎭'],
  ['2027-03-24','2027-03-24','Unterrichtsfrei vor Ostern','🌱'],
  ['2027-05-07','2027-05-07','Brückentag nach Himmelfahrt','✨']
].map(([start,end,title,emoji],index)=>({
  id:`off-${index}`,start,end,title,emoji,kind:'off',category:'Schulfrei',
  description:'Beweglicher Ferientag / unterrichtsfreier Tag laut Nürtinger Ferienplan.'
}));


// Das Swipe-Deck zeigt standardmäßig Highlights, frühester Termin zuerst.
// Ferien und zusätzliche schulfreie Tage sind separat filterbar.
const allItems = [...events, ...vacations, ...offDays];
const $ = selector => document.querySelector(selector);
const safeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const mediumDate = new Intl.DateTimeFormat('de-DE', {weekday:'short', day:'numeric', month:'long', year:'numeric'});
const compactDate = new Intl.DateTimeFormat('de-DE', {day:'numeric', month:'short', year:'numeric'});
const shortToday = new Intl.DateTimeFormat('de-DE', {weekday:'short',day:'2-digit',month:'short'});

function parts(iso) { const [year,month,day] = iso.split('-').map(Number); return [year,month,day]; }
function asDate(iso) { const [year,month,day] = parts(iso); return new Date(year,month-1,day); }
function isoToday() { const now = new Date(); return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`; }
function calendarDaysUntil(iso) { const [y,m,d]=parts(iso),[ty,tm,td]=parts(isoToday()); return Math.round((Date.UTC(y,m-1,d)-Date.UTC(ty,tm-1,td))/86400000); }
function during(item, day=isoToday()) { return item.start<=day && item.end>=day; }
function fullRange(item) { const start=mediumDate.format(asDate(item.start)); return item.start===item.end ? start : `${compactDate.format(asDate(item.start))} – ${compactDate.format(asDate(item.end))}`; }
function themeFor(item) {
  if(item.kind==='vacation') return /Weihnacht/i.test(item.title)?'purple':/Herbst/i.test(item.title)?'orange':'blue';
  if(item.kind==='off') return /Fasch/i.test(item.title)?'pink':'green';
  if(/Halloween/i.test(item.title)) return 'orange';
  if(/Fasch|Rosenmontag|Aschermittwoch/i.test(item.title)) return 'pink';
  if(/Weihnacht|Nikolaus|Advent|Heilige Drei Könige/i.test(item.title)) return 'purple';
  if(/Oster|Gründonnerstag|Palmsonntag|Karfreitag|Pfingst/i.test(item.title)) return 'green';
  if(/Silvester|Neujahr|Maientag/i.test(item.title)) return 'gold';
  if(/Sommer|Muttertag|Vatertag/i.test(item.title)) return 'blue';
  return 'purple';
}
function categoryFor(item) { return item.kind==='vacation'?'FERIEN':item.kind==='off'?'SCHULFREI':item.category.toLocaleUpperCase('de'); }
function countMs(item, now=new Date()) {
  if(during(item)) return 0;
  return Math.max(0, asDate(item.start).getTime()-now.getTime());
}
function clockParts(item, now) {
  const seconds = Math.floor(countMs(item, now)/1000);
  return [Math.floor(seconds/86400), Math.floor(seconds%86400/3600), Math.floor(seconds%3600/60), seconds%60];
}
const pad2 = n=>String(n).padStart(2,'0');
let filter='event';
let visibleItems=[];
let activeIndex=0;
let renderedDay='';
let rafScroll=null;

function getItems() {
  const today=isoToday();
  return allItems.filter(item => {
    if(item.end<today) return false;
    if(filter==='event') return item.kind==='event';
    if(filter==='vacation') return item.kind==='vacation';
    if(filter==='off') return item.kind==='off'||item.freeDay;
    return true;
  }).sort((a,b)=>{
    // Bereits laufende Zeiträume haben einen Countdown von null.
    const aActive=during(a,today)?0:1;
    const bActive=during(b,today)?0:1;
    return aActive-bActive || a.start.localeCompare(b.start) || a.title.localeCompare(b.title,'de');
  });
}
function cardHTML(item,index,total) {
  return `<article class="swipe-card" data-id="${safeHTML(item.id)}" data-theme="${themeFor(item)}" role="group" aria-roledescription="Karte" aria-label="${safeHTML(`${index+1} von ${total}: ${item.title}, ${fullRange(item)}`)}">
    <div class="card-top"><span class="card-category"><span class="card-category-dot" aria-hidden="true"></span>${safeHTML(categoryFor(item))}</span><span class="card-index">${pad2(index+1)} / ${pad2(total)}</span></div>
    <div class="card-visual" aria-hidden="true"><span class="card-halo"></span><span class="card-orbit"></span><span class="card-orbit second"></span><span class="card-emoji">${safeHTML(item.emoji)}</span><span class="card-spark one">✳</span><span class="card-spark two">✦</span></div>
    <div class="card-copy"><p class="card-eyebrow">✦ DEIN COUNTDOWN</p><h2 class="card-title">${safeHTML(item.title)}</h2><p class="card-description">${safeHTML(item.description)}</p></div>
    <div class="card-countdown" aria-label="Verbleibende Zeit"><div class="card-days"><strong class="card-days-number" data-counter="days">--</strong><span class="card-days-unit">TAGE</span></div><div class="card-hms"><div><strong data-counter="hours">--</strong><span>STD</span></div><div><strong data-counter="minutes">--</strong><span>MIN</span></div><div><strong data-counter="seconds">--</strong><span>SEK</span></div></div></div>
    <div class="card-date"><span class="card-date-main"><span aria-hidden="true">◷</span> ${safeHTML(fullRange(item))}</span><span class="card-status">${during(item)?'JETZT ✦':'COUNTDOWN ↗'}</span></div>
  </article>`;
}
function updateCounters() {
  const now=new Date();
  $('#swipe-track').querySelectorAll('.swipe-card').forEach((card,index)=>{
    const item=visibleItems[index];
    if(!item)return;
    const [days,hours,minutes,seconds]=clockParts(item,now);
    card.querySelector('[data-counter="days"]').textContent=String(days);
    card.querySelector('[data-counter="hours"]').textContent=pad2(hours);
    card.querySelector('[data-counter="minutes"]').textContent=pad2(minutes);
    card.querySelector('[data-counter="seconds"]').textContent=pad2(seconds);
  });
}
function renderOverview() {
  $('#overview-list').innerHTML=visibleItems.length ? visibleItems.map((item,index)=>{
    const days=calendarDaysUntil(item.start);
    const countdown=during(item)?'Jetzt':days===1?'Morgen':`In ${days} Tagen`;
    return `<button type="button" class="overview-item" data-index="${index}"><span class="overview-item-emoji" aria-hidden="true">${safeHTML(item.emoji)}</span><span class="overview-item-text"><strong>${safeHTML(item.title)}</strong><small>${safeHTML(fullRange(item))}</small></span><span class="overview-item-days">${safeHTML(countdown)}</span></button>`;
  }).join('') : '<p>Für diese Kategorie stehen keine weiteren Termine im Kalender.</p>';
}
function updateNavigation(){
  const total=visibleItems.length;
  $('#deck-position').textContent=`${pad2(total?activeIndex+1:0)} / ${pad2(total)}`;
  $('#prev-card').disabled=activeIndex<=0;
  $('#next-card').disabled=activeIndex>=total-1;
  $('#progress-fill').style.width=total?`${(activeIndex+1)/total*100}%`:'0%';
  const after=visibleItems[activeIndex+1];
  $('#next-hint').textContent=after?`Danach: ${after.emoji} ${after.title}`:total?'Das ist der letzte Termin ✳':'Keine weiteren Termine';
}
function goTo(index, instant=false){
  if(!visibleItems.length) return;
  activeIndex=Math.max(0,Math.min(index,visibleItems.length-1));
  const track=$('#swipe-track');
  track.scrollTo({left:track.clientWidth*activeIndex,behavior:instant||window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  updateNavigation();
}
function renderDeck(){
  visibleItems=getItems();
  activeIndex=0;
  const track=$('#swipe-track');
  track.innerHTML=visibleItems.length?visibleItems.map((item,index)=>cardHTML(item,index,visibleItems.length)).join(''):'<div class="empty-state"><strong>Keine Termine mehr ✳</strong><p>Für diesen Zeitraum sind keine weiteren Ereignisse eingetragen.</p></div>';
  track.scrollLeft=0;
  updateCounters();
  updateNavigation();
  renderOverview();
}
function setFilter(next){
  filter=next;
  document.querySelectorAll('[data-filter]').forEach(button=>{
    const active=button.dataset.filter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  renderDeck();
}
function init(){
  renderedDay=isoToday();
  $('#today-short').textContent=shortToday.format(new Date()).toLocaleUpperCase('de');
  renderDeck();
  $('#filters').addEventListener('click',event=>{
    const target=event.target.closest('[data-filter]');
    if(target) setFilter(target.dataset.filter);
  });
  $('#prev-card').addEventListener('click',()=>goTo(activeIndex-1));
  $('#next-card').addEventListener('click',()=>goTo(activeIndex+1));
  $('#swipe-track').addEventListener('scroll',()=>{
    if(rafScroll!==null) cancelAnimationFrame(rafScroll);
    rafScroll=requestAnimationFrame(()=>{
      rafScroll=null;
      const track=$('#swipe-track');
      const next=Math.max(0,Math.min(visibleItems.length-1,Math.round(track.scrollLeft/Math.max(1,track.clientWidth))));
      if(next!==activeIndex){activeIndex=next;updateNavigation();}
    });
  },{passive:true});
  $('#swipe-track').addEventListener('keydown',event=>{
    if(event.key==='ArrowRight'){event.preventDefault();goTo(activeIndex+1);}
    if(event.key==='ArrowLeft'){event.preventDefault();goTo(activeIndex-1);}
  });
  const dialog=$('#overview-dialog');
  $('#open-overview').addEventListener('click',()=>dialog.showModal());
  $('#close-overview').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
  $('#overview-list').addEventListener('click',event=>{
    const button=event.target.closest('[data-index]');
    if(!button)return;
    dialog.close();
    goTo(Number(button.dataset.index),true);
  });
  window.addEventListener('resize',()=>{
    // Nach Drehen des iPhones an der gleichen Karte bleiben.
    goTo(activeIndex,true);
  });
  setInterval(()=>{
    const day=isoToday();
    if(renderedDay!==day){
      renderedDay=day;
      $('#today-short').textContent=shortToday.format(new Date()).toLocaleUpperCase('de');
      renderDeck();
    } else updateCounters();
  },1000);
}

document.addEventListener('DOMContentLoaded',init);
