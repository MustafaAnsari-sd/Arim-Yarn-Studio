import { Link } from 'react-router-dom';

const highlights = [
  {
    icon: '🏅',
    number: '4+',
    label: 'Years of Experience',
    desc: 'Over four years of honing our craft — every technique refined, every stitch perfected.',
  },
  {
    icon: '🎨',
    number: '100%',
    label: 'Fully Customisable',
    desc: 'Your colours, your size, your style. We bring any crochet idea you dream up to life.',
  },
  {
    icon: '💰',
    number: '₹',
    label: 'Reasonable Pricing',
    desc: 'Premium handmade quality at prices that are fair and accessible — no compromise needed.',
  },
  {
    icon: '✨',
    number: 'A+',
    label: 'Unmatched Quality',
    desc: 'We use only top-grade yarns and inspect every piece before it reaches your hands.',
  },
  {
    icon: '❤️',
    number: '∞',
    label: 'Made with Love',
    desc: 'Each creation carries genuine care — handcrafted slowly, thoughtfully, just for you.',
  },
];

const values = [
  {
    icon: '🤲',
    title: 'Made by Hand',
    desc: 'No machines, no mass production. Every single product is handcrafted with patience and precision, one stitch at a time.',
  },
  {
    icon: '🌿',
    title: 'Sustainable Craft',
    desc: 'We choose quality over quantity, using premium yarns and mindful practices — because the Earth matters as much as the art.',
  },
  {
    icon: '🎀',
    title: 'Custom Orders',
    desc: 'Have a unique idea? We love a challenge. Share your vision and we will craft something one-of-a-kind just for you.',
  },
  {
    icon: '📦',
    title: 'Thoughtful Gifting',
    desc: 'Our pieces make perfect heartfelt gifts — beautifully made, carefully packed, and always delivered with love.',
  },
];

function About() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero__bg-shapes">
          <span className="about-hero__shape about-hero__shape--1" />
          <span className="about-hero__shape about-hero__shape--2" />
        </div>
        <div className="container">
          <span className="section-subtitle">Our Story</span>
          <h1>About Arim Yarn Studio</h1>
          <p className="about-hero__lead">
            Born from a passion for crochet and a love for slow, soulful craft —
            every piece we make carries a warmth that no machine can replicate.
          </p>
          <div className="about-hero__tags">
            <span>🧶 Handmade in India</span>
            <span>🌿 Slow Fashion</span>
            <span>💝 4+ Years of Craft</span>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-story__text animate-fade-in-up">
              <span className="section-subtitle">The Beginning</span>
              <h2>Where It All Started</h2>
              <p>
                Arim Yarn Studio began as a small passion project — a love for
                crochet, a few skeins of yarn, and countless hours of creating.
                What started as handmade gifts for friends and family quickly
                grew into something much more meaningful.
              </p>
              <p>
                Over the past <strong>four years</strong>, we have poured heart
                and soul into every stitch — refining techniques, exploring new
                designs, and building a collection that celebrates the beauty of
                slow, handmade fashion. No shortcuts. No machines. Just craft,
                care and creativity.
              </p>
              <p>
                Today, Arim Yarn Studio is a name trusted by customers across
                Mumbai who value quality, uniqueness and the irreplaceable charm
                of something made entirely by hand.
              </p>
            </div>

            <div className="about-story__stats animate-fade-in-up delay-1">
              <div className="about-stat-card">
                <span className="about-stat-card__num">4+</span>
                <span className="about-stat-card__label">Years of Craft</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-card__num">100%</span>
                <span className="about-stat-card__label">Handmade</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-card__num">∞</span>
                <span className="about-stat-card__label">Custom Options</span>
              </div>
              <div className="about-stat-card">
                <span className="about-stat-card__num">❤️</span>
                <span className="about-stat-card__label">Made with Love</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section section--cream" id="about-highlights">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2>What Makes Arim Yarn Studio Special</h2>
            <p>
              Five reasons our customers keep coming back — and why you will love
              what we create for you.
            </p>
          </div>
          <div className="about-highlights-grid">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`about-highlight-card animate-fade-in-up delay-${i}`}
              >
                <div className="about-highlight-card__icon">{h.icon}</div>
                <div className="about-highlight-card__badge">{h.number}</div>
                <h3 className="about-highlight-card__title">{h.label}</h3>
                <p className="about-highlight-card__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section" id="about-values">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Believe In</span>
            <h2>Our Values</h2>
          </div>
          <div className="about-values-new">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`about-value-card animate-fade-in-up delay-${i}`}
              >
                <div className="about-value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process strip ── */}
      <section className="about-process" id="about-process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>How It Works</span>
            <h2 style={{ color: '#fff' }}>From Your Idea to Your Hands</h2>
          </div>
          <div className="about-process__steps">
            <div className="about-process__step">
              <div className="about-process__step-num">01</div>
              <h4>Share Your Idea</h4>
              <p>Message us on WhatsApp with your colour, size and design preferences.</p>
            </div>
            <div className="about-process__step-arrow">→</div>
            <div className="about-process__step">
              <div className="about-process__step-num">02</div>
              <h4>We Craft for You</h4>
              <p>We handcraft your piece with premium yarn, one careful stitch at a time.</p>
            </div>
            <div className="about-process__step-arrow">→</div>
            <div className="about-process__step">
              <div className="about-process__step-num">03</div>
              <h4>Delivered with Love</h4>
              <p>Your creation is packed beautifully and delivered to your door in Mumbai.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" id="about-cta" style={{ textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle">Come Say Hello</span>
          <h2>Let's Create Something Beautiful Together</h2>
          <p style={{ maxWidth: 520, margin: '0 auto var(--space-xl)' }}>
            Have a custom idea? Want to explore our collection? We would love
            to hear from you.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn btn--primary btn--lg">
              Browse Collection
            </Link>
            <Link to="/contact" className="btn btn--pink btn--lg">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
