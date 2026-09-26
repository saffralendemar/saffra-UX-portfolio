import TagList from '../ui/Tag';
import styles from './MetaList.module.css';

/** MetaList — project facts (ROLE, TIME…) separated by rules, optionally preceded by tags. */
export default function MetaList({ tags, items, width = 302, className }) {
  return (
    <div className={[styles.meta, className].filter(Boolean).join(' ')} style={{ maxWidth: width }}>
      {tags && (
        <div className={styles.row}>
          <TagList tags={tags} label="Disciplines" />
        </div>
      )}
      <dl className={styles.list}>
        {items.map(({ label, value }) => (
          <div key={label} className={styles.row}>
            <dt className={styles.label}>{label}</dt>
            <dd className={styles.value}>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
