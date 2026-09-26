import styles from './PersonaCard.module.css';

/** PersonaCard — dark card describing a user persona. `icon` is a node (avatar); `headerMuted` dims the header row. */
export default function PersonaCard({ icon, tagline, name, description, painPoint, descriptionFont = 'body', headerMuted }) {
  return (
    <article className={styles.card}>
      <div className={styles.header} style={headerMuted ? { opacity: 0.8 } : undefined}>
        {icon}
        <p className={styles.tagline}>{tagline}</p>
      </div>
      <div className={styles.body}>
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.details}>
          <p className={descriptionFont === 'display' ? styles.descriptionDisplay : styles.description}>{description}</p>
          <p className={styles.description}>
            <strong className={styles.painLabel}>Pain-point: </strong>
            {painPoint}
          </p>
        </div>
      </div>
    </article>
  );
}
