/*
 * MATT Movilidad — the original export contains no case study for this project, only its
 * home-page card (marked "Coming"). Until the case study is written, this page presents the
 * card's existing content in the shared case-study hero. Replace it with a full case study
 * (see src/projects/ommej/CaseStudy.jsx) when the content is ready.
 */
import Button from '../../components/ui/Button';
import TagList from '../../components/ui/Tag';
import { CaseStudyLayout, CaseHero, BackLink } from '../../components/case-study';
import styles from './CaseStudy.module.css';

export default function MattCaseStudy({ project }) {
  const { card } = project;
  const CardArtwork = card.artwork;
  return (
    <CaseStudyLayout theme={{ accent: '#7e7e7e' }}>
      <CaseHero
        title={project.title}
        subtitle={card.summary.join(' ')}
        gradient={card.gradient}
        textColor={card.textColor}
        artwork={<CardArtwork />}
        artworkWidth={card.artworkWidth}
        artworkLabel={card.artworkLabel}
        layout={{ left: 128, gap: 100, textWidth: 416, textGap: 24, height: 772 }}
        topLeft={
          <div className={styles.topLeft}>
            <BackLink variant="overlay" />
            <TagList tags={card.tags} size="sm" tone={card.tagTone} label={`${project.title} tags`} />
          </div>
        }
        action={<Button variant="soft">{card.cta}</Button>}
      />
      <div className={styles.spacer} aria-hidden="true" />
    </CaseStudyLayout>
  );
}

