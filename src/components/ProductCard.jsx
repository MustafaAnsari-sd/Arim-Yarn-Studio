import { useState } from 'react';
import siteConfig from '../data/siteConfig';

/**
 * ProductCard — displays a single product with image, info and WhatsApp order button.
 *
 * When no real product image exists, a beautiful gradient placeholder is shown instead.
 */
function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);
  const { name, price, category, description, image, badge } = product;

  const formattedPrice = `${siteConfig.currency.symbol}${price.toLocaleString('en-IN')}`;

  const handleOrderClick = () => {
    if (!siteConfig.whatsappNumber) {
      alert(
        'WhatsApp number not configured yet.\n\nUpdate src/data/siteConfig.js with your WhatsApp number to enable ordering.'
      );
      return;
    }
    const message = encodeURIComponent(
      `Hi! I'm interested in ordering: ${name} (${formattedPrice}). Could you share more details?`
    );
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="product-card animate-fade-in-up" id={`product-${product.id}`}>
      <div className="product-card__image-wrapper">
        {badge && (
          <div className="product-card__badge">
            <span className="badge">{badge}</span>
          </div>
        )}

        {!imgError && image ? (
          <img
            className="product-card__image"
            src={image}
            alt={name}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-card__placeholder">
            <span className="product-card__placeholder-icon">🧶</span>
            <span className="product-card__placeholder-text">
              Photo coming soon
            </span>
          </div>
        )}
      </div>

      <div className="product-card__info">
        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__price">{formattedPrice}</div>
        <p className="product-card__description">{description}</p>
        <div className="product-card__actions">
          <button className="btn btn--primary btn--sm" onClick={handleOrderClick}>
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
