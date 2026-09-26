import { Link } from 'react-router-dom';
import styles from './Button.module.css';

/**
 * Button — renders a router <Link> (`to`), an anchor (`href`) or a <button>.
 *
 * variant:
 *  - "soft"   translucent black soft-light fill on a coloured background (hero / project cards)
 *  - "solid"  opaque fill; colour via `color` (defaults to --color-button-dark)
 * size: "md" (18px label) | "sm" (14px label, 45px tall — header / inline actions)
 *
 * Without `to`, `href` or `onClick` it renders a non-interactive <span> with the same
 * styling (used where the original design has a button with no destination yet).
 */
export default function Button({
  to,
  href,
  variant = 'solid',
  size = 'md',
  color,
  textColor,
  icon,
  iconPosition = 'end',
  className,
  children,
  style,
  ...rest
}) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');
  const inlineStyle = { ...(color && { '--button-bg': color }), ...(textColor && { '--button-ink': textColor }), ...style };
  const content = (
    <>
      {variant === 'soft' && <span aria-hidden="true" className={styles.softFill} />}
      {icon && iconPosition === 'start' && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {icon && iconPosition === 'end' && <span className={styles.icon}>{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} style={inlineStyle} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a href={href} className={classes} style={inlineStyle} {...(external && { target: '_blank', rel: 'noreferrer' })} {...rest}>
        {content}
      </a>
    );
  }
  if (!rest.onClick && !rest.type) {
    return (
      <span className={`${classes} ${styles.static}`} style={inlineStyle} {...rest}>
        {content}
      </span>
    );
  }
  return (
    <button type="button" className={classes} style={inlineStyle} {...rest}>
      {content}
    </button>
  );
}
