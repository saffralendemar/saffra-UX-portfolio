import ProjectCard from './ProjectCard';
import styles from './ProjectList.module.css';

export default function ProjectList({ projects }) {
  return (
    <ul className={styles.list}>
      {projects.map((project) => (
        <li key={project.slug}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
