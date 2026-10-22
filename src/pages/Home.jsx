import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import products from '../data/products';

function Home() {
  // Show first 4 products as featured
  const featured = products.slice(0, 4);

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <span className="hero__decor hero__decor--left">🧶</span>
        <span className="hero__decor hero__decor--right">🪡</span>

        <div className="hero__content">
          <span className="hero__badge animate-fade-in">✦ Handmade in India</span>
          <h1 className="animate-fade-in-up">
            Crochet Creations<br />
            Made with <em>Love</em>
          </h1>
          <p className="hero__text animate-fade-in-up delay-1">
            Every stitch tells a story. Discover one-of-a-kind handmade crochet bags,
            accessories, home décor and thoughtful gifts — crafted with care, just for you.
          </p>
          <div className="hero__actions animate-fade-in-up delay-2">
            <Link to="/shop" className="btn btn--primary btn--lg">
              Shop Collection
            </Link>
            <Link to="/about" className="btn btn--secondary btn--lg">
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── USP Strip ── */}
      <section className="features-strip" id="features">
        <div className="container">
          <div className="features-strip__grid">
            <div className="features-strip__item">
              <span className="features-strip__icon">🧶</span>
              <h4 className="features-strip__title">100% Handmade</h4>
              <p className="features-strip__text">
                Every piece is lovingly crocheted by hand, one stitch at a time.
              </p>
            </div>
            <div className="features-strip__item">
              <span className="features-strip__icon">🌿</span>
              <h4 className="features-strip__title">Premium Yarn</h4>
              <p className="features-strip__text">
                We use high-quality, soft yarns that feel as good as they look.
              </p>
            </div>
            <div className="features-strip__item">
              <span className="features-strip__icon">💝</span>
              <h4 className="features-strip__title">Made to Order</h4>
              <p className="features-strip__text">
                Customise colours and sizes. Each creation is uniquely yours.
              </p>
            </div>
            <div className="features-strip__item">
              <span className="features-strip__icon">📦</span>
              <h4 className="features-strip__title">Mumbai Delivery</h4>
              <p className="features-strip__text">
                Currently delivering across Andheri, Bandra, Malad, Santacruz and nearby areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="section" id="featured-products">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Curated for You</span>
            <h2>Featured Creations</h2>
            <p>
              A selection of our most-loved handmade crochet pieces. Each one is crafted
              with care and attention to detail.
            </p>
          </div>
          <div className="product-grid">
            {featured.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-2xl)' }}>
            <Link to="/shop" className="btn btn--secondary">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="section section--cream" id="about-preview">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview__visual-alt animate-fade-in-up">
              <div className="about-preview__visual-inner">
                <div className="about-preview__yarn-icon">🧶</div>
                <div className="about-preview__mini-stats">
                  <div className="about-preview__mini-stat">
                    <span className="about-preview__mini-num">4+</span>
                    <span className="about-preview__mini-label">Years of Craft</span>
                  </div>
                  <div className="about-preview__mini-stat">
                    <span className="about-preview__mini-num">100%</span>
                    <span className="about-preview__mini-label">Handmade</span>
                  </div>
                  <div className="about-preview__mini-stat">
                    <span className="about-preview__mini-num">∞</span>
                    <span className="about-preview__mini-label">Custom Options</span>
                  </div>
                  <div className="about-preview__mini-stat">
                    <span className="about-preview__mini-num">❤️</span>
                    <span className="about-preview__mini-label">Made with Love</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-preview__content animate-fade-in-up delay-1">
              <span className="section-subtitle">Our Story</span>
              <h2>Handmade, Heartfelt, Homegrown</h2>
              <p>
                Arim Yarn Studio was born from a passion for crochet and a belief that
                handmade things carry a special kind of magic. Every product in our
                collection is crafted by hand in India — no machines, no shortcuts.
              </p>
              <p>
                With <strong>4+ years of experience</strong>, we pour love into every
                loop and stitch, creating pieces that are as unique as the people who
                carry them.
              </p>
              <Link to="/about" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="section" id="cta-banner" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle">Custom Orders Welcome</span>
          <h2>Want Something Unique?</h2>
          <p style={{ maxWidth: 520, margin: '0 auto var(--space-xl)' }}>
            We love creating custom pieces. Tell us your idea and we'll bring it to life
            — choose your colours, size and style.
          </p>
          <Link to="/contact" className="btn btn--pink btn--lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
