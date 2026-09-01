/**
 * Southern Appalachian Brewery (SAB) - Blue Ridge Mountain Community Web App
 * Handles Tap List, Responsive Events Calendar, Staff Event Manager & Live Hours
 */

// ==========================================================================
// 1. BEER DATA & CATALOG
// ==========================================================================
const BEERS_DATA = [
  {
    id: 'bohemian-pilsner',
    name: 'Bohemian Pilsner',
    category: 'lager-ale',
    style: 'Bohemian Style Lager',
    abv: '6.0%',
    ibu: 35,
    glass: 'Pilsner Flute',
    notes: 'German Pilsen malt and a generous charge of Czech Saaz hops give this lager a spicy floral aroma, smooth malt backbone, and crisp, clean finish.',
    pairing: 'Underground Baking Co. Soft Pretzels, grilled sausages, sharp cheddar.',
    tag: 'Flagship Lager'
  },
  {
    id: 'belgian-blonde',
    name: 'Belgian Blonde Ale',
    category: 'belgian',
    style: 'Golden Belgian Ale',
    abv: '6.5%',
    ibu: 28,
    glass: 'Belgian Chalice',
    notes: 'Golden-blonde Belgian ale fermented with authentic abbey yeast. Subtle citrus aroma, balanced Saaz hops, and a refreshing dry, spicy finish.',
    pairing: 'Smashburgers from BaseCamp Grub, fresh salads, mild cheeses.',
    tag: 'Tasting Room Favorite'
  },
  {
    id: 'belgian-artisanal-amber',
    name: 'Belgian Artisanal Amber',
    category: 'belgian',
    style: 'Artisanal Amber Ale',
    abv: '6.5%',
    ibu: 30,
    glass: 'Tulip Glass',
    notes: 'Pilsen malt and seven specialty roasted malts give this amber a complex aroma and slightly tart caramel taste with hints of banana and pineapple.',
    pairing: 'Smoked meats, BBQ, warm Bavarian pretzels with spicy mustard.',
    tag: 'Award Winning'
  },
  {
    id: 'wild-belgian-amber',
    name: 'Wild Belgian Amber',
    category: 'belgian',
    style: 'Wild Fermented Amber',
    abv: '6.5%',
    ibu: 32,
    glass: 'Snifter',
    notes: 'Our Artisanal Amber keg-conditioned with wild Belgian yeast strains, imparting rustic farmhouse funk, tart stone fruit nuances, and champagne-like effervescence.',
    pairing: 'Artisan charcuterie, aged gouda, wood-fired pizza.',
    tag: 'Cellar Series'
  },
  {
    id: 'copperhead-amber',
    name: 'Copperhead Amber Ale',
    category: 'lager-ale',
    style: 'American Amber Ale',
    abv: '5.5%',
    ibu: 25,
    glass: 'Pint Glass',
    notes: 'A crisp, medium-bodied ale boasting a glowing copper hue. Rich caramel and biscuit malts balanced seamlessly with Pacific Northwest floral hops.',
    pairing: 'Burgers, chicken wings, pretzel bites.',
    tag: 'Year-Round Classic'
  },
  {
    id: 'belgian-ipa',
    name: 'Belgian I.P.A.',
    category: 'ipa',
    style: 'Belgian India Pale Ale',
    abv: '7.0%',
    ibu: 65,
    glass: 'Tulip Glass',
    notes: 'German Pilsen malt paired with German noble hops and Czech Saaz for earthy spice, dry-hopped generously with Amarillo for bright tangerine and grapefruit aromatics.',
    pairing: 'Spicy Thai dishes, gourmet tacos, blue cheese.',
    tag: 'Hop Lover Choice'
  },
  {
    id: 'hendersonville-ipa',
    name: 'Hendersonville IPA',
    category: 'ipa',
    style: 'American IPA',
    abv: '7.0%',
    ibu: 95,
    glass: 'Pint Glass',
    notes: 'Utilizes 3 varieties of hops throughout a 90-minute boil and 5 hops in the fermenter for dry-hopping. Bold pine and citrus punch with a remarkably clean finish.',
    pairing: 'Pigeon Hole gourmet wings, spicy fries, sharp white cheddar.',
    tag: 'Bold & Bitter'
  },
  {
    id: 'black-bear-stout',
    name: 'Black Bear Stout',
    category: 'dark',
    style: 'Robust American Stout',
    abv: '5.5%',
    ibu: 40,
    glass: 'Imperial Pint',
    notes: 'Full-bodied and velvety with layers of dark roasted barley, bittersweet dark chocolate, and freshly brewed espresso coffee notes.',
    pairing: 'Chocolate desserts, vanilla ice cream floats, braised beef brisket.',
    tag: 'Mountain Stout'
  }
];

