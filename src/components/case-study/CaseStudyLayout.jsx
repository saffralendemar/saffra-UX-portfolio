import styles from './CaseStudyLayout.module.css';

/**
 * Page shell for a case study. `theme.accent` colours phase badges and tabs;
 * `theme.accentInk` is used for highlighted text.
 */
export default function CaseStudyLayout({ theme = {}, children }) {
  return (
    <article
      className={styles.page}
      style={{
        '--case-accent': theme.accent,
        '--case-accent-strong': theme.accentStrong,
        '--case-highlight': theme.highlight,
      }}
    >
      {children}
    </article>
  );
}
