import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import TagList from '../ui/Tag';
import Artwork from '../media/Artwork';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard — gradient card linking to a case study. Layout values (offsets, column
 * widths, colours) come from each project's `card` data so every card keeps its original
 * composition. The CTA is the card's single link; clicking anywhere else on the card
 * follows it too (mouse convenience — keyboard and screen-reader users get the link).
 */
export default function ProjectCard({ project, headingLevel = 3 }) {
  const navigate = useNavigate();
  const { card } = project;
  const Heading = `h${headingLevel}`;
  const ArtworkComponent = card.artwork;
  const titleId = `project-${project.slug}-title`;

  return (
    <article
      className={styles.card}
      aria-labelledby={titleId}
      onClick={(event) => {
        if (event.defaultPrevented || event.target.closest('a') || window.getSelection()?.toString()) return;
        navigate(project.path);
      }}
      style={{
        '--card-gradient': card.gradient,
        '--card-ink': card.textColor,
        '--card-left': `${card.layout.left}px`,
        '--card-content-width': `${card.layout.width}px`,
        '--card-gap': card.layout.gap ? `${card.layout.gap}px` : undefined,
        '--card-text-width': `${card.layout.textWidth}px`,
        '--card-artwork-width': `${card.artworkWidth}px`,
        '--card-tags-left': `${card.tagsOffset.left}px`,
        '--card-tags-top': `${card.tagsOffset.top}px`,
      }}
    >
      <TagList tags={card.tags} size="sm" tone={card.tagTone} className={styles.tags} label={`${project.title} tags`} />

      <div className={styles.content} data-justify={card.layout.gap ? 'start' : 'between'}>
        <div className={styles.artwork}>
          <Artwork label={card.artworkLabel} align="center">
            <ArtworkComponent />
          </Artwork>
        </div>
        <div className={styles.text}>
          <Heading id={titleId} className={styles.title}>
            {project.title}
          </Heading>
          <p className={styles.summary} style={{ lineHeight: card.summaryLineHeight }}>
            {card.summary.map((line) => (
              <span key={line} className={card.summary.length > 1 ? styles.line : undefined}>
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className={styles.cta}>
        <Button variant="soft" to={project.path} aria-label={`${card.cta.trim()} – ${project.title}`}>
          {card.cta}
        </Button>
      </div>
    </article>
  );
}
