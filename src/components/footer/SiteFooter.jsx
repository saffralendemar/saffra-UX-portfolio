import { Fragment } from 'react';
import { site, footer } from '../../content/site';
import styles from './SiteFooter.module.css';

function LinkedInMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 31.7037 31.7038" fill="none" aria-hidden="true" className={styles.mark}>
      <path
        d="M27.0142 27.0142H22.3168V19.6563C22.3168 17.9021 22.2851 15.6432 19.8729 15.6432C17.4265 15.6432 17.0513 17.556 17.0513 19.5269V27.0142H12.3539V11.8836H16.8637V13.9523H16.9271C17.8465 12.383 19.5585 11.4424 21.3762 11.5085C26.1371 11.5085 27.0168 14.6392 27.0168 18.7158L27.0142 27.0116V27.0142ZM7.05407 9.81498C6.33248 9.81151 5.64139 9.5235 5.1309 9.0135C4.6204 8.5035 4.33172 7.81269 4.32756 7.0911C4.32756 5.59574 5.55872 4.36458 7.05407 4.36458C8.54943 4.36458 9.77795 5.59574 9.78059 7.0911C9.78059 8.58646 8.54943 9.81498 7.05407 9.81498ZM9.40279 27.0142H4.70007V11.8836H9.40279V27.0142ZM29.3523 3.92683e-05H2.33815C1.72561 -0.00351849 1.13641 0.234804 0.698599 0.663218C0.260787 1.09163 0.00973479 1.67552 0 2.28799V29.4158C0.00973479 30.0283 0.260787 30.6121 0.698599 31.0406C1.13641 31.469 1.72561 31.7073 2.33815 31.7037H29.355C29.9689 31.7087 30.56 31.4712 30.9998 31.0428C31.4396 30.6143 31.6926 30.0297 31.7037 29.4158V2.28535C31.6926 1.67195 31.4395 1.08782 30.9995 0.660239C30.5596 0.232662 29.9685 -0.00369415 29.355 0.00268105L29.3523 3.92683e-05Z"
        fill="var(--color-linkedin)"
      />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.meta}>
          <p className={styles.owner}>
            <span className={styles.text}>
              © {new Date().getFullYear()} {site.name}
            </span>
          </p>
          {footer.items.map((item) => (
            <Fragment key={item}>
              <span className={styles.divider} aria-hidden="true" />
              <span className={styles.text}>{item}</span>
            </Fragment>
          ))}
        </div>
        <a href={site.linkedInUrl} target="_blank" rel="noreferrer" className={styles.social}>
          <span className={styles.cta}>{footer.cta}</span>
          <LinkedInMark />
          <span className="visually-hidden">on LinkedIn (opens in a new tab)</span>
        </a>
      </div>
    </footer>
  );
}
