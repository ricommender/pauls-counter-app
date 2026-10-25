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

const allItems = [...events,...vacations,...offDays].sort((a,b) => a.start.localeCompare(b.start) || a.title.localeCompare(b.title,'de'));
const $ = selector => document.querySelector(selector);
let activeFilter = 'all';
let selectedDay = null;
let showCount = 7;
let shownMonth;
let lastRenderedDay = '';

function dateParts(iso){const [year,month,day]=iso.split('-').map(Number);return {year,month,day};}
function localDate(iso){const d=dateParts(iso);return new Date(d.year,d.month-1,d.day);}
function dateISO(date){return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;}
function todayISO(){return dateISO(new Date());}
function dayDiff(from,to){const a=dateParts(from),b=dateParts(to);return Math.round((Date.UTC(b.year,b.month-1,b.day)-Date.UTC(a.year,a.month-1,a.day))/86400000);}
const mediumDate = new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'short',year:'numeric'});
const dateFull = new Intl.DateTimeFormat('de-DE',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
function fullDate(iso){return dateFull.format(localDate(iso));}
function shortRange(item){return item.start===item.end ? mediumDate.format(localDate(item.start)) : `${mediumDate.format(localDate(item.start))} – ${mediumDate.format(localDate(item.end))}`;}
function containsDate(item,day){return item.start<=day&&item.end>=day;}
function remainingText(item,now){if(containsDate(item,now))return 'Heute';const days=dayDiff(now,item.start);return days===1?'Morgen':`In ${days} Tagen`;}
function safeHTML(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function kindLabel(item){if(item.kind==='vacation')return 'FERIEN';if(item.kind==='off')return 'SCHULFREI';return item.category.toUpperCase();}

function renderHeader(now){const d=localDate(now);const day=new Intl.DateTimeFormat('de-DE',{weekday:'short'}).format(d).replace('.','').toUpperCase();const rest=new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'short'}).format(d).toUpperCase();$('#today-pill').innerHTML=`<strong>${safeHTML(day)}</strong> &nbsp; ${safeHTML(rest)} &nbsp; ${d.getFullYear()}`;}

let nextFeatured=null;
function renderHero(now){
  nextFeatured=events.find(item=>item.date>=now) || null;
  if(!nextFeatured){
    $('#hero-content').innerHTML=`<p class="hero-category">SCHULJAHR 2026/27</p><h2 id="next-event-heading">So viele gute Erinnerungen. ✨</h2><p class="hero-description">Alle Highlights dieses Schuljahres liegen inzwischen zurück. Schau in die Timeline und entdecke sie noch einmal.</p>`;
    $('#hero-emoji').textContent='🌟';$('#hero-date-art').textContent='DAS WAR EIN GUTES JAHR';$('#countdown-heading').textContent='BIS ZUM NÄCHSTEN EVENT';
    setCounts([0,0,0,0]);return;
  }
  const heroDescription=nextFeatured.description;
  $('#hero-content').innerHTML=`<p class="hero-category">${safeHTML(nextFeatured.category)}</p><h2 id="next-event-heading">${safeHTML(nextFeatured.title)}</h2><p class="hero-description">${safeHTML(heroDescription)} <strong>${safeHTML(fullDate(nextFeatured.date))}</strong></p>`;
  $('#hero-emoji').textContent=nextFeatured.emoji;
  $('#hero-date-art').textContent=mediumDate.format(localDate(nextFeatured.date)).toUpperCase();
  $('#countdown-heading').textContent=nextFeatured.date===now?'HEUTE IST ES SOWEIT!':'DER COUNTDOWN LÄUFT';
  updateCountdown();
}
function setCounts(counts){['days','hours','minutes','seconds'].forEach((key,i)=>{$(`#count-${key}`).textContent=String(counts[i]).padStart(2,'0');});}
function updateCountdown(){
  if(!nextFeatured){setCounts([0,0,0,0]);return;}
  const now=new Date();
  if(dateISO(now)===nextFeatured.date){setCounts([0,0,0,0]);return;}
  const ms=Math.max(0,localDate(nextFeatured.date)-now);
  const totalSeconds=Math.floor(ms/1000);
  setCounts([Math.floor(totalSeconds/86400),Math.floor(totalSeconds%86400/3600),Math.floor(totalSeconds%3600/60),totalSeconds%60]);
}

