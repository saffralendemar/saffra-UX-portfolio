import { useEffect } from 'react';
import { site } from '../../content/site';

/** Sets the document title (and description) for the current page. */
export default function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} – ${site.name}` : site.title;
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
  return null;
}
