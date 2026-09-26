import { ExternalLinkIcon } from '../ui/icons';
import MetaList from './MetaList';
import { TextBlock } from './Text';
import Split from './Split';
import styles from './ProjectIntro.module.css';

/**
 * ProjectIntro — company/product introduction: logo, name, description and link,
 * followed by an overview paragraph and project facts.
 */
export default function ProjectIntro({ logo, title, description, link, overview, meta }) {
  return (
    <div className={styles.intro}>
      <div className={styles.header}>
        <div className={styles.titleRow}>
          {logo}
          <h1 className={styles.title}>{title}</h1>
        </div>
        <p className={styles.description}>{description}</p>
        {link?.href && (
          <a className={styles.link} href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <ExternalLinkIcon size={20} />
            <span className="visually-hidden">(opens in a new tab)</span>
          </a>
        )}
        {link && !link.href && (
          // The original export has no URL for this link yet — shown as text until one is added.
          <span className={styles.link}>
            {link.label}
            <ExternalLinkIcon size={20} />
          </span>
        )}
      </div>
      <Split
        align="center"
        mainWidth={621}
        asideWidth={302}
        main={<TextBlock eyebrow={overview.title} eyebrowAs="h2" gap={8}>{overview.body}</TextBlock>}
        aside={<MetaList items={meta} />}
      />
    </div>
  );
}
