import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';

function Contact() {
  const generalWhatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.general);
  const customOrderWhatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.customOrder);

  return (
    <>
      {/* ── Hero ── */}
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <span className="section-subtitle">Say Hello</span>
          <h1>Get in Touch</h1>
          <p>
            Have a question about our handmade crochet pieces, delivery in Mumbai,
            or a custom idea? Message us on WhatsApp — we&apos;re happy to help.
          </p>
        </div>
      </section>

      {/* ── Contact Grid ── */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* WhatsApp enquiry */}
            <div className="contact-enquiry animate-fade-in-up" id="contact-whatsapp-enquiry">
              <h3>Message Us on WhatsApp</h3>
              <p className="contact-enquiry__lead">
                For product details, availability, custom orders, and delivery enquiries,
                reach us directly on WhatsApp. We&apos;ll reply as soon as we can.
              </p>
              <ul className="contact-enquiry__list">
                <li>Product questions and recommendations</li>
                <li>Stock and availability</li>
                <li>Custom colour, size, and style enquiries</li>
                <li>Delivery within our Mumbai areas</li>
              </ul>
              <a
                href={generalWhatsAppUrl}
                className="btn btn--primary btn--whatsapp-cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <p className="contact-enquiry__note">
                Opens WhatsApp with a draft message — tap <strong>Send</strong> in the app
                when you&apos;re ready. Your message is not sent until you do.
              </p>
            </div>

            {/* Info cards */}
            <div className="contact-info-cards animate-fade-in-up delay-1">
              <div className="contact-info-card" id="info-delivery">
                <div className="contact-info-card__icon">📍</div>
                <div>
                  <h4>Our Delivery Areas</h4>
                  <p>
                    Delivery is currently limited to the following areas in Mumbai:
                  </p>
                  <ul className="delivery-areas-list">
                    {siteConfig.deliveryAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                  <p className="contact-info-card__footnote">
                    We are not offering delivery outside these areas at this time.
                  </p>
                </div>
              </div>

              <div className="contact-info-card" id="info-custom">
                <div className="contact-info-card__icon">🎨</div>
                <div>
                  <h4>Custom Orders</h4>
                  <p>
                    Looking for something special? Enquire on WhatsApp about colours,
                    sizes, and styles — we&apos;ll let you know what we can make for you.
                  </p>
                  <a
                    href={customOrderWhatsAppUrl}
                    className="btn btn--sm btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginTop: 'var(--space-sm)' }}
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-info-card" id="info-whatsapp">
                <div className="contact-info-card__icon">💬</div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>
                    Our main way to connect for orders and questions:{' '}
                    <a
                      href={generalWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-info-card__link"
                    >
                      {siteConfig.whatsappDisplayNumber}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
