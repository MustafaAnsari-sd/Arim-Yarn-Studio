# 🧶 Arim Yarn Studio — Handmade Crochet Boutique

**Thoughtfully crafted. Handmade with love.**

Arim Yarn Studio is a handmade crochet boutique dedicated to creating unique, handcrafted pieces that bring creativity, warmth and individuality to everyday life.

This repository contains the source code for the Arim Yarn Studio website, a modern storefront designed to showcase crochet creations, introduce the brand and provide customers with an engaging browsing experience.

Built using **React, Vite and CSS**, the website combines an elegant visual identity with a simple, user-friendly experience.

---

## ✨ Website Highlights

- **Elegant Homepage:** Introduces the brand through a warm, craft-inspired visual experience.
- **Product Collection:** Provides a dedicated space to discover handmade crochet products.
- **Brand Story:** An About page that introduces Arim Yarn Studio and its creative vision.
- **Contact Page:** Provides visitors with information about connecting with the business.
- **Reusable Components:** Uses reusable React components for consistent layouts and easier maintenance.
- **Responsive Design:** Designed to provide a user-friendly experience across desktop and mobile screen sizes.

## 🧵 About Arim Yarn Studio

At Arim Yarn Studio, every crochet creation reflects the beauty of handmade craftsmanship. The brand celebrates creativity, attention to detail and the personal touch that makes handcrafted products special.

The website serves as a digital home for the brand, helping visitors explore its collection and discover its identity.

**Our vision:** To build a distinctive handmade brand that connects thoughtful craftsmanship with people who appreciate unique, handcrafted creations.

---

## 🛍️ Explore the Website

| Page | Description |
|---|---|
| Home | Discover the brand and explore featured content. |
| Shop | Browse the crochet product collection. |
| About | Learn about Arim Yarn Studio and its story. |
| Contact | Find information about contacting the business. |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based user interface |
| Vite 6 | Development server and production build tooling |
| React Router 7 | Client-side page navigation |
| JavaScript | Website functionality and application logic |
| CSS3 | Layout, styling, responsive design and animations |
| Google Fonts | Playfair Display and DM Sans typography |
| Git & GitHub | Version control and source code management |

---

## 📁 Project Structure

```text
arim-yarn-studio/
├── public/
│   ├── favicon.svg
│   └── images/
│       └── products/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── WhatsAppFAB.jsx
│   ├── data/
│   │   ├── products.js
│   │   └── siteConfig.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

*The structure above describes the main application files. Your local project may contain additional files as the website evolves.*

---

## 🎨 Design Philosophy

The website follows a warm, minimal and elegant aesthetic inspired by handmade crafts and contemporary boutique branding.

### Colour Palette

| Colour | Hex Code | Usage |
|---|---|---|
| Warm Ivory | `#FAF7F2` | Primary background |
| Soft Cream | `#F5F0E8` | Secondary surfaces |
| Sage Green | `#8B9E8B` | Natural accent |
| Dusty Pink | `#D4A0A0` | Decorative accent |
| Chocolate Brown | `#5C4033` | Text and emphasis |

### Typography

- **Playfair Display:** Elegant serif typography for headings.
- **DM Sans:** Clean, modern typography for body text and interface elements.

The visual direction prioritises readability, balanced spacing, soft colours and a cohesive brand experience.

---

## 🚀 Getting Started

Follow these instructions to run the website on your local machine.

### Prerequisites

Install the following before getting started:

- [Node.js](https://nodejs.org/) — version 18 or later
- npm — included with Node.js
- [Git](https://git-scm.com/) — for version control

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR-GITHUB-USERNAME/arim-yarn-studio.git
```

### 2. Navigate to the Project Directory

```bash
cd arim-yarn-studio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal. Vite commonly uses `http://localhost:5173` when that port is available.

### 5. Create a Production Build

```bash
npm run build
```

### 6. Preview the Production Build

```bash
npm run preview
```

---

## ⚙️ Project Configuration

The project keeps important website information organised in dedicated files.

### Product Information

Product data is maintained in:

```text
src/data/products.js
```

This file is the central place to maintain product details used by the catalogue, including names, descriptions, prices and image references supported by the existing product data structure.

### Brand Configuration

Website configuration is maintained in:

```text
src/data/siteConfig.js
```

Use this file to manage the supported brand details and other configurable website information.

### Product Images

Product images can be organised under:

```text
public/images/products/
```

Use descriptive filenames and appropriately compressed images for better maintainability and loading performance.

---

## 📦 Deployment

The project uses Vite and can be deployed to a static hosting platform that supports React/Vite builds, such as:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

Generate the production build using:

```bash
npm run build
```

The resulting `dist/` directory contains the generated website assets.

Choose a hosting platform, connect the repository and configure the build command and output directory as required by that platform. Client-side routing should also be configured appropriately for the chosen host.

---

## 🧾 Project Scope

The website is designed to help visitors discover the brand and explore its crochet collection.

- Product information can be maintained through the project's data files.
- Brand information can be updated through the central configuration.
- The interface can be extended as the business and product collection grow.

The current application does not include a built-in payment gateway or a complete e-commerce order-management backend. These capabilities can be considered for future development.

---

## 🔮 Future Enhancements

Potential improvements as the brand grows include:

- Expanded product collections and dedicated product detail pages.
- Enhanced product filtering and search.
- Shopping cart and secure online payments.
- Product availability and inventory management.
- Customer reviews and testimonials.
- Performance, accessibility and search-engine optimisation improvements.

These are potential enhancements rather than features currently guaranteed to be implemented.

---

## 👩‍💻 Development & Version Control

This project is maintained with Git and GitHub to track changes, preserve working versions and support ongoing website development.

Example commit messages:

```bash
git commit -m "feat: update Arim Yarn Studio branding"
git commit -m "feat: add crochet product collection"
git commit -m "fix: improve mobile navigation"
git commit -m "docs: update project documentation"
```

---

## 📄 Ownership & Rights

Arim Yarn Studio is a brand-owned project. The brand identity, product photography, business content and associated assets belong to their respective rights holders.

Unless a separate licence is provided, the source code and assets are not granted for unrestricted reuse simply because this repository is publicly accessible.

---

**Arim Yarn Studio**

*Handmade with love. Crafted to be yours.* 🧶
