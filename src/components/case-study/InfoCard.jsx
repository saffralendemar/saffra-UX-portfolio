import { Eyebrow } from './Text';
import styles from './InfoCard.module.css';

/** InfoCard — light grey card with an icon + eyebrow header (e.g. "Target audience"). */
export default function InfoCard({ icon, title, children, width = 484 }) {
  return (
    <div className={styles.card} style={{ maxWidth: width }}>
      <div className={styles.header}>
        {icon}
        <Eyebrow>{title}</Eyebrow>
      </div>
      {children}
    </div>
  );
}