// ==========================================================================
// 2. DEFAULT AUTHENTIC SAB EVENTS
// ==========================================================================
const DEFAULT_EVENTS = [
  {
    id: 'evt-1',
    title: "Jason DeCristofaro's Weekly Jazz Night",
    category: 'music',
    date: '2026-09-02',
    time: '6:00 PM – 8:00 PM',
    foodtruck: 'Cactus Rainbow Food Truck',
    desc: 'Live jazz jam every Wednesday evening at SAB. Free admission. Come enjoy world-class musicians and craft pints in the taproom!'
  },
  {
    id: 'evt-2',
    title: 'Nitrograss Live Bluegrass',
    category: 'music',
    date: '2026-09-03',
    time: '6:00 PM – 8:00 PM',
    foodtruck: 'Little Blue Food Truck',
    desc: 'Longtime local favorites Nitrograss perform live acoustic bluegrass and newgrass on the patio stage the 1st Thursday of the month!'
  },
  {
    id: 'evt-3',
    title: 'Heavy Lifters Rock Night',
    category: 'music',
    date: '2026-09-04',
    time: '7:00 PM – 9:00 PM',
    foodtruck: 'BaseCamp Grub Smashburgers',
    desc: 'Classic rock covers and energetic originals! BaseCamp Grub serving their famous tallow smashburgers all evening.'
  },
  {
    id: 'evt-4',
    title: 'Saturday Brewery Yoga',
    category: 'yoga',
    date: '2026-09-05',
    time: '12:00 PM – 1:00 PM',
    foodtruck: 'Pigeon Hole Food Truck',
    desc: 'Kick off your weekend with an all-levels flow inside the brewhouse. Bring your own mat and stay for a celebratory post-yoga pint!'
  },
  {
    id: 'evt-5',
    title: 'Unpaid Bill & The Bad Czechs',
    category: 'music',
    date: '2026-09-05',
    time: '7:00 PM – 9:00 PM',
    foodtruck: 'Pigeon Hole Gourmet Wings',
    desc: 'Independent Folk and Ragtime band from Brevard, NC playing music from 1840 to present day! Come celebrate Bill’s birthday.'
  },
  {
    id: 'evt-6',
    title: 'The Dan Keller Trio (Sunday Jazz)',
    category: 'music',
    date: '2026-09-06',
    time: '4:00 PM – 6:00 PM',
    foodtruck: 'Outdoor Garden Pop-Up',
    desc: 'Timeless standards, bebop, and soul-jazz to wind down your Sunday afternoon on the sunlit beer garden patio.'
  },
  {
    id: 'evt-7',
    title: "Jason DeCristofaro's Weekly Jazz Night",
    category: 'music',
    date: '2026-09-09',
    time: '6:00 PM – 8:00 PM',
    foodtruck: 'Local Food Truck Ally',
    desc: 'Our weekly Wednesday Jazz jam hosted by Jason DeCristofaro with featured guest soloists.'
  },
  {
    id: 'evt-8',
    title: 'Saturday Brewery Yoga Class',
    category: 'yoga',
    date: '2026-09-12',
    time: '12:00 PM – 1:00 PM',
    foodtruck: 'Brezels & Sandwiches',
    desc: 'Enjoy stress relief and a great community workout followed by fresh Underground Baking Co. pretzels.'
  },
  {
    id: 'evt-9',
    title: 'Jackdaws Rock Night',
    category: 'music',
    date: '2026-09-12',
    time: '7:00 PM – 9:00 PM',
    foodtruck: 'BaseCamp Grub Burgers',
    desc: 'Four-piece rock cover band covering Tom Petty, The Rolling Stones, David Bowie, Pink Floyd, and more!'
  },
  {
    id: 'evt-10',
    title: 'Hatch Entrepreneur Pitch Party',
    category: 'special',
    date: '2026-09-15',
    time: '5:30 PM – 7:30 PM',
    foodtruck: 'Special Taproom Hours',
    desc: 'Community pitch party giving local mountain entrepreneurs 1-minute opportunities to pitch new ideas and business ventures.'
  },
  {
    id: 'evt-11',
    title: "Jason DeCristofaro's Weekly Jazz Night",
    category: 'music',
    date: '2026-09-16',
    time: '6:00 PM – 8:00 PM',
    foodtruck: 'Food Truck Alley',
    desc: 'Weekly jazz jam session in downtown Hendersonville.'
  },
  {
    id: 'evt-12',
    title: 'Saturday Brewery Yoga Class',
    category: 'yoga',
    date: '2026-09-19',
    time: '12:00 PM – 1:00 PM',
    foodtruck: 'Underground Baking Co. Pretzels',
    desc: 'Saturday morning rejuvenation and fresh beer.'
  },
  {
    id: 'evt-13',
    title: '16th Annual Oktoberfest Celebration!',
    category: 'special',
    date: '2026-09-26',
    time: '12:00 PM – 6:00 PM',
    foodtruck: 'Haus Heidelberg & Underground Baking Co.',
    desc: 'Join us for our biggest party of the year! Live Polka by The Appalachian Freunde Polka Band, German food, Stein Hoisting & costume contest!'
  },
  {
    id: 'evt-14',
    title: "Jason DeCristofaro's Weekly Jazz Night",
    category: 'music',
    date: '2026-09-30',
    time: '6:00 PM – 8:00 PM',
    foodtruck: 'Food Truck Alley',
    desc: 'Month-end Wednesday jazz jam!'
  }
];

