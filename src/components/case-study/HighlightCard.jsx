import { Eyebrow } from './Text';
import styles from './HighlightCard.module.css';

/** HighlightCard — dark gradient card with a centred eyebrow and statement (e.g. the design challenge). */
export default function HighlightCard({ eyebrow, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <Eyebrow as="h2" className={styles.eyebrow}>
          {eyebrow}
        </Eyebrow>
        <p className={styles.statement}>{children}</p>
      </div>
    </div>
  );
}
