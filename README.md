# Lambuz Juice Cafe – Static React Website

Vite + React, no backend. Works on any static host (Netlify, Vercel, GitHub Pages, any folder).

## Run
```
npm install
npm run dev      # local preview
npm run build    # creates the dist/ folder to upload
```

## Edit info
Everything lives in `src/data.js`.

- **Menu and prices**: transcribed from the cafe's 4 menu cards (`menu` list). Edit a price or add an item there.
- **Photos / logo**: in `public/images/`.
- **Verified from Google Maps**: name, address, map link.

Left empty on purpose (nothing unconfirmed is shown):
- `whatsapp` – number with country code, digits only (e.g. `919876543210`). Empty = WhatsApp buttons hidden.
- `hours` – opening hours. Empty = hidden.
- `instagram`, `facebook`, `youtube` – empty = icons hidden.
- `offer` – set `enabled: true` only if the cafe really has an offer.

Menu items to double-check with the cafe (printed menu was unclear):
- "Nutella Oreo" price printed as "18 0" – entered as ₹180.
- "Lubuz Special Veg Bullet" – entered as "Lambuz Special Veg Bullet".
- "(S)" on Mango Mastani / Death by Mango – kept as printed.