// ==========================================================================
// 3. APPLICATION STATE
// ==========================================================================
let currentEvents = [];
let currentCalendarDate = new Date(2026, 8, 1); // September 2026 default
let selectedCategoryFilter = 'all';
let currentView = 'calendar'; // 'calendar' or 'agenda'

// ==========================================================================
// 4. INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  loadEventsFromStorage();
  initBreweryHoursStatus();
  renderBeersGrid('all');
  initBeerFilters();
  initCalendar();
  initEventListeners();
});

// ==========================================================================
// 5. STORAGE & EVENTS MANAGEMENT
// ==========================================================================
function loadEventsFromStorage() {
  const stored = localStorage.getItem('sab_events_data');
  if (stored) {
    try {
      currentEvents = JSON.parse(stored);
    } catch (e) {
      currentEvents = [...DEFAULT_EVENTS];
    }
  } else {
    currentEvents = [...DEFAULT_EVENTS];
    saveEventsToStorage();
  }
}

function saveEventsToStorage() {
  localStorage.setItem('sab_events_data', JSON.stringify(currentEvents));
}

// ==========================================================================
// 6. LIVE BREWERY HOURS & STATUS CHECKER
// ==========================================================================
function initBreweryHoursStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday, 1 = Monday, ...
  const hour = now.getHours() + now.getMinutes() / 60;

  // Highlight today in hours table
  const rows = document.querySelectorAll('.hours-row');
  rows.forEach(r => {
    if (parseInt(r.getAttribute('data-day'), 10) === day) {
      r.classList.add('active-today');
    } else {
      r.classList.remove('active-today');
    }
  });

  // Hours definition: [openHour, closeHour] in 24h
  const schedule = {
    0: [14.0, 19.0], // Sun: 2pm - 7pm
    1: null,         // Mon: Closed (unless summer)
    2: null,         // Tue: Closed
    3: [16.0, 20.5], // Wed: 4pm - 8:30pm
    4: [16.0, 20.5], // Thu: 4pm - 8:30pm
    5: [16.0, 21.5], // Fri: 4pm - 9:30pm
    6: [14.0, 21.5]  // Sat: 2pm - 9:30pm
  };

  const todayHours = schedule[day];
  let isOpen = false;
  let statusMessage = '';

  if (todayHours && hour >= todayHours[0] && hour < todayHours[1]) {
    isOpen = true;
    const closeTimeStr = formatHourString(todayHours[1]);
    statusMessage = `🟢 Open Today until ${closeTimeStr}`;
  } else if (todayHours && hour < todayHours[0]) {
    const openTimeStr = formatHourString(todayHours[0]);
    statusMessage = `🟡 Opens Today at ${openTimeStr}`;
  } else {
    statusMessage = getNextOpenDayMessage(day);
  }

  // Update DOM status elements
  const topStatus = document.getElementById('top-status-text');
  const heroDot = document.getElementById('hero-status-dot');
  const hoursDot = document.getElementById('hours-status-dot');
  const hoursTitle = document.getElementById('hours-status-title');

  if (topStatus) topStatus.textContent = statusMessage;
  if (hoursTitle) hoursTitle.textContent = isOpen ? 'Taproom is currently Open' : 'Taproom is currently Closed';

  if (!isOpen) {
    if (heroDot) heroDot.classList.add('closed');
    if (hoursDot) hoursDot.classList.add('closed');
  }
}

