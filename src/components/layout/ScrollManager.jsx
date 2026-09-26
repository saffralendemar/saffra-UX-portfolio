import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSection } from '../../hooks/useSectionNavigation';

/**
 * Restores scroll on navigation: jumps to the top of new pages, or to `#hash` targets
 * (waiting briefly for lazily loaded routes to render the target element).
 */
export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return undefined;
    }
    const id = decodeURIComponent(hash.slice(1));
    let frame;
    let attempts = 0;
    const tryScroll = () => {
      if (scrollToSection(id) || attempts++ > 120) return;
      frame = requestAnimationFrame(tryScroll);
    };
    tryScroll();
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
