import Artwork from '../media/Artwork';
import { TextBlock } from './Text';
import styles from './ResultCard.module.css';

/**
 * ResultCard — gradient card pairing challenge/solution copy with artwork.
 * `blocks`: [{ title, body }] rendered as eyebrow + paragraph pairs.
 */
export default function ResultCard({ gradient, blocks, artwork, artworkLabel, textWidth = 408, paddingBlock = 88, minHeight }) {
  return (
    <div
      className={styles.card}
      style={{
        '--result-gradient': gradient,
        '--result-text-width': `${textWidth}px`,
        '--result-padding-block': `${paddingBlock}px`,
        minHeight,
      }}
    >
      <div className={styles.text}>
        {blocks.map((block) => (
          <TextBlock key={block.title} eyebrow={block.title}>
            {block.body}
          </TextBlock>
        ))}
      </div>
      <div className={styles.artwork}>
        <Artwork label={artworkLabel} align="center">
          {artwork}
        </Artwork>
      </div>
    </div>
  );
}
