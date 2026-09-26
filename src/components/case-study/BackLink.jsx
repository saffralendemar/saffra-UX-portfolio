import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronLeftBoldIcon } from '../ui/icons';
import styles from './BackLink.module.css';

/**
 * Icon button back to the project list.
 * variant "light": grey tile on white (Ommej) · "overlay": translucent tile on a hero (CookieMonster).
 */
export default function BackLink({ to = '/#projects', variant = 'light', label = 'Back to projects', className }) {
  const Icon = variant === 'overlay' ? ChevronLeftBoldIcon : ChevronLeftIcon;
  return (
    <Link to={to} className={[styles.back, styles[variant], className].filter(Boolean).join(' ')} aria-label={label}>
      {variant === 'overlay' && <span aria-hidden="true" className={styles.overlayFill} />}
      <Icon className={styles.icon} />
    </Link>
  );
}
