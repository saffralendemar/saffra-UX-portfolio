/*
 * Project registry — the single source of truth for project cards and case-study routes.
 *
 * To add a case study:
 *   1. Create src/projects/<slug>/ with an index.js (metadata + card) and CaseStudy.jsx
 *      (the body, composed from components in src/components/case-study).
 *   2. Import it below and add it to `projects` in the order it should appear on the home page.
 */
import cookiemonster from './cookiemonster';
import ommej from './ommej';
import matt from './matt';

export const projects = [cookiemonster, ommej, matt];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
