import styles from './Container.module.css';

/**
 * Container — centred page column.
 * size "page" (1200px + side gutters, used by home sections), "content" (1062px), "wide" (1224px),
 * "panel" (1280px) or "feature" (1288px, full-bleed case-study cards).
 */
export default function Container({ as: Tag = 'div', size = 'page', className, children, ...rest }) {
  return (
    <Tag className={[styles.container, styles[size], className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  );
}
