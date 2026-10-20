import { Link } from 'react-router-dom';
import siteConfig, { getWhatsAppUrl } from '../data/siteConfig';

function Footer() {
  const year = new Date().getFullYear();
  const whatsAppUrl = getWhatsAppUrl(siteConfig.whatsappMessages.general);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand column */}
          <div>
            <div className="footer__brand">
              Loop <span>&</span> Bloom
            </div>
            <p className="footer__desc">{siteConfig.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="footer__heading">Categories</h4>
            <div className="footer__links">
              <Link to="/shop">Bags & Purses</Link>
              <Link to="/shop">Home Décor</Link>
              <Link to="/shop">Accessories</Link>
              <Link to="/shop">Gifts</Link>
              <Link to="/shop">Baby & Kids</Link>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="footer__heading">Get in Touch</h4>
            <div className="footer__links">
              <span>📍 Delivery: Andheri, Malad & Jogeshwari, Mumbai</span>
              <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Loop & Bloom. All rights reserved.</span>
          <span>Handcrafted with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
