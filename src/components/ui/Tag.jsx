import styles from './Tag.module.css';

/**
 * Tag — small project metadata label.
 *
 * size "sm": 11px label used on project cards. Colour is data-driven via `tone`
 *            ({ background, color, blend }) so each project can keep its own card styling.
 * size "md": 18px neutral label used in case-study metadata.
 */
export function Tag({ children, size = 'md', tone }) {
  const style = tone && {
    '--tag-bg': tone.background,
    '--tag-ink': tone.color,
    '--tag-blend': tone.blend || 'normal',
  };
  return (
    <li className={`${styles.tag} ${styles[size]}`} style={style}>
      <span aria-hidden="true" className={styles.fill} />
      <span className={styles.label}>{children}</span>
    </li>
  );
}

export default function TagList({ tags, size = 'md', tone, className, label = 'Tags' }) {
  if (!tags?.length) return null;
  return (
    <ul className={[styles.list, styles[`list-${size}`], className].filter(Boolean).join(' ')} aria-label={label}>
      {tags.map((tag) => (
        <Tag key={tag} size={size} tone={tone}>
          {tag}
        </Tag>
      ))}
    </ul>
  );
}
