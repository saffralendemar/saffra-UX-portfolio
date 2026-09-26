import { Outlet } from 'react-router-dom';
import SiteHeader from '../navigation/SiteHeader';
import SiteFooter from '../footer/SiteFooter';
import ScrollManager from './ScrollManager';

export default function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollManager />
      <SiteHeader />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}