function formatHourString(decimalHour) {
  const h = Math.floor(decimalHour);
  const m = Math.round((decimalHour - h) * 60);
  const period = h >= 12 ? 'PM' : 'AM';
  const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  const displayM = m === 0 ? ':00' : `:${m < 10 ? '0' + m : m}`;
  return `${displayH}${displayM} ${period}`;
}

function getNextOpenDayMessage(currentDay) {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const openDays = [3, 4, 5, 6, 0]; // Wed, Thu, Fri, Sat, Sun
  
  for (let offset = 1; offset <= 7; offset++) {
    const checkDay = (currentDay + offset) % 7;
    if (openDays.includes(checkDay)) {
      const openTime = (checkDay === 0 || checkDay === 6) ? '2:00 PM' : '4:00 PM';
      return `🔴 Closed now &bull; Opens ${dayNames[checkDay]} @ ${openTime}`;
    }
  }
  return '🔴 Closed &bull; Opens Wednesday at 4:00 PM';
}

// ==========================================================================
// 7. BEERS GRID & DETAIL MODAL
// ==========================================================================
function renderBeersGrid(category) {
  const grid = document.getElementById('beers-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? BEERS_DATA 
    : BEERS_DATA.filter(b => b.category === category);

  grid.innerHTML = filtered.map(beer => `
    <article class="beer-card" data-id="${beer.id}">
      <div>
        <div class="beer-card-header">
          <span class="beer-type-badge">${escapeHTML(beer.style)}</span>
          <span class="beer-abv-badge">${escapeHTML(beer.abv)} ABV</span>
        </div>
        <h3 class="beer-title">${escapeHTML(beer.name)}</h3>
        <p class="beer-desc">${escapeHTML(beer.notes)}</p>
      </div>
      <div>
        <div class="beer-specs">
          <span>IBU: <strong>${beer.ibu}</strong></span>
          <span>Glass: <strong>${escapeHTML(beer.glass)}</strong></span>
        </div>
        <button class="beer-view-btn" onclick="openBeerModal('${beer.id}')">
          <span>Tasting Notes &amp; Pairings</span> &rarr;
        </button>
      </div>
    </article>
  `).join('');
}

function initBeerFilters() {
  const pills = document.querySelectorAll('.beer-filters .filter-pill');
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      const filter = pill.getAttribute('data-filter');
      renderBeersGrid(filter);
    });
  });
}