function renderStats(now){
  $('#stat-highlights').textContent=events.filter(item=>item.date>=now).length;
  $('#stat-off').textContent='9'; // 4 bewegliche + 3 unterrichtsfreie + 2 gesetzliche Feiertage außerhalb der Ferien.
  const nextVacation=vacations.find(item=>item.end>=now);
  $('#stat-vacation').textContent=nextVacation?nextVacation.title.replace(' (Rest)',''):'Alle vorbei';
  $('#stat-vacation-sub').textContent=nextVacation?(containsDate(nextVacation,now)?'Laufen gerade! 🎉':remainingText(nextVacation,now)):'Das Schuljahr ist abgeschlossen';
  const upcomingBreak=nextVacation;
  if(upcomingBreak){
    $('#break-preview').innerHTML=`<div class="break-name">${safeHTML(upcomingBreak.title)}</div><div class="break-date">${safeHTML(shortRange(upcomingBreak))}</div><span class="break-count">${containsDate(upcomingBreak,now)?'🎉 Du hast gerade Ferien!':'⏳ '+safeHTML(remainingText(upcomingBreak,now))}</span>`;
  } else $('#break-preview').innerHTML='<div class="break-name">Alle Ferien sind vorbei.</div><div class="break-date">Hier erscheinen die Ferien aus dem Schuljahr 2026/27.</div>';
}

function isRelevant(item,now){return item.end>=now;}
function renderTimeline(){
  const now=todayISO(),search=$('#search').value.trim().toLocaleLowerCase('de'),includePast=$('#show-past').checked;
  let items=allItems.filter(item=>{
    if(activeFilter==='event'&&item.kind!=='event')return false;
    if(activeFilter==='vacation'&&item.kind!=='vacation')return false;
    if(activeFilter==='off'&&!(item.kind==='off'||item.freeDay))return false;
    if(selectedDay){if(!containsDate(item,selectedDay))return false;}
    else if(!includePast&&!isRelevant(item,now))return false;
    if(search&&![item.title,item.category,item.description].some(x=>x.toLocaleLowerCase('de').includes(search)))return false;
    return true;
  });
  items.sort((a,b)=>a.start.localeCompare(b.start) || a.title.localeCompare(b.title,'de'));
  $('#results-info').textContent=`${items.length} ${items.length===1?'Termin':'Termine'}`;
  $('#show-more').hidden=items.length<=showCount;
  $('#timeline').innerHTML=items.length?items.slice(0,showCount).map(item=>{
    const dateText=item.start===item.end?fullDate(item.start):shortRange(item);
    const daysIn=dayDiff(now,item.start);
    const relative=containsDate(item,now)?'Heute':daysIn>0?`in ${daysIn} Tagen`:'Vorbei';
    return `<article class="timeline-card ${safeHTML(item.kind)}"><div class="event-icon" aria-hidden="true">${safeHTML(item.emoji)}</div><div class="event-info"><div class="event-kicker">${safeHTML(kindLabel(item))}${item.freeDay?' · SCHULFREI':''}</div><h3 class="event-name">${safeHTML(item.title)}</h3><p class="event-date">${safeHTML(dateText)}</p><p class="event-description">${safeHTML(item.description)}</p></div><div class="event-right"><div class="days-label">${daysIn>0?`${daysIn}d`:relative==='Heute'?'Heute':'✓'}</div><div class="days-sub">${safeHTML(relative)}</div></div></article>`;
  }).join(''):`<div class="empty"><strong>Hier ist noch nichts los.</strong><br />Andere Kategorie wählen, Suchbegriff löschen oder vergangene Termine anzeigen.</div>`;
  if(selectedDay){
    $('#selected-day').hidden=false;
    $('#selected-day').innerHTML=`Termine am <strong>${safeHTML(fullDate(selectedDay))}</strong> <button type="button" id="clear-day">Filter löschen ×</button>`;
    $('#clear-day').addEventListener('click',()=>{selectedDay=null;showCount=7;renderSelectedDay();renderTimeline();renderCalendar();});
  } else $('#selected-day').hidden=true;
}
function renderSelectedDay(){/* Placeholder for centralizing selected-day behavior. */}

