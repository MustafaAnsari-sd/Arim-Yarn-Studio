import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" id="about-hero">
        <div className="container">
          <span className="section-subtitle">Our Story</span>
          <h1>About Loop & Bloom</h1>
          <p>
            We believe that handmade things carry a warmth that factory-made
            products simply can't replicate. Every piece we create is a labour
            of love.
          </p>
        </div>
      </section>

      {/* ── Story section ── */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview__visual">
              <span className="about-preview__visual-text">
                Your maker / workspace photo will go here
              </span>
            </div>
            <div className="about-preview__content">
              <span className="section-subtitle">The Beginning</span>
              <h2>Where It All Started</h2>
              <p>
                Loop & Bloom began as a small passion project — a love for
                crochet, a few skeins of yarn, and endless hours of creating.
                What started as gifts for friends and family quickly grew into
                something more.
              </p>
              <p>
                Today, we craft each piece by hand in India, pouring heart and
                soul into every stitch. We believe in slow fashion — creating
                things that last, that are made ethically, and that bring joy
                to the people who own them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section section--cream" id="about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Believe In</span>
            <h2>Our Values</h2>
          </div>
          <div className="about-values">
            <div className="about-value-card animate-fade-in-up">
              <div className="about-value-card__icon">🤲</div>
              <h3>Made by Hand</h3>
              <p>
                No machines, no mass production. Every single product is
                handcrafted with patience and precision.
              </p>
            </div>
            <div className="about-value-card animate-fade-in-up delay-1">
              <div className="about-value-card__icon">🌱</div>
              <h3>Sustainable Craft</h3>
              <p>
                We choose quality over quantity, using premium yarns and
                sustainable practices wherever possible.
              </p>
            </div>
            <div className="about-value-card animate-fade-in-up delay-2">
              <div className="about-value-card__icon">💜</div>
              <h3>Made with Love</h3>
              <p>
                Every loop, every stitch, every product is infused with
                genuine care and creative passion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ textAlign: 'center' }} id="about-cta">
        <div className="container">
          <span className="section-subtitle">Come Say Hello</span>
          <h2>Let's Create Something Beautiful Together</h2>
          <p style={{ maxWidth: 520, margin: '0 auto var(--space-xl)' }}>
            Have a custom idea? Want to learn more about our process? We'd
            love to hear from you.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn--primary btn--lg">
              Browse Collection
            </Link>
            <Link to="/contact" className="btn btn--secondary btn--lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
