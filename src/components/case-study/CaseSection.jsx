import Container from '../layout/Container';
import styles from './CaseSection.module.css';

/**
 * A case-study section.
 * variant "plain": white, 1062px content column · "wide": white, 1224px column ·
 *         "panel": rounded #fcfcfc panel (1280px).
 * `gap` sets the vertical rhythm between the section's direct children (default 80px).
 * `padding` / `background` override the variant's defaults on desktop.
 */
const CONTAINER = { plain: 'content', wide: 'wide', panel: 'panel' };

export default function CaseSection({ id, variant = 'plain', gap = 80, padding, labelledBy, label, background, className, children }) {
  return (
    <section id={id} aria-labelledby={labelledBy} aria-label={label} className={[styles.section, className].filter(Boolean).join(' ')}>
      <Container size={CONTAINER[variant]}>
        <div
          className={`${styles.body} ${styles[variant]}`}
          style={{ '--section-gap': `${gap}px`, ...(padding && { '--section-padding': padding }), background }}
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
