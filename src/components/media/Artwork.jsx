import { useLayoutEffect, useRef, useState } from 'react';
import styles from './Artwork.module.css';

/**
 * Artwork — renders a fixed-size, Figma-generated illustration and scales it down
 * proportionally to fit its container (never up). This replaces the export's page-wide
 * `ScaledBox`: only illustrations scale, while text reflows responsively.
 *
 * - `width` / `height`: design size in px. Both are measured from the artwork when
 *   omitted; pass `width` for artwork whose root stretches to its parent (`w-full`).
 * - `label`: accessible description. The artwork's own markup is hidden from assistive
 *   tech because it is a picture of a UI rather than readable content.
 * - `offsetTop`: extra design space above the artwork for elements that overflow upward.
 * - `align`: "start" | "center" | "end" — horizontal alignment when the container is wider.
 *
 * Inside a flex row, give the Artwork's flex item an explicit basis (e.g. `flex: 0 1 353px`)
 * so the available width doesn't depend on the artwork's own size.
 */
export default function Artwork({ width, height, label, offsetTop = 0, align = 'start', className, children }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [size, setSize] = useState({ scale: 1, width: width ?? null, height: height != null ? height + offsetTop : null });

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return undefined;
    const update = () => {
      const naturalWidth = width ?? inner.offsetWidth;
      const naturalHeight = height != null ? height + offsetTop : inner.offsetHeight;
      const available = outer.clientWidth;
      const scale = naturalWidth > 0 ? Math.min(1, available / naturalWidth) : 1;
      setSize((prev) =>
        prev.scale === scale && prev.width === naturalWidth && prev.height === naturalHeight
          ? prev
          : { scale, width: naturalWidth, height: naturalHeight },
      );
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(outer);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [width, height, offsetTop]);

  const { scale } = size;
  return (
    <div
      ref={outerRef}
      className={[styles.outer, styles[align], className].filter(Boolean).join(' ')}
      style={{
        maxWidth: size.width ?? undefined,
        height: size.height != null ? size.height * scale : undefined,
      }}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      <div
        ref={innerRef}
        className={styles.inner}
        style={{ width: width ?? 'max-content', paddingTop: offsetTop || undefined, transform: scale === 1 ? undefined : `scale(${scale})` }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
