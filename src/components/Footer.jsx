import { Link } from 'react-router-dom';
import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';
import { InstagramIcon, WhatsAppIcon } from './SocialIcons';

const LOGO_SRC = '/images/logo-original.svg';

function Footer() {
  const year = new Date().getFullYear();
  const whatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.general);
  const deliverySummary = siteConfig.deliveryAreas.join(', ');

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src={LOGO_SRC} alt="Arim Yarn Studio" className="footer__logo-img" />
            </div>
            <p className="footer__desc">{siteConfig.description}</p>
            <div className="footer__social">
              <a
                href={whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <WhatsAppIcon size={18} />
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow ${siteConfig.instagram.handle} on Instagram`}
              >
                <InstagramIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Categories</h4>
            <div className="footer__links">
              <Link to="/shop">Bags &amp; Purses</Link>
              <Link to="/shop">Home Décor</Link>
              <Link to="/shop">Accessories</Link>
              <Link to="/shop">Gifts</Link>
              <Link to="/shop">Baby &amp; Kids</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Get in Touch</h4>
            <div className="footer__links">
              <span>📍 {deliverySummary}</span>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                WhatsApp {siteConfig.whatsappDisplayNumber}
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram @{siteConfig.instagram.handle}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Arim Yarn Studio. All rights reserved.</span>
          <span>Handcrafted with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
