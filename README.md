# Pak Fiber Doors Website

Fiber door manufacturer, Gujar Khan (since 2016). Plain HTML, CSS and JavaScript. No build step needed.

## Files
| File | What it does |
| --- | --- |
| `index.html` | Home page (hero, stats, services, comparison, about, why choose us, top designs, steps, reviews, CTA) |
| `fiber-doors.html` | 66 doors + 4 beading + 1 frame, filter chips, article search, lightbox |
| `portfolio.html` | 30 project photos in a mixed grid with lightbox |
| `feedback.html` | Rating / Complaint / Appreciation forms that open WhatsApp, plus reviews |
| `disclaimer.html` | Website disclaimer |
| `style.css` | All styling. Colours are at the top in `:root` |
| `script.js` | Navbar, footer, WhatsApp links, animations, lightbox (shared by all pages) |
| `reviews.js` | Review data for Home and Feedback pages |
| `sitemap.xml`, `robots.txt` | SEO files |

## Images to upload (same folder as the HTML files)
`logo.png`, `heroimage.png` (9:16), `about.png` (16:9), `card1.png` to `card4.png`,
`article1.png` to `article66.png` (square 1:1), `beading1.png` to `beading4.png`, `frame1.png`,
`portfolio1.png` to `portfolio30.png`.
Missing images simply show an empty placeholder until you upload them.

## Common edits
- **WhatsApp numbers:** top of `script.js` (`WA` for business, `DEV_WA` for the developer button).
- **Reviews:** `reviews.js`. The current entries are SAMPLE placeholders. Replace them with real customer messages before going live.
- **Stats:** `data-c` and `data-s` on the numbers in the stats section of `index.html`.
- **Top designs on Home:** the `TOP` array in the script at the bottom of `index.html`.
- **Design count:** change the loops in `fiber-doors.html` if you add more articles.

## Deploy (GitHub Pages)
1. Upload all files and images to the repo root.
2. Settings > Pages > Deploy from branch `main` / root.
3. Custom domain: add `pakfiberdoors.com` in Pages settings and point the domain's DNS to GitHub Pages.

## SEO checklist after launch
1. Add the site in Google Search Console and submit `https://pakfiberdoors.com/sitemap.xml`.
2. Claim the Google Business Profile (Gujar Khan) and add the website link.
3. Keep image `alt` text and page titles when editing.