function openBeerModal(beerId) {
  const beer = BEERS_DATA.find(b => b.id === beerId);
  if (!beer) return;

  document.getElementById('beer-modal-name').textContent = beer.name;
  document.getElementById('beer-modal-style').textContent = `${beer.style} • ${beer.abv}`;

  const body = document.getElementById('beer-modal-body');
  body.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="badge badge-mountain" style="margin-bottom: 0.5rem;">${escapeHTML(beer.tag)}</span>
      <p style="color: var(--text-body); font-size: 1.02rem; line-height: 1.6;">${escapeHTML(beer.notes)}</p>
    </div>

    <div style="background: var(--bg-porch-warm); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.25rem;">
      <h5 style="margin-bottom: 0.5rem; color: var(--mountain-blue-deep);">Brew Specs &amp; Serving</h5>
      <ul style="list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.88rem; color: var(--text-body);">
        <li>⚡ <strong>ABV:</strong> ${beer.abv}</li>
        <li>🌿 <strong>Bitterness:</strong> ${beer.ibu} IBU</li>
        <li>🍺 <strong>Glassware:</strong> ${beer.glass}</li>
        <li>📍 <strong>Origin:</strong> Downtown Hendersonville</li>
      </ul>
    </div>

    <div style="border-left: 3.5px solid var(--pine-green); background: var(--pine-green-faint); padding: 0.85rem 1rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0;">
      <h5 style="color: var(--pine-green); margin-bottom: 0.25rem;">🍽️ Recommended Food Pairing</h5>
      <p style="font-size: 0.88rem; color: var(--text-dark); margin: 0;">${escapeHTML(beer.pairing)}</p>
    </div>
  `;

  const modal = document.getElementById('beer-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

// ==========================================================================
// 8. CALENDAR & AGENDA ENGINE
// ==========================================================================
function initCalendar() {
  renderCalendar();
  renderAgenda();

  // Navigation handlers
  document.getElementById('cal-prev-month')?.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
    renderCalendar();
  });

  document.getElementById('cal-next-month')?.addEventListener('click', () => {
    currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
    renderCalendar();
  });

  document.getElementById('cal-today-btn')?.addEventListener('click', () => {
    currentCalendarDate = new Date(2026, 8, 1);
    renderCalendar();
  });

  // Event category filter buttons
  const eventFilterBtns = document.querySelectorAll('.event-category-filters .event-filter-btn');
  eventFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      eventFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategoryFilter = btn.getAttribute('data-category');
      renderCalendar();
      renderAgenda();
    });
  });

  // View Switcher (Calendar vs Agenda)
  const calViewBtn = document.getElementById('view-calendar-btn');
  const agendaViewBtn = document.getElementById('view-agenda-btn');
  const calContainer = document.getElementById('calendar-view');
  const agendaContainer = document.getElementById('agenda-view');

  calViewBtn?.addEventListener('click', () => {
    calViewBtn.classList.add('active');
    calViewBtn.setAttribute('aria-pressed', 'true');
    agendaViewBtn.classList.remove('active');
    agendaViewBtn.setAttribute('aria-pressed', 'false');
    calContainer.style.display = 'block';
    agendaContainer.style.display = 'none';
    currentView = 'calendar';
  });

  agendaViewBtn?.addEventListener('click', () => {
    agendaViewBtn.classList.add('active');
    agendaViewBtn.setAttribute('aria-pressed', 'true');
    calViewBtn.classList.remove('active');
    calViewBtn.setAttribute('aria-pressed', 'false');
    calContainer.style.display = 'none';
    agendaContainer.style.display = 'block';
    currentView = 'agenda';
    renderAgenda();
  });
}

function renderCalendar() {
  const year = currentCalendarDate.getFullYear();
  const month = currentCalendarDate.getMonth();

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthHeading = document.getElementById('calendar-month-heading');
  const monthStats = document.getElementById('calendar-month-stats');
  const gridBody = document.getElementById('calendar-grid-body');

  if (monthHeading) {
    monthHeading.textContent = `${monthNames[month]} ${year}`;
  }

  // Count events in this month
  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`;
  const filteredEvents = getFilteredEvents();
  const eventsInMonth = filteredEvents.filter(e => e.date.startsWith(monthPrefix));

  if (monthStats) {
    monthStats.textContent = `${eventsInMonth.length} Event${eventsInMonth.length === 1 ? '' : 's'} on the Mountain`;
  }

  if (!gridBody) return;
  gridBody.innerHTML = '';

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const prevMonthTotalDays = new Date(year, month, 0).getDate();

  const today = new Date();
  const isCurrentMonth = (today.getFullYear() === year && today.getMonth() === month);

  // 1. Prev month trailing days
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    const dayNum = prevMonthTotalDays - i;
    const cell = createDayCell(dayNum, true, false, null, []);
    gridBody.appendChild(cell);
  }

  // 2. Current month days
  for (let day = 1; day <= totalDays; day++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const dayEvents = filteredEvents.filter(e => e.date === dateStr);
    const isToday = isCurrentMonth && (today.getDate() === day);

    const cell = createDayCell(day, false, isToday, dateStr, dayEvents);
    gridBody.appendChild(cell);
  }

  // 3. Next month trailing days to complete full 7-col grid
  const totalRendered = firstDayIndex + totalDays;
  const remainingCells = (totalRendered % 7 === 0) ? 0 : 7 - (totalRendered % 7);

  for (let nextDay = 1; nextDay <= remainingCells; nextDay++) {
    const cell = createDayCell(nextDay, true, false, null, []);
    gridBody.appendChild(cell);
  }
}

