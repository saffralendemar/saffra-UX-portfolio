/*
 * Site-wide content. All copy is taken verbatim from the original Claude Design export.
 */
import portraitHero from '../assets/images/4e91d50d59399930df72d57326437c3fc607851e.webp';
import portraitAbout from '../assets/images/6621869cd6577a374aba2488a4cadb24b6fcddd9.webp';
import iconDesign from '../assets/images/39b08fa25f8545f420b1757326dfb1b65791d18d.png';
import iconHeart from '../assets/images/60325bf4d3e1ec777b03c580067b708b6cce0306.png';
import iconSaffronBun from '../assets/images/saffronbun.svg';

export const site = {
  name: 'Saffra Lendemar',
  title: 'Saffra Lendemar – UX/UI Designer',
  resumeUrl: 'https://drive.google.com/file/d/1QsPoNtUWVdZXhQ-covbn8mKZ0hATkZTM/view?usp=sharing',
  linkedInUrl: 'https://www.linkedin.com/in/saffra-lendemar',
  email: 'Saffra.lendemar@zoho.com',
  phone: '+46 767 91 11 49',
};

/** Section anchors used by the navigation. */
export const anchors = {
  projects: 'projects',
  about: 'about',
  contact: 'contact',
};

export const homeHero = {
  greeting: "Hello!  I'm Saffra",
  headline: ['UX/UI Designer intertwining', 'functionality with creativity'],
  cta: 'View projects',
  status: 'Open for work',
  portrait: { src: portraitHero, alt: 'Saffra Lendemar', width: 300, height: 294.718 },
};

export const about = {
  title: 'About',
  portrait: { src: portraitAbout, alt: 'Saffra Lendemar', width: 300, height: 302 },
  intro:
    'I’m a UX/UI designer, dancer and windsurfer based in Malmö. What excites me most with UX is the intersection of aesthetics, usability, and functionality - designing solutions that look good and solve real problems.',
  pillars: [
    {
      title: 'DESIGN PRINCIPLES',
      body: "In my design work, I believe in informed decision making and that less is often more. I'm eager to expand my design knowledge by hands-on work!",
      icon: { src: iconDesign, alt: 'Design icon', width: 60, height: 60 },
    },
    {
      title: 'CORE BELIEFS',
      body: 'In a world of 35 000 daily decisions, my designs strive to reduce cognitive load and ease decision-making.',
      icon: { src: iconHeart, alt: 'Heart icon', width: 65, height: 65 },
    },
    {
      title: 'MY PASSIONS',
      body: 'My heart beats for functional design, both in the physical and digital realm. Travelling along the coast and surfing comes a close second.',
      icon: { src: iconSaffronBun, alt: '', width: 50.611, height: 50.628, framed: true },
    },
  ],
};

export const contact = {
  headline: ['Great conversations', 'start with a', 'Swedish fika'],
  body: ['Tell me about your project over a cup of coffee.', "Let's chat!"],
};

export const footer = {
  items: ['Legal Notice', 'Privacy Policy', 'Built with Claude'],
  cta: 'Keep in touch',
};
