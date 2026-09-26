import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** Smoothly scrolls to an element id on the current page. Returns false if it isn't there. */
export function scrollToSection(id, behavior = 'smooth') {
  const el = document.getElementById(id);
  if (!el) return false;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior });
  return true;
}

/**
 * Returns a function that scrolls to `id` on `path` — directly when already on that
 * page, otherwise by navigating to `path#id` (ScrollManager finishes the scroll).
 */
export function useSectionNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return useCallback(
    (id, path = pathname) => {
      if (path === pathname && scrollToSection(id)) return;
      navigate(`${path}#${id}`);
    },
    [navigate, pathname],
  );
}