function createDayCell(dayNum, isOtherMonth, isToday, dateStr, dayEvents) {
  const cell = document.createElement('div');
  cell.className = `cal-day-cell ${isOtherMonth ? 'other-month' : ''} ${isToday ? 'is-today' : ''}`;

  cell.innerHTML = `
    <div class="day-cell-top">
      <span class="day-number">${dayNum}</span>
    </div>
    <div class="day-events-list">
      ${dayEvents.slice(0, 2).map(evt => `
        <div class="cal-event-pill cat-${evt.category}" title="${escapeHTML(evt.title)}">
          <span>${getCategoryIcon(evt.category)}</span>
          <span>${escapeHTML(evt.title)}</span>
        </div>
      `).join('')}
      ${dayEvents.length > 2 ? `
        <span class="cal-more-badge">+${dayEvents.length - 2} more</span>
      ` : ''}
    </div>
  `;

  if (!isOtherMonth && dateStr) {
    cell.addEventListener('click', () => {
      openDayDetailModal(dateStr, dayEvents);
    });
  }

  return cell;
}

function getFilteredEvents() {
  if (selectedCategoryFilter === 'all') {
    return currentEvents;
  }
  return currentEvents.filter(e => e.category === selectedCategoryFilter);
}

function getCategoryIcon(cat) {
  switch (cat) {
    case 'music': return '🎸';
    case 'food': return '🍔';
    case 'yoga': return '🧘';
    case 'special': return '🍻';
    default: return '📅';
  }
}

function getCategoryName(cat) {
  switch (cat) {
    case 'music': return 'Live Music';
    case 'food': return 'Food Truck';
    case 'yoga': return 'Yoga Class';
    case 'special': return 'Brewery Special';
    default: return 'Event';
  }
}

