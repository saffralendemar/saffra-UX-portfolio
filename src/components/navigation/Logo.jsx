import styles from './Logo.module.css';

const LOOP_PATH =
  'M13.175 4.68269C13.175 4.68269 18.7942 9.43463 18.7942 13.5798C18.7942 18.4935 14.8109 22.4769 9.89711 22.4769C4.98337 22.4769 1 18.4935 1 13.5798C1 10.3019 2.87308 8.89711 2.87308 8.89711L4.04375 7.96057';

function Loop() {
  return (
    <svg width="19.794" height="23.477" viewBox="0 0 19.7942 23.4769" fill="none" className={styles.loop}>
      <path d={LOOP_PATH} stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <circle cx="10.1312" cy="1.63894" r="1.63894" fill="currentColor" />
    </svg>
  );
}

/** Logomark: two interlocking loops rotated 45°, as in the original header. */
export function Logomark() {
  return (
    <span className={styles.mark} aria-hidden="true">
      <span className={styles.rotate}>
        <span className={styles.frame}>
          <span className={styles.top}>
            <span className={styles.flip}>
              <Loop />
            </span>
          </span>
          <span className={styles.bottom}>
            <Loop />
          </span>
        </span>
      </span>
    </span>
  );
}

export default function Logo({ name }) {
  return (
    <>
      <Logomark />
      <span className={styles.divider} aria-hidden="true" />
      <span className={styles.name}>{name}</span>
    </>
  );
}
