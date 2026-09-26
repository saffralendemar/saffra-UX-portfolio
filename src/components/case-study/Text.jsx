/*
 * Case-study typography primitives. Styles live in Text.module.css and map 1:1 to the
 * text styles used in the original design.
 */
import styles from './Text.module.css';

const cx = (...names) => names.filter(Boolean).join(' ');

/** Section heading — Poppins 29px (e.g. "Challenge", "Design Process", "Result"). */
export function SectionTitle({ as: Tag = 'h2', id, children, className }) {
  return (
    <Tag id={id} className={cx(styles.sectionTitle, className)}>
      {children}
    </Tag>
  );
}

/** Eyebrow heading — Poppins 500 18px uppercase (e.g. "OVERVIEW", "RESEARCH"). */
export function Eyebrow({ as: Tag = 'h3', tone, children, className }) {
  return <Tag className={cx(styles.eyebrow, tone === 'muted' && styles.muted, className)}>{children}</Tag>;
}

/** Sub-heading — Work Sans 500 18px (e.g. "Potentially Positive", "Very Small First Task"). */
export function SubHeading({ as: Tag = 'h4', children, className }) {
  return <Tag className={cx(styles.subHeading, className)}>{children}</Tag>;
}

/** Body copy — Work Sans 18px / 1.7. */
export function Paragraph({ children, className, align }) {
  return <p className={cx(styles.paragraph, align === 'justify' && styles.justify, className)}>{children}</p>;
}

/** Emphasised run inside body copy (the design's accent-coloured semibold text). */
export function Highlight({ children }) {
  return <strong className={styles.highlight}>{children}</strong>;
}

/** Bulleted list. `gap` in px between items (8 or 16 in the design). */
export function BulletList({ items, gap = 8, className }) {
  return (
    <ul className={cx(styles.list, className)} style={{ '--list-gap': `${gap}px` }}>
      {items.map((item, index) => (
        <li key={typeof item === 'string' ? item : index}>{item}</li>
      ))}
    </ul>
  );
}

/** Large pull quote — Poppins 29px, optionally with an eyebrow label. `compact` uses normal line height. */
export function Callout({ eyebrow, compact, children, className }) {
  return (
    <aside className={cx(styles.callout, className)}>
      {eyebrow && <p className={cx(styles.eyebrow, styles.muted)}>{eyebrow}</p>}
      <p className={cx(styles.calloutText, compact && styles.compact)}>{children}</p>
    </aside>
  );
}

/**
 * TextBlock — eyebrow heading followed by a paragraph of body copy (`children`).
 * `gap` controls the eyebrow/body spacing; `align="justify"` justifies the paragraph.
 */
export function TextBlock({ eyebrow, eyebrowAs, gap = 24, width, align, children, className }) {
  return (
    <div className={cx(styles.textBlock, className)} style={{ '--block-gap': `${gap}px`, maxWidth: width }}>
      {eyebrow && <Eyebrow as={eyebrowAs}>{eyebrow}</Eyebrow>}
      <Paragraph align={align}>{children}</Paragraph>
    </div>
  );
}

/** Vertical stack with a fixed gap. */
export function Stack({ gap = 24, width, align, className, children }) {
  return (
    <div className={cx(styles.stack, className)} style={{ '--stack-gap': `${gap}px`, maxWidth: width, alignItems: align }}>
      {children}
    </div>
  );
}
