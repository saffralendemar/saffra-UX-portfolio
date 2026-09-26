import PageMeta from '../components/layout/PageMeta';
import HomeHero from '../components/sections/HomeHero';
import ProjectsSection from '../components/sections/ProjectsSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import { anchors } from '../content/site';
import { projects } from '../projects';

export default function HomePage() {
  return (
    <>
      <PageMeta />
      <HomeHero />
      <ProjectsSection projects={projects} />
      <AboutSection id={anchors.about} />
      <ContactSection />
    </>
  );
}
