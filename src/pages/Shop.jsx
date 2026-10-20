import { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import products, { CATEGORIES } from '../data/products';

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" id="shop-hero">
        <div className="container">
          <span className="section-subtitle">Our Collection</span>
          <h1>Shop Handmade Crochet</h1>
          <p>
            Browse our lovingly handcrafted crochet creations. Each piece is unique,
            made with premium yarn and a whole lot of heart.
          </p>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section className="section" id="shop-products">
        <div className="container">
          {/* Category filters */}
          <div className="category-filter" id="category-filter">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`category-filter__btn${
                  activeCategory === cat ? ' category-filter__btn--active' : ''
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products */}
          {filtered.length > 0 ? (
            <div className="product-grid">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--space-3xl) 0' }}>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                No products in this category yet. Check back soon! 🧶
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Shop;
