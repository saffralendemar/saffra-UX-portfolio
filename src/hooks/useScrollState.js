import { useEffect, useState } from 'react';

/**
 * Tracks scroll-dependent header state, mirroring the original export:
 *  - `pastHero`: the element with id `heroId` has scrolled under the fixed header
 *    (falls back to "has scrolled at all" when there's no hero).
 *  - `active`: which of `sectionIds` the viewport is in (checked with a 120px offset).
 */
export function useScrollState({ heroId, sectionIds = [], headerHeight = 93 }) {
  const [state, setState] = useState({ pastHero: false, active: null });
  const sectionKey = sectionIds.join('|');

  useEffect(() => {
    const ids = sectionKey ? sectionKey.split('|') : [];
    const update = () => {
      const hero = heroId && document.getElementById(heroId);
      const pastHero = hero ? hero.getBoundingClientRect().bottom <= headerHeight : window.scrollY > 0;
      const y = window.scrollY + 120;
      let active = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && y >= el.getBoundingClientRect().top + window.scrollY) active = id;
      }
      setState((prev) => (prev.pastHero === pastHero && prev.active === active ? prev : { pastHero, active }));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [heroId, sectionKey, headerHeight]);

  return state;
}
