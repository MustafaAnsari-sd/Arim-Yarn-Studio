import { useState } from 'react';
import siteConfig from '../data/siteConfig';

function ProductCard({ product, index = 0 }) {
  const [imgError, setImgError] = useState(false);
  const { name, price, category, description, image, badge, colors } = product;

  const formattedPrice = `${siteConfig.currency.symbol}${price.toLocaleString('en-IN')}`;

  const handleOrderClick = () => {
    const message = encodeURIComponent(
      `Hi Arim Yarn Studio! I'm interested in ordering: *${name}* (${formattedPrice}). Could you share more details?`
    );
    window.open(
      `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

  const delayClass = `delay-${Math.min(index, 5)}`;

  return (
    <div
      className={`product-card animate-fade-in-up ${delayClass}`}
      id={`product-${product.id}`}
    >
      {/* Image */}
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
            <span className="product-card__placeholder-text">Photo coming soon</span>
          </div>
        )}

        {/* Hover overlay */}
        <div className="product-card__overlay">
          <button
            className="product-card__quick-order"
            onClick={handleOrderClick}
          >
            Order on WhatsApp →
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="product-card__info">
        <span className="product-card__category">{category}</span>
        <h3 className="product-card__name">{name}</h3>
        <p className="product-card__description">{description}</p>

        {/* Colour options */}
        {colors && colors.length > 0 && (
          <div className="product-card__colors">
            <span className="product-card__colors-label">Available in:</span>
            <div className="product-card__color-tags">
              {colors.map((c) => (
                <span key={c} className="product-card__color-tag">{c}</span>
              ))}
            </div>
          </div>
        )}

        <div className="product-card__footer">
          <div className="product-card__price">{formattedPrice}</div>
          <button
            className="btn btn--primary btn--sm product-card__order-btn"
            onClick={handleOrderClick}
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
