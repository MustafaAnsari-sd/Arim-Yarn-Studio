import { useState, useMemo, useRef, useEffect } from 'react';
import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';
import ProductCard from '../components/ProductCard';
import products, { CATEGORIES } from '../data/products';

const CATEGORY_META = {
  'All':               { icon: '🧶' },
  'Keychains':         { icon: '🔑' },
  'Hair Accessories':  { icon: '🎀' },
  'Bookmarks':         { icon: '📖' },
  'Home Décor':        { icon: '🏡' },
  'Charms & Clips':    { icon: '✨' },
};

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const productsSectionRef = useRef(null);
  const filtersBarRef = useRef(null);
  const isFirstRender = useRef(true);

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (cat) => {
    if (cat === activeCategory) return;
    setActiveCategory(cat);
  };

  useEffect(() => {
    // Skip scroll on initial component mount so page loads naturally at the top
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // Scroll after category update and product re-render
    // Use setTimeout to ensure DOM has fully updated after state change
    const scrollTimer = setTimeout(() => {
      if (!productsSectionRef.current) return;

      const header = document.querySelector('.header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      const filtersBar = filtersBarRef.current;
      const filtersBarHeight = filtersBar ? filtersBar.getBoundingClientRect().height : 0;
      const totalStickyOffset = headerHeight + filtersBarHeight + 16; // +16px for breathing room

      const sectionTop = productsSectionRef.current.getBoundingClientRect().top + window.scrollY;
      const targetScrollY = Math.max(0, sectionTop - totalStickyOffset);

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: targetScrollY,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    }, 0);

    return () => clearTimeout(scrollTimer);
  }, [activeCategory]);

  const customOrderUrl = getWhatsAppUrl(
    "Hi Arim Yarn Studio! I'd like to place a custom crochet order. Can you help me?"
  );

  const moreComingUrl = getWhatsAppUrl(
    "Hi Arim Yarn Studio! I'd like to see more products. Can you share your full collection?"
  );

  return (
    <>
      {/* ── Festive Offer Ribbon ── */}
      <div className="festive-ribbon" id="festive-ribbon">
        <div className="festive-ribbon__track">
          <span>🎉 Festive Season Special &nbsp;·&nbsp; All handmade items at just ₹79 &nbsp;·&nbsp; Limited time offer — grab yours before it ends! &nbsp;·&nbsp; 🧶 Custom colours available &nbsp;·&nbsp; 📦 Mumbai delivery &nbsp;·&nbsp;</span>
          <span aria-hidden="true">🎉 Festive Season Special &nbsp;·&nbsp; All handmade items at just ₹79 &nbsp;·&nbsp; Limited time offer — grab yours before it ends! &nbsp;·&nbsp; 🧶 Custom colours available &nbsp;·&nbsp; 📦 Mumbai delivery &nbsp;·&nbsp;</span>
        </div>
      </div>

      {/* ── Shop Hero ── */}
      <section className="shop-hero" id="shop-hero">
        <div className="shop-hero__bg">
          <span className="shop-hero__blob shop-hero__blob--1" />
          <span className="shop-hero__blob shop-hero__blob--2" />
          <span className="shop-hero__blob shop-hero__blob--3" />
        </div>
        <div className="container">
          <div className="shop-hero__content">
            {/* Festive offer tag */}
            <div className="shop-hero__offer-tag animate-fade-in">
              <span className="shop-hero__offer-tag-flame">🔥</span>
              <span>Festive Season Offer &nbsp;—&nbsp; Ends Soon!</span>
              <span className="shop-hero__offer-tag-flame">🔥</span>
            </div>

            <span className="section-subtitle animate-fade-in">Our Collection</span>
            <h1 className="animate-fade-in-up">
              Handcrafted with <em>Heart</em>
            </h1>
            <p className="shop-hero__lead animate-fade-in-up delay-1">
              Every piece is lovingly made by hand — one stitch, one loop, one
              creation at a time. Choose your favourite or ask for a custom colour.
            </p>

            {/* Price highlight */}
            <div className="shop-hero__price-highlight animate-fade-in-up delay-2">
              <div className="shop-hero__price-card">
                <span className="shop-hero__price-card__label">Special Festive Price</span>
                <span className="shop-hero__price-card__price">₹79</span>
                <span className="shop-hero__price-card__sub">per item · All products</span>
              </div>
              <p className="shop-hero__price-note">
                🎀 This is our <strong>special festive season price</strong>. Regular price will resume after the season — order now to save!
              </p>
            </div>

            <div className="shop-hero__badges animate-fade-in-up delay-3">
              <span>🎨 Custom colours available</span>
              <span>📦 Mumbai delivery</span>
              <span>❤️ 100% Handmade</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Category Filters ── */}
      <div className="shop-filters-bar" id="shop-filters" ref={filtersBarRef}>
        <div className="container">
          <div className="shop-filters">
            {CATEGORIES.map((cat) => {
              const meta = CATEGORY_META[cat] || { icon: '✨' };
              const isActive = activeCategory === cat;
              const count = cat === 'All'
                ? products.length
                : products.filter(p => p.category === cat).length;
              return (
                <button
                  key={cat}
                  className={`shop-filter-btn${isActive ? ' shop-filter-btn--active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  <span className="shop-filter-btn__icon">{meta.icon}</span>
                  <span className="shop-filter-btn__label">{cat}</span>
                  <span className="shop-filter-btn__count">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Products Grid ── */}
      <section className="section shop-products" id="shop-products" ref={productsSectionRef}>
        <div className="container">

          {/* Results bar */}
          <div className="shop-results-bar">
            <p className="shop-results-bar__count">
              Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'item' : 'items'}
              {activeCategory !== 'All' && <> in <em>{activeCategory}</em></>}
            </p>
            <p className="shop-results-bar__hint">
              🎉 <strong>Festive offer:</strong> All items at <strong>₹79</strong> · Limited time only
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="product-grid product-grid--shop">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="shop-empty">
              <span className="shop-empty__icon">🧶</span>
              <h3>Nothing here yet</h3>
              <p>No products in this category — check back soon!</p>
            </div>
          )}

          {/* ── More Coming Banner ── */}
          <div className="shop-more-coming">
            <div className="shop-more-coming__inner">
              <div className="shop-more-coming__left">
                <span className="shop-more-coming__emoji">🌸</span>
                <div>
                  <div className="shop-more-coming__badge">New arrivals dropping soon</div>
                  <h3>30+ More Designs on the Way!</h3>
                  <p>
                    You've only seen a glimpse of what we make. We are adding
                    <strong> bags, jewellery, phone charms, seasonal décor</strong> and
                    so much more to the collection. Every piece handcrafted with love,
                    all at our special festive price of <strong>₹79</strong>.
                  </p>
                  <div className="shop-more-coming__preview-chips">
                    <span>👜 Bags</span>
                    <span>💍 Jewellery</span>
                    <span>📱 Phone Charms</span>
                    <span>🎄 Seasonal Décor</span>
                    <span>🎁 Gift Sets</span>
                    <span>+ much more</span>
                  </div>
                </div>
              </div>
              <div className="shop-more-coming__right">
                <p className="shop-more-coming__follow-text">
                  Be the first to see new arrivals
                </p>
                <div className="shop-more-coming__actions">
                  <a
                    href={siteConfig.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                  >
                    Follow on Instagram
                  </a>
                  <a
                    href={moreComingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--secondary"
                  >
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Custom Order CTA ── */}
      <section className="shop-cta" id="shop-cta">
        <div className="container">
          <div className="shop-cta__card">
            <div className="shop-cta__left">
              <span className="shop-cta__emoji">🎨</span>
              <div>
                <h2>Want a Custom Colour or Design?</h2>
                <p>
                  Don't see your favourite colour? We can make any piece in the
                  shade of your choice — just message us on WhatsApp!
                </p>
              </div>
            </div>
            <a
              href={customOrderUrl}
              className="btn btn--lg shop-cta__btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Order Custom on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Shop;
