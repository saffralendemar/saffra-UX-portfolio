import { lazy } from 'react';
import CardPhones from './artwork/CardPhones';

/** Ommej — project metadata (card + routing). The case study body lives in CaseStudy.jsx. */
const ommej = {
  slug: 'ommej',
  title: 'Ommej',
  path: '/projects/ommej',
  status: 'published',
  description: 'Helping children be heard before problems become big and expensive.',
  card: {
    summary: ['Helping children be heard before problems become big and expensive.'],
    tags: ['UX/UI Design', 'Hi-fi'],
    tagTone: { background: '#b8b8ff', color: '#000000', blend: 'soft-light' },
    tagsOffset: { left: 34, top: 27.07 },
    cta: 'Case study',
    gradient:
      'linear-gradient(109.421deg, rgb(94, 101, 175) 0.56511%, rgb(158, 164, 226) 31.639%, rgb(158, 164, 226) 77.055%, rgb(122, 130, 207) 100%)',
    textColor: '#000000',
    artwork: CardPhones,
    artworkWidth: 353,
    artworkLabel: 'Three screens from the redesigned Ommej onboarding',
    layout: { left: 109, width: 784, textWidth: 351 },
  },
  CaseStudy: lazy(() => import('./CaseStudy')),
};

export default ommej;
