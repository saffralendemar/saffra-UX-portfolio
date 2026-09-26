import { useId, useRef, useState } from 'react';
import styles from './ProductTabs.module.css';

/**
 * ProductTabs — switches between the products covered by a case study.
 * Tabs without `content` show the "coming soon" placeholder from the original design.
 * Implements the WAI-ARIA tabs pattern (arrow keys, Home/End).
 */
export default function ProductTabs({ title, tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const tabRefs = useRef([]);

  const select = (index) => {
    const next = (index + tabs.length) % tabs.length;
    setActiveIndex(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event) => {
    const keys = { ArrowRight: activeIndex + 1, ArrowLeft: activeIndex - 1, Home: 0, End: tabs.length - 1 };
    if (event.key in keys) {
      event.preventDefault();
      select(keys[event.key]);
    }
  };

  const active = tabs[activeIndex];

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title} id={`${baseId}-title`}>
          {title}
        </h2>
        <div className={styles.tablist} role="tablist" aria-labelledby={`${baseId}-title`} onKeyDown={onKeyDown}>
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              ref={(el) => (tabRefs.current[index] = el)}
              type="button"
              role="tab"
              id={`${baseId}-tab-${index}`}
              aria-selected={index === activeIndex}
              aria-controls={`${baseId}-panel`}
              tabIndex={index === activeIndex ? 0 : -1}
              className={styles.tab}
              onClick={() => setActiveIndex(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" id={`${baseId}-panel`} aria-labelledby={`${baseId}-tab-${activeIndex}`} className={styles.panel}>
        {active.content ?? <ComingSoon topic={active.label} />}
      </div>
    </>
  );
}

function ComingSoon({ topic }) {
  return (
    <div className={styles.comingSoon}>
      <div className={styles.emoji} aria-hidden="true">
        🔜
      </div>
      <p className={styles.comingTitle}>Case studies coming soon</p>
      <p className={styles.comingBody}>
        I&apos;m currently documenting my work on <strong>{topic}</strong>.
        <br />
        Check back soon — it&apos;ll be worth the wait.
      </p>
    </div>
  );
}
