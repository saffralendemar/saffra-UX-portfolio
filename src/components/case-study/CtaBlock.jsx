import styles from './CtaBlock.module.css';

/** CtaBlock — centred statement with an action underneath (e.g. "Contact me for the full prototype"). */
export default function CtaBlock({ title, action }) {
  return (
    <div className={styles.cta}>
      <p className={styles.title}>{title}</p>
      {action}
    </div>
  );
}