// ==========================================================================
// 9. AGENDA / TIMELINE RENDERER
// ==========================================================================
function renderAgenda() {
  const agendaList = document.getElementById('agenda-list');
  if (!agendaList) return;

  const filteredEvents = getFilteredEvents();
  const sorted = [...filteredEvents].sort((a, b) => a.date.localeCompare(b.date));

  if (sorted.length === 0) {
    agendaList.innerHTML = `
      <div style="text-align: center; padding: 3rem; background: #FFFFFF; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
        <p style="font-size: 1.1rem; color: var(--text-body); margin-bottom: 1rem;">No events found in this category.</p>
        <button class="btn btn-secondary btn-sm" onclick="resetFilterToAll()">Show All Events</button>
      </div>
    `;
    return;
  }

  const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  agendaList.innerHTML = sorted.map(evt => {
    const parts = evt.date.split('-');
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);
    const dateObj = new Date(year, month, day);
    const monthStr = monthNames[month] || 'SEP';
    const weekdayStr = dayNames[dateObj.getDay()] || '';

    const googleCalUrl = generateGoogleCalendarUrl(evt);

    return `
      <article class="agenda-card">
        <div class="agenda-date-box">
          <div class="date-badge">
            <span class="date-month">${monthStr}</span>
            <span class="date-day">${day}</span>
          </div>
          <div>
            <span class="date-weekday">${weekdayStr}</span>
            <span class="badge badge-mountain" style="display: block; font-size: 0.65rem; margin-top: 2px;">${getCategoryName(evt.category)}</span>
          </div>
        </div>

        <div class="agenda-details">
          <h4 class="agenda-title">${escapeHTML(evt.title)}</h4>
          <div class="agenda-time">
            <span>⏰ ${escapeHTML(evt.time)}</span>
            ${evt.foodtruck ? `<span style="color: var(--mountain-clay); margin-left: 0.75rem;">🚚 ${escapeHTML(evt.foodtruck)}</span>` : ''}
          </div>
          <p class="agenda-desc">${escapeHTML(evt.desc)}</p>
        </div>

        <div class="agenda-actions">
          <a href="${googleCalUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" title="Add to Google Calendar">
            <span>+ Google Cal</span>
          </a>
          <button class="btn btn-outline-mountain btn-sm" onclick="downloadIcsFile('${evt.id}')" title="Download Apple / Outlook .ics">
            <span>.iCal</span>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function resetFilterToAll() {
  const allBtn = document.querySelector('.event-category-filters .event-filter-btn[data-category="all"]');
  if (allBtn) allBtn.click();
}

// ==========================================================================
// 10. CALENDAR SYNC (Google Cal & iCal generation)
// ==========================================================================
function generateGoogleCalendarUrl(evt) {
  const title = encodeURIComponent(`${evt.title} @ Southern Appalachian Brewery`);
  const details = encodeURIComponent(`${evt.desc}\n\nLocation: Southern Appalachian Brewery\n822 Locust St, Hendersonville, NC`);
  const location = encodeURIComponent('822 Locust St, Hendersonville, NC 28792');
  
  const cleanDate = evt.date.replace(/-/g, '');
  const dates = `${cleanDate}T180000/${cleanDate}T210000`;

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
}

function downloadIcsFile(eventId) {
  const evt = currentEvents.find(e => e.id === eventId);
  if (!evt) return;

  const cleanDate = evt.date.replace(/-/g, '');
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Southern Appalachian Brewery//Events//EN',
    'BEGIN:VEVENT',
    `UID:${evt.id}@sabrewery.com`,
    `DTSTAMP:${cleanDate}T120000Z`,
    `DTSTART:${cleanDate}T180000`,
    `DTEND:${cleanDate}T210000`,
    `SUMMARY:${evt.title}`,
    `DESCRIPTION:${evt.desc}`,
    'LOCATION:Southern Appalachian Brewery\\, 822 Locust St\\, Hendersonville\\, NC 28792',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${evt.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('📅 Calendar event (.ics) downloaded!');
}

// ==========================================================================
// 11. DAY EVENT DETAIL MODAL
// ==========================================================================
function openDayDetailModal(dateStr, events) {
  const parts = dateStr.split('-');
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
  const formattedDate = dateObj.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const modal = document.getElementById('event-detail-modal');
  document.getElementById('modal-event-date-badge').textContent = formattedDate;
  document.getElementById('modal-event-title').textContent = events.length > 0 
    ? `Happenings on ${formattedDate}` 
    : 'No Special Events Scheduled';

  const body = document.getElementById('modal-event-body');

  if (events.length === 0) {
    body.innerHTML = `
      <div style="padding: 1.5rem 0; text-align: center;">
        <p style="color: var(--text-body); margin-bottom: 1.5rem;">
          No special live shows or food trucks are posted for this date yet. The tasting room will be open according to our regular hours!
        </p>
        <button class="btn btn-primary btn-sm" onclick="prefillStaffEvent('${dateStr}')">
          <span>+ Add Event for this Day (Staff)</span>
        </button>
      </div>
    `;
  } else {
    body.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 1.25rem;">
        ${events.map(evt => `
          <div style="background: var(--bg-porch-warm); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="badge badge-mountain">${getCategoryName(evt.category)}</span>
              <span style="font-size: 0.88rem; color: var(--mountain-clay); font-weight: 700;">${escapeHTML(evt.time)}</span>
            </div>
            <h4 style="font-size: 1.2rem; color: var(--mountain-blue-deep); margin-bottom: 0.4rem;">${escapeHTML(evt.title)}</h4>
            ${evt.foodtruck ? `<p style="color: var(--mountain-clay); font-size: 0.88rem; font-weight: 600; margin-bottom: 0.5rem;">🚚 Food: ${escapeHTML(evt.foodtruck)}</p>` : ''}
            <p style="color: var(--text-body); font-size: 0.9rem; margin-bottom: 1rem;">${escapeHTML(evt.desc)}</p>
            <div style="display: flex; gap: 0.5rem;">
              <a href="${generateGoogleCalendarUrl(evt)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                <span>+ Add to Google Cal</span>
              </a>
              <button class="btn btn-outline-mountain btn-sm" onclick="downloadIcsFile('${evt.id}')">
                <span>Download .iCal</span>
              </button>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
}

function prefillStaffEvent(dateStr) {
  closeAllModals();
  openStaffModal();
  const dateInput = document.getElementById('new-event-date');
  if (dateInput) dateInput.value = dateStr;
}

// ==========================================================================
// 12. STAFF EVENT MANAGER (Interactive Prototype)
// ==========================================================================
function openStaffModal() {
  const modal = document.getElementById('staff-modal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  const dateInput = document.getElementById('new-event-date');
  if (dateInput && !dateInput.value) {
    dateInput.value = '2026-09-05';
  }
}

function handleAddEventSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('new-event-title').value.trim();
  const category = document.getElementById('new-event-category').value;
  const date = document.getElementById('new-event-date').value;
  const time = document.getElementById('new-event-time').value.trim();
  const foodtruck = document.getElementById('new-event-foodtruck').value.trim();
  const desc = document.getElementById('new-event-desc').value.trim() || 'Join us for great craft brews, good company, and mountain vibes in downtown Hendersonville!';

  if (!title || !date || !time) {
    showToast('⚠️ Please fill out all required fields.');
    return;
  }

  const newEvent = {
    id: `custom-evt-${Date.now()}`,
    title,
    category,
    date,
    time,
    foodtruck,
    desc
  };

  currentEvents.unshift(newEvent);
  saveEventsToStorage();

  renderCalendar();
  renderAgenda();
  closeAllModals();
  e.target.reset();

  showToast('🎉 Event successfully published to calendar!');
}

function handleResetEvents() {
  if (confirm('Reset event calendar to default authentic SAB schedule?')) {
    currentEvents = [...DEFAULT_EVENTS];
    saveEventsToStorage();
    renderCalendar();
    renderAgenda();
    closeAllModals();
    showToast('🔄 Events reset to default schedule.');
  }
}

// ==========================================================================
// 13. UI EVENT LISTENERS & NAVIGATION
// ==========================================================================
function initEventListeners() {
  // Mobile Nav Drawer
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const drawerClose = document.getElementById('drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  menuToggle?.addEventListener('click', () => {
    drawer?.classList.add('open');
    menuToggle.setAttribute('aria-expanded', 'true');
  });

  drawerClose?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      drawer?.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // Staff Modal Triggers
  document.getElementById('open-staff-modal-header')?.addEventListener('click', openStaffModal);
  document.getElementById('open-staff-modal-mobile')?.addEventListener('click', () => {
    drawer?.classList.remove('open');
    openStaffModal();
  });
  document.getElementById('open-staff-modal-section')?.addEventListener('click', openStaffModal);

  // Staff Form Submit & Reset
  document.getElementById('add-event-form')?.addEventListener('submit', handleAddEventSubmit);
  document.getElementById('reset-events-btn')?.addEventListener('click', handleResetEvents);

  // Modal Closers
  document.getElementById('close-event-modal-btn')?.addEventListener('click', closeAllModals);
  document.getElementById('close-staff-modal-btn')?.addEventListener('click', closeAllModals);
  document.getElementById('close-beer-modal-btn')?.addEventListener('click', closeAllModals);

  // Close modals on backdrop click
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeAllModals();
      }
    });
  });

  // ESC key closes modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = document.getElementById('contact-submit-btn');
    const feedback = document.getElementById('contact-feedback');

    if (btn) btn.disabled = true;
    if (feedback) {
      feedback.style.display = 'block';
      feedback.className = 'form-feedback success';
      feedback.innerHTML = '✨ Thank you! Andy &amp; Kelly have received your message and will get back to you shortly.';
    }

    contactForm.reset();
    setTimeout(() => {
      if (btn) btn.disabled = false;
    }, 3000);
  });
}

function closeAllModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => {
    m.classList.remove('open');
    m.setAttribute('aria-hidden', 'true');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerHTML = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
