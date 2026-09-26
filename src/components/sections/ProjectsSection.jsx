import Container from '../layout/Container';
import ProjectList from '../projects/ProjectList';
import { anchors } from '../../content/site';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection({ projects }) {
  return (
    <section id={anchors.projects} className={styles.section} aria-labelledby="projects-title">
      <Container>
        <div className={styles.inner}>
          <h2 id="projects-title" className={styles.title}>
            Projects
          </h2>
          <ProjectList projects={projects} />
        </div>
      </Container>
    </section>
  );
}
