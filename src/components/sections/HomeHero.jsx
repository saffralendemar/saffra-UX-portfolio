import Button from '../ui/Button';
import Container from '../layout/Container';
import { homeHero, anchors } from '../../content/site';
import { useSectionNavigation } from '../../hooks/useSectionNavigation';
import styles from './HomeHero.module.css';

export default function HomeHero() {
  const goToSection = useSectionNavigation();
  const { portrait } = homeHero;
  return (
    <section id="home-hero" className={styles.hero} aria-labelledby="home-hero-title">
      <Container>
        <div className={styles.row}>
          <div className={styles.copy}>
            <p className={styles.greeting}>{homeHero.greeting}</p>
            <div className={styles.stack}>
              <h1 id="home-hero-title" className={styles.title}>
                {homeHero.headline[0]} <span className={styles.titleLine}>{homeHero.headline[1]}</span>
              </h1>
              <div className={styles.actions}>
                <Button variant="soft" href={`#${anchors.projects}`} onClick={(e) => { e.preventDefault(); goToSection(anchors.projects); }}>
                  {homeHero.cta}
                </Button>
                <p className={styles.status}>
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="8" cy="8" r="8" fill="var(--color-status-available)" />
                  </svg>
                  {homeHero.status}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.portrait} style={{ aspectRatio: `${portrait.width} / ${portrait.height}` }}>
            <img src={portrait.src} alt={portrait.alt} width={portrait.width} height={Math.round(portrait.height)} fetchPriority="high" />
          </div>
        </div>
      </Container>
    </section>
  );
}
