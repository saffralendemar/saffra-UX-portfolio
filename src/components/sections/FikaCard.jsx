import { useLayoutEffect, useRef, useState } from 'react';
import fikaBackground from '../../assets/images/FikaSectionBackground.svg';
import coffeeIcon from '../../assets/images/86be58a531d7b796319cd9328a5f9675b97c83f9.webp';
import fikaLogomark from '../../assets/images/fika-logomark.svg';
import styles from './FikaCard.module.css';

/** Width of the original 416 × 406 composition; the stage is drawn at this size and scaled. */
const DESIGN_WIDTH = 416;

/**
 * The "fika" illustration next to the contact details, shown the same way on every page
 * (SVG background + coffee + logomark).
 *
 * It is laid out in fixed pixels, so the whole composition is scaled to the card's width.
 * That keeps the icons sitting on top of the hill at every screen size (scale 1 at full size).
 */
export default function FikaCard() {
  const cardRef = useRef(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const card = cardRef.current;
    const update = () => setScale(card.clientWidth / DESIGN_WIDTH);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={cardRef} className={styles.card} aria-hidden="true">
      <div className={styles.stage} style={{ transform: `scale(${scale})` }}>
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
    </div>
  );
}
