import Container from '../layout/Container';
import Artwork from '../media/Artwork';
import styles from './CaseHero.module.css';

/**
 * CaseHero — the large gradient feature card at the top of a case study
 * (1288 × 772 on desktop): artwork on the left, title + subtitle on the right, with
 * optional slots for a top-left control (back link) and a bottom-right action.
 */
export default function CaseHero({
  id,
  gradient,
  textColor,
  title,
  titleAs: Title = 'h1',
  subtitle,
  artwork,
  artworkLabel,
  artworkWidth,
  layout = {},
  topLeft,
  action,
}) {
  const { left = 128, gap = 100, textWidth = 416, textGap = 24, height = 772, offsetY = 0 } = layout;
  return (
    <section id={id} className={styles.section} aria-label={typeof title === 'string' ? title : undefined}>
      <Container size="feature">
        <div
          className={styles.card}
          style={{
            '--hero-gradient': gradient,
            '--hero-ink': textColor,
            '--hero-left': `${left}px`,
            '--hero-gap': `${gap}px`,
            '--hero-text-width': `${textWidth}px`,
            '--hero-text-gap': `${textGap}px`,
            '--hero-height': `${height}px`,
            '--hero-artwork-width': `${artworkWidth}px`,
            '--hero-offset-y': `${offsetY}px`,
          }}
        >
          {topLeft && <div className={styles.topLeft}>{topLeft}</div>}
          <div className={styles.content}>
            <div className={styles.artwork}>
              <Artwork label={artworkLabel} align="center">
                {artwork}
              </Artwork>
            </div>
            <div className={styles.text}>
              <Title className={styles.title}>{title}</Title>
              <p className={styles.subtitle}>{subtitle}</p>
            </div>
          </div>
          {action && <div className={styles.action}>{action}</div>}
        </div>
      </Container>
    </section>
  );
}
