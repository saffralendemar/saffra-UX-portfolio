import styles from './PhaseBadge.module.css';

/**
 * PhaseBadge — the pill that opens each design-process phase ("Understand", "Discovery"…).
 * Rendered as the section's heading. Colour comes from the case study's accent.
 */
export default function PhaseBadge({ id, icon: Icon, children, as: Tag = 'h2' }) {
  return (
    <Tag id={id} className={styles.badge}>
      {Icon && <Icon size={32} className={styles.icon} />}
      <span>{children}</span>
    </Tag>
  );
}
