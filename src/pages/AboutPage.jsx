import PageMeta from '../components/layout/PageMeta';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import styles from './AboutPage.module.css';

/** /about — the About content from the home page as a standalone page. */
export default function AboutPage() {
  return (
    <div className={styles.page}>
      <PageMeta title="About" />
      <AboutSection headingLevel={1} />
      <ContactSection />
    </div>
  );
}
