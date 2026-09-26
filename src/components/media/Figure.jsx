import styles from './Figure.module.css';

/**
 * Figure — a responsive image with optional caption. Keeps the design's aspect ratio
 * and corner radius; `crop` reproduces Figma's image-fill offsets when an image was
 * positioned inside its frame ({ width, height, left, top } in % of the frame).
 */
export default function Figure({ src, alt = '', width, height, radius, caption, crop, shadow, background, className, loading = 'lazy' }) {
  const style = {
    aspectRatio: width && height ? `${width} / ${height}` : undefined,
    maxWidth: width,
    borderRadius: radius,
    boxShadow: shadow,
    background,
  };
  const img = crop ? (
    <span className={styles.cropFrame}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        decoding="async"
        className={styles.cropped}
        style={{ width: `${crop.width}%`, height: `${crop.height}%`, left: `${crop.left}%`, top: `${crop.top}%` }}
      />
    </span>
  ) : (
    <img src={src} alt={alt} loading={loading} decoding="async" className={styles.image} />
  );

  return (
    <figure className={[styles.figure, className].filter(Boolean).join(' ')}>
      <div className={styles.frame} style={style}>
        {img}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
