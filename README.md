# 🧶 Loop & Bloom — Handmade Crochet Boutique

A premium boutique website for **Loop & Bloom**, a handmade crochet business based in India.

Built with **React + Vite** and plain CSS. Designed to be simple to maintain, beautiful to look at, and easy to extend.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will open at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## Project Structure

```
loop-and-bloom/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── products/         ← Add your real product photos here
├── src/
│   ├── components/
│   │   ├── Header.jsx        ← Navigation bar
│   │   ├── Footer.jsx        ← Footer with links & WhatsApp
│   │   ├── ProductCard.jsx   ← Reusable product card
│   │   └── WhatsAppFAB.jsx   ← Floating WhatsApp button
│   ├── data/
│   │   ├── products.js       ← Centralized product data
│   │   └── siteConfig.js     ← Brand info, WhatsApp number, social links
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css         ← Global design system & component styles
│   ├── App.jsx               ← Router & layout
│   └── main.jsx              ← Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Adding Your Products

1. **Add product photos** to `public/images/products/`.
2. **Edit** `src/data/products.js` — update the sample entries with your real product names, prices, descriptions and image paths.
3. **WhatsApp** is configured in `src/data/siteConfig.js` (`whatsappNumber`, display number, and prefilled messages). Update there if your business number changes.
4. **Delivery areas** are listed in `siteConfig.deliveryAreas` — adjust when you expand delivery.

---

## Tech Stack

| Layer     | Technology           |
|-----------|----------------------|
| Framework | React 19             |
| Bundler   | Vite                 |
| Styling   | Plain CSS (no Tailwind) |
| Routing   | React Router v7      |
| Fonts     | Playfair Display + DM Sans (Google Fonts) |

---

## Design System

- **Backgrounds:** Warm ivory (`#FAF7F2`) and cream (`#F5F0E8`)
- **Accents:** Sage green (`#8B9E8B`), dusty pink (`#D4A0A0`), chocolate brown (`#5C4033`)
- **Headings:** Playfair Display (serif)
- **Body text:** DM Sans (sans-serif)
- **Layout:** Spacious, responsive grid with smooth animations

---

## Notes

- **No payment processing** is included yet — orders and enquiries go through WhatsApp.
- **No stock photos** are bundled. Product cards show a graceful placeholder until you add real photos.
- The **Contact** page uses WhatsApp only (no email form). Customers open a prefilled chat and tap Send in WhatsApp.

---

## License

Private. All rights reserved.
