# Southern Appalachian Brewery (SAB) 🏔️🍺

> **A modern, mobile-first website redesign for [Southern Appalachian Brewery](https://sabrewery.com) in Historic Downtown Hendersonville, NC.**  
> Live Staging: [https://sab.drewratliff.com](https://sab.drewratliff.com)

---

## 📖 Overview

Southern Appalachian Brewery (SAB) is a beloved microbrewery founded in 2011 by Andy and Kelly Cubbin, located in the Historic Depot District of Hendersonville, NC. This redesign modernizes their web presence with a warm, homey Blue Ridge Mountain craft aesthetic, an interactive on-tap craft beer showcase, a live hours calculator, and a dual-view community events calendar.

---

## ✨ Key Features

- **🏔️ Authentic Blue Ridge Mountain Aesthetic**: Inspired by SAB's original hand-painted watercolor mountain logo. Features a warm parchment palette (`#FAF7F2`), deep Blue Ridge indigo (`#1E3352`), and mountain clay accents (`#C26743`) with artisanal typography (**Fraunces** serif, **Caveat** script, and **Plus Jakarta Sans**).
- **🍺 Interactive On-Tap Craft Beers Showcase**: Real-time category filtering (*Belgian & Farmhouse, IPAs & Hoppy, Lagers & Ambers, Stouts & Dark*), ABV/IBU badges, glassware suggestions, and tasting note modals with food pairings (including **Underground Baking Co.** giant Bavarian pretzels).
- **📅 Dual-View Events & Music Calendar**:
  - **Month Calendar Grid**: 7-column responsive calendar with color-coded event pills (`🎸 Live Music`, `🍔 Food Trucks`, `🧘 Saturday Yoga`, `🍻 Brewery Specials`) and interactive day modals.
  - **Agenda Timeline View**: Chronological cards with 1-click **"Add to Google Calendar"** and **"Download .iCal"** exports.
- **🛠️ Interactive Staff Event Manager Demo**: Built-in staff modal allowing the brewery team to publish new shows and events in seconds, persisting to `localStorage` and updating the calendar dynamically.
- **⏰ Live Taproom Hours & Status Engine**: Dynamically calculates open/closed status based on current day and time (e.g. `🟢 Open Today until 9:30 PM`), and highlights today's schedule in the hours table.
- **📱 100% Mobile Optimized**: Tested on smartphones with a slide-out hamburger drawer, touch-friendly tap targets, and a fixed bottom quick-action bar (*Taps, Events, Hours, Map, Call*).

---

## 📂 Project Structure

```text
SAB/
├── index.html                  # Semantic HTML5 web application structure
├── styles.css                  # Custom Blue Ridge mountain design system & responsive CSS
├── app.js                      # Tap list engine, dual calendar renderer, hours checker & staff manager
├── CNAME                       # GitHub Pages custom domain routing (sab.drewratliff.com)
├── README.md                   # Project documentation & setup guide
└── assets/
    └── images/
        ├── logo.png            # Authentic Blue Ridge watercolor logo
        ├── hero.jpg            # Brewhouse & taproom atmosphere photo
        ├── hero-porch.jpg      # Blue Ridge mountain porch & beer garden photo
        ├── patio.jpg           # Outdoor beer garden with picnic tables & food truck
        └── beer-pretzels.jpg   # Craft beer flight & giant Bavarian pretzel
```

---

## 🚀 Local Development

To run the site locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/djratlif/SAB.git
   cd SAB
   ```

2. Start a local static file server:
   ```bash
   # Using Python 3:
   python3 -m http.server 8080

   # Or using Node:
   npx serve .
   ```

3. Open your browser and navigate to `http://localhost:8080`.

---

## 🌐 Deployment to `sab.drewratliff.com`

This repository is configured for automatic continuous deployment via **GitHub Pages**:

1. **GitHub Pages Configuration**:
   - Repository: `djratlif/SAB`
   - Source: Deploy from branch `main` (`/ (root)`)
   - Custom Domain: `sab.drewratliff.com` (configured in `CNAME`)
   - HTTPS: Enforce HTTPS enabled

2. **DNS Configuration**:
   Add a `CNAME` record in your DNS provider for `drewratliff.com`:
   - **Type**: `CNAME`
   - **Host / Name**: `sab`
   - **Target / Points to**: `djratlif.github.io`
   - **TTL**: Auto / 3600

Every commit pushed to the `main` branch automatically deploys to the live website.

---

## 💡 Modern Calendar Solutions for Brewery Staff

To solve the brewery's long-term event calendar maintenance without technical overhead:

1. **Google Calendar / iCal Feed Sync (Recommended)**: Staff creates events directly on their phone's Google Calendar or Apple Calendar. The frontend fetches the public calendar feed and renders it automatically with zero CMS logins.
2. **Notion / Airtable Mobile Sync**: Staff enters show details and flyer artwork via the free mobile app, live-syncing to the website.
3. **Headless CMS**: Lightweight portal (Sanity.io or Netlify Decap) tailored for tap list and event updates.

---

## 📄 License & Credits

- **Brewery**: Southern Appalachian Brewery &bull; Hendersonville, NC
- **Founders**: Andy & Kelly Cubbin
- **Design & Code**: Custom developed for SAB
