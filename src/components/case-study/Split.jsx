import styles from './Split.module.css';

/**
 * Split — the two-column case-study layout: a main text column and a narrower aside
 * (metadata or a pull quote), pushed to opposite edges. Stacks below 900px.
 */
export default function Split({ main, aside, mainWidth = 620, asideWidth = 327, align = 'start', className }) {
  return (
    <div
      className={[styles.split, className].filter(Boolean).join(' ')}
      style={{ '--split-main': `${mainWidth}px`, '--split-aside': `${asideWidth}px`, alignItems: align }}
    >
      <div className={styles.main}>{main}</div>
      {aside && <div className={styles.aside}>{aside}</div>}
    </div>
  );
}
