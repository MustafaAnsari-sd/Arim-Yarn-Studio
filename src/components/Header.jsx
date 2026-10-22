import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LOGO_SRC = '/images/logo-original.svg';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
        <div className="header__inner">
          <Link to="/" className="header__logo" onClick={handleNavClick}>
            <img src={LOGO_SRC} alt="Arim Yarn Studio" className="header__logo-img" />
          </Link>

          {/* Desktop navigation */}
          <nav className="header__nav" id="desktop-nav">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Hamburger button */}
          <button
            className={`header__hamburger${menuOpen ? ' header__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            id="menu-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay - OUTSIDE header */}
      {menuOpen && (
        <>
          {/* Backdrop - separate element */}
          <div className="mobile-menu-backdrop" onClick={handleNavClick} aria-hidden="true" />
          
          {/* Menu drawer */}
          <nav className="mobile-menu" id="mobile-menu">
            <Link to="/" className="mobile-menu__logo-link" onClick={handleNavClick}>
              <img src={LOGO_SRC} alt="Arim Yarn Studio" className="mobile-menu__logo-img" />
            </Link>
            <div className="mobile-menu__links">
              <NavLink to="/" end onClick={handleNavClick} className="mobile-menu__link">Home</NavLink>
              <NavLink to="/shop" onClick={handleNavClick} className="mobile-menu__link">Shop</NavLink>
              <NavLink to="/about" onClick={handleNavClick} className="mobile-menu__link">About</NavLink>
              <NavLink to="/contact" onClick={handleNavClick} className="mobile-menu__link">Contact</NavLink>
            </div>
            <div className="mobile-menu__footer">
              <span>✦ Handmade in India ✦</span>
            </div>
          </nav>
        </>
      )}
    </>
  );
}

export default Header;
