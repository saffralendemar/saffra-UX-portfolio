import { Suspense } from 'react';
import { useParams } from 'react-router-dom';
import PageMeta from '../components/layout/PageMeta';
import ContactSection from '../components/sections/ContactSection';
import { getProject } from '../projects';
import NotFoundPage from './NotFoundPage';
import styles from './CaseStudyPage.module.css';

/** /projects/:slug — resolves the project from the registry and lazy-loads its case study. */
export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFoundPage />;
  const { CaseStudy } = project;

  return (
    <>
      <PageMeta title={project.title} description={project.description} />
      <Suspense fallback={<div className={styles.loading} role="status" aria-label="Loading case study" />}>
        <CaseStudy project={project} />
      </Suspense>
      <ContactSection />
    </>
  );
}
