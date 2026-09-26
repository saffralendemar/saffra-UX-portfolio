import { lazy } from 'react';
import CardPhones from './artwork/CardPhones';

/**
 * MATT Movilidad — the original export only contains this project card (marked "Coming"),
 * so the route renders a "coming soon" page built from the same card content.
 */
const matt = {
  slug: 'matt',
  title: 'Matt movilidad',
  path: '/projects/matt',
  status: 'coming-soon',
  description: 'A map helping wheelchair users navigate Medellín, Colombia, by highlighting accessible locations.',
  card: {
    summary: ['A map helping wheelchair users navigate Medellín, Colombia, by highlighting accessible locations.'],
    summaryLineHeight: 1.4,
    tags: ['UX Design', 'Conceptual'],
    tagTone: { background: 'rgba(0, 0, 0, 0.2)', color: '#ffffff', blend: 'soft-light' },
    tagsOffset: { left: 34, top: 27.07 },
    cta: 'Coming ',
    gradient:
      'linear-gradient(-68.7174deg, rgb(126, 126, 126) 21.117%, rgb(94, 94, 94) 48.861%, rgb(72, 72, 72) 97.047%)',
    textColor: '#ffffff',
    artwork: CardPhones,
    artworkWidth: 353,
    artworkLabel: 'Three screens from the MATT Movilidad accessible map concept',
    layout: { left: 118, width: 772, gap: 69, textWidth: 350 },
  },
  CaseStudy: lazy(() => import('./CaseStudy')),
};

export default matt;
