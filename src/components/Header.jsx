import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  const handleNavClick = () => setMenuOpen(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={handleNavClick}>
          Loop <span>&</span> Bloom
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

      {/* Mobile menu overlay */}
      <nav className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} id="mobile-menu">
        <NavLink to="/" end onClick={handleNavClick}>Home</NavLink>
        <NavLink to="/shop" onClick={handleNavClick}>Shop</NavLink>
        <NavLink to="/about" onClick={handleNavClick}>About</NavLink>
        <NavLink to="/contact" onClick={handleNavClick}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
