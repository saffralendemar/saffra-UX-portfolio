import { lazy } from 'react';
import CardMacbook from './artwork/CardMacbook';

/** CookieMonster — project metadata (card + routing). The case study body lives in CaseStudy.jsx. */
const cookiemonster = {
  slug: 'cookiemonster',
  title: 'CookieMonster',
  path: '/projects/cookiemonster',
  status: 'published',
  description: 'Say goodbye to annoying cookie pop-ups and reclaim your privacy.',
  card: {
    summary: ['Say goodbye to annoying cookie ', 'pop-ups and reclaim your privacy. '],
    tags: ['UX Design', 'Lo-fi'],
    tagTone: { background: '#8abcf6', color: '#000000' },
    tagsOffset: { left: 24, top: 24 },
    cta: 'Case study',
    gradient:
      'linear-gradient(-72.3413deg, rgb(103, 159, 226) 0%, rgb(153, 200, 255) 39.609%, rgb(153, 200, 255) 64.13%, rgb(115, 170, 235) 98.083%)',
    textColor: '#000000',
    artwork: CardMacbook,
    artworkWidth: 440,
    artworkLabel: 'CookieMonster plugin shown on a laptop screen over a shopping website',
    layout: { left: 65, width: 828.041, textWidth: 356 },
  },
  CaseStudy: lazy(() => import('./CaseStudy')),
};

export default cookiemonster;
