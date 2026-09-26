import fikaBackground from '../../assets/images/FikaSectionBackground.svg';
import coffeeIcon from '../../assets/images/86be58a531d7b796319cd9328a5f9675b97c83f9.png';
import fikaLogomark from '../../assets/images/fika-logomark.svg';
import FikaFrame from './artwork/FikaFrame';
import styles from './FikaCard.module.css';

/**
 * The "fika" illustration next to the contact details.
 * variant "home": illustration from the home page (SVG background + coffee + logomark).
 * variant "case": the teal gradient version used at the end of the case studies.
 */
export default function FikaCard({ variant = 'home' }) {
  if (variant === 'case') {
    return (
      <div className={styles.card} aria-hidden="true">
        <FikaFrame />
      </div>
    );
  }
  return (
    <div className={styles.card} aria-hidden="true">
      <div className={styles.homeCanvas} style={{ backgroundImage: `url(${fikaBackground})` }}>
        <div className={styles.fika}>
          <div className={styles.coffee}>
            <div className={styles.coffeeFlip}>
              <img src={coffeeIcon} alt="" />
            </div>
          </div>
          <div className={styles.logomark}>
            <img src={fikaLogomark} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
