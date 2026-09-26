import PageMeta from '../components/layout/PageMeta';
import Button from '../components/ui/Button';
import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <PageMeta title="Page not found" />
      <h1 id="not-found-title" className={styles.title}>
        Page not found
      </h1>
      <Button to="/">Back to home</Button>
    </section>
  );
}
