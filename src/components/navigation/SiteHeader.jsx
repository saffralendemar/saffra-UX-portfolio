import { useEffect, useId, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { site, anchors } from '../../content/site';
import { useScrollState } from '../../hooks/useScrollState';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';
import styles from './SiteHeader.module.css';

const HOME_SECTIONS = [anchors.projects, anchors.about];

/**
 * Fixed, blurred global header. On the home page the contact button switches from
 * translucent blue to grey once the hero has scrolled away, and the nav highlights the
 * section in view. On inner pages the header uses its "scrolled" colours throughout.
 */
export default function SiteHeader() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const goToSection = useSectionNavigation();
  const scroll = useScrollState({ heroId: isHome ? 'home-hero' : null, sectionIds: isHome ? HOME_SECTIONS : [] });

  const pastHero = isHome ? scroll.pastHero : true;
  const active = isHome ? scroll.active : pathname.startsWith('/projects') ? 'projects' : pathname === '/about' ? 'about' : null;

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const onSectionClick = (id, path) => (event) => {
    event.preventDefault();
    setMenuOpen(false);
    goToSection(id, path);
  };

  const navLinks = (
    <>
      <a
        href={`/#${anchors.projects}`}
        className={styles.label}
        data-active={active === 'projects' || undefined}
        onClick={onSectionClick(anchors.projects, '/')}
      >
        Projects
      </a>
      <Link
        to="/about"
        className={styles.label}
        data-active={active === 'about' || undefined}
        aria-current={pathname === '/about' ? 'page' : undefined}
      >
        About
      </Link>
      <a href={site.resumeUrl} target="_blank" rel="noreferrer" className={styles.label}>
        Resume
      </a>
    </>
  );

  const contactButton = (
    <a href={`#${anchors.contact}`} className={styles.contact} onClick={onSectionClick(anchors.contact)}>
      <span className={styles.contactLabel}>Contact me</span>
    </a>
  );

  return (
    <header className={styles.header} data-scrolled={pastHero || undefined}>
      <div className={styles.bar}>
        <Link to="/" className={styles.home} aria-label={`${site.name} – home`}>
          <Logo name={site.name} />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          <div className={styles.links}>{navLinks}</div>
          {contactButton}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav id={menuId} className={styles.mobileMenu} aria-label="Main">
          <div className={styles.mobileLinks}>
            {navLinks}
            {contactButton}
          </div>
        </nav>
      )}
    </header>
  );
}
