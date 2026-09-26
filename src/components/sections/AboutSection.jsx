import Container from '../layout/Container';
import { about } from '../../content/site';
import styles from './AboutSection.module.css';

/**
 * About content — used as a section on the home page and as the body of /about.
 * `headingLevel` lets the About page promote the title to its <h1>.
 */
export default function AboutSection({ id, headingLevel = 2 }) {
  const Heading = `h${headingLevel}`;
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id || 'about'}-title`}>
      <Container>
        <div className={styles.stack}>
          <Heading id={`${id || 'about'}-title`} className={styles.title}>
            {about.title}
          </Heading>
          <div className={styles.intro}>
            <div className={styles.portrait} style={{ aspectRatio: `${about.portrait.width} / ${about.portrait.height}` }}>
              <img src={about.portrait.src} alt={about.portrait.alt} width={about.portrait.width} height={about.portrait.height} loading="lazy" />
            </div>
            <p className={styles.lead}>{about.intro}</p>
          </div>
          <ul className={styles.pillars}>
            {about.pillars.map((pillar) => (
              <li key={pillar.title} className={styles.pillar}>
                <div className={styles.iconSlot}>
                  <img
                    src={pillar.icon.src}
                    alt={pillar.icon.alt}
                    width={pillar.icon.width}
                    height={pillar.icon.height}
                    className={pillar.icon.framed ? styles.iconFramed : styles.icon}
                    style={{ width: pillar.icon.width, height: pillar.icon.height }}
                    loading="lazy"
                  />
                </div>
                <div className={styles.pillarText}>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarBody}>{pillar.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
