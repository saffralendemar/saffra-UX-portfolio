import styles from './Bleed.module.css';

/**
 * Bleed — lets wide artwork extend past the text column (centred), up to `width` px,
 * while never exceeding the viewport minus the page gutters.
 */
export default function Bleed({ width, children }) {
  return (
    <div className={styles.bleed} style={{ '--bleed-width': `${width}px` }}>
      {children}
    </div>
  );
}
