import { Eyebrow, SubHeading, Paragraph, BulletList } from './Text';
import styles from './ColumnGrid.module.css';

/**
 * ColumnGrid — three-up insights/learnings. Each column has a title and either
 * `body` (paragraph), `intro` + `list`, or both.
 * `titleStyle`: "eyebrow" (uppercase Poppins) or "subheading" (Work Sans medium).
 */
export default function ColumnGrid({ title, titleAs = 'h3', columns, titleStyle = 'eyebrow', className }) {
  const ColumnTitle = titleStyle === 'subheading' ? SubHeading : Eyebrow;
  const columnTitleAs = titleAs === 'h2' ? 'h3' : 'h4';
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {title && (typeof title === 'string' ? <Eyebrow as={titleAs}>{title}</Eyebrow> : title)}
      <ul className={styles.grid}>
        {columns.map((column) => (
          <li key={column.title} className={styles.column}>
            <ColumnTitle as={columnTitleAs}>{column.title}</ColumnTitle>
            <div className={styles.body}>
              {column.body && <Paragraph>{column.body}</Paragraph>}
              {column.intro && <Paragraph>{column.intro}</Paragraph>}
              {column.list && <BulletList items={column.list} gap={0} />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
