import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';
import { InstagramIcon, WhatsAppIcon } from '../components/SocialIcons';

function Contact() {
  const generalWhatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.general);
  const customOrderWhatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.customOrder);
  const instagramUrl = siteConfig.instagram.url;
  const instagramHandle = `@${siteConfig.instagram.handle}`;

  return (
    <>
      <section className="contact-hero" id="contact-hero">
        <div className="container">
          <span className="section-subtitle">Say Hello</span>
          <h1>Get in Touch</h1>
          <p>
            Questions about our handmade crochet pieces, custom ideas, or delivery
            in Mumbai? Reach us on WhatsApp or follow along on Instagram.
          </p>
          <div className="contact-hero__actions">
            <a
              href={generalWhatsAppUrl}
              className="social-btn social-btn--whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={22} />
              Chat on WhatsApp
            </a>
            <a
              href={instagramUrl}
              className="social-btn social-btn--instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={22} />
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-enquiry animate-fade-in-up" id="contact-channels">
              <h3>Connect With Us</h3>
              <p className="contact-enquiry__lead">
                WhatsApp is the fastest way to ask about products, availability,
                custom orders and delivery. Instagram is where we share new
                creations and behind-the-scenes stitches.
              </p>

              <a
                href={generalWhatsAppUrl}
                className="channel-card channel-card--whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel-card__icon">
                  <WhatsAppIcon size={26} />
                </span>
                <span className="channel-card__body">
                  <span className="channel-card__label">WhatsApp</span>
                  <span className="channel-card__value">
                    {siteConfig.whatsappDisplayNumber}
                  </span>
                  <span className="channel-card__hint">
                    Opens a draft message — tap Send in WhatsApp when you are ready.
                  </span>
                </span>
              </a>

              <a
                href={instagramUrl}
                className="channel-card channel-card--instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="channel-card__icon">
                  <InstagramIcon size={26} />
                </span>
                <span className="channel-card__body">
                  <span className="channel-card__label">Instagram</span>
                  <span className="channel-card__value">{instagramHandle}</span>
                  <span className="channel-card__hint">
                    Follow for new pieces, colour stories and studio updates.
                  </span>
                </span>
              </a>
            </div>

            <div className="contact-info-cards animate-fade-in-up delay-1">
              <div className="contact-info-card" id="info-delivery">
                <div className="contact-info-card__icon">📍</div>
                <div>
                  <h4>Our Delivery Areas</h4>
                  <p>
                    Delivery is currently limited to these Mumbai neighbourhoods:
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
                    sizes and styles — we will let you know what we can make for you.
                  </p>
                  <a
                    href={customOrderWhatsAppUrl}
                    className="btn btn--sm btn--primary social-btn--inline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon size={16} />
                    Enquire on WhatsApp
                  </a>
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
