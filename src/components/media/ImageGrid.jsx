import Figure from './Figure';
import styles from './ImageGrid.module.css';

/** ImageGrid — a row of equally sized images that wraps to two columns on small screens. */
export default function ImageGrid({ images, gap = 8, label }) {
  return (
    <ul className={styles.grid} style={{ '--grid-gap': `${gap}px`, '--grid-columns': images.length }} aria-label={label}>
      {images.map((image) => (
        <li key={image.src} className={styles.item}>
          <Figure {...image} />
        </li>
      ))}
    </ul>
  );
}