function renderCalendar(){
  const year=shownMonth.getFullYear(),month=shownMonth.getMonth();
  $('#calendar-month').textContent=new Intl.DateTimeFormat('de-DE',{month:'long',year:'numeric'}).format(shownMonth);
  const start=new Date(year,month,1);const offset=(start.getDay()+6)%7;
  const daysInMonth=new Date(year,month+1,0).getDate();
  const cells=[];
  for(let i=0;i<offset;i++)cells.push('<span aria-hidden="true"></span>');
  for(let d=1;d<=daysInMonth;d++){
    const iso=dateISO(new Date(year,month,d));
    const hasEvent=events.some(item=>item.date===iso);
    const hasFree=vacations.some(item=>containsDate(item,iso))||offDays.some(item=>containsDate(item,iso))||events.some(item=>item.date===iso&&item.freeDay);
    const classes=['calendar-day'];if(iso===todayISO())classes.push('is-today');if(selectedDay===iso)classes.push('selected');if(hasEvent||hasFree)classes.push('has-event');
    const dayEvents=allItems.filter(item=>containsDate(item,iso)).map(item=>item.title).join(', ');
    const desc=dayEvents?`${d}. ${new Intl.DateTimeFormat('de-DE',{month:'long'}).format(new Date(year,month,d))}: ${dayEvents}`:`${d}. ${new Intl.DateTimeFormat('de-DE',{month:'long'}).format(new Date(year,month,d))}`;
    cells.push(`<button class="${classes.join(' ')}" type="button" data-day="${iso}" aria-label="${safeHTML(desc)}" aria-pressed="${selectedDay===iso}">${d}<span class="dots" aria-hidden="true">${hasEvent?'<i class="dot"></i>':''}${hasFree?'<i class="dot free"></i>':''}</span></button>`);
  }
  $('#calendar-grid').innerHTML=cells.join('');
  $('#calendar-grid').querySelectorAll('[data-day]').forEach(el=>el.addEventListener('click',()=>{
    selectedDay=selectedDay===el.dataset.day?null:el.dataset.day;showCount=7;
    renderTimeline();renderCalendar();$('#termine').scrollIntoView({behavior:'smooth',block:'start'});
  }));
}

function init(){
  const now=todayISO();shownMonth=new Date(new Date().getFullYear(),new Date().getMonth(),1);
  renderHeader(now);renderHero(now);renderStats(now);renderCalendar();renderTimeline();lastRenderedDay=now;
  $('.filters').addEventListener('click',e=>{
    const button=e.target.closest('button[data-filter]');if(!button)return;
    activeFilter=button.dataset.filter;showCount=7;
    document.querySelectorAll('[data-filter]').forEach(el=>{const active=el===button;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});
    renderTimeline();
  });
  $('#search').addEventListener('input',()=>{showCount=7;renderTimeline();});
  $('#show-past').addEventListener('change',()=>{showCount=7;renderTimeline();});
  $('#show-more').addEventListener('click',()=>{showCount+=7;renderTimeline();});
  $('#prev-month').addEventListener('click',()=>{shownMonth=new Date(shownMonth.getFullYear(),shownMonth.getMonth()-1,1);renderCalendar();});
  $('#next-month').addEventListener('click',()=>{shownMonth=new Date(shownMonth.getFullYear(),shownMonth.getMonth()+1,1);renderCalendar();});
  setInterval(()=>{
    const current=todayISO();
    if(current!==lastRenderedDay){lastRenderedDay=current;renderHeader(current);renderHero(current);renderStats(current);renderCalendar();renderTimeline();}
    else updateCountdown();
  },1000);
}

document.addEventListener('DOMContentLoaded',init);