import './App.scss';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { retry } from './utils/commonFunctions';
import Cookies from 'universal-cookie';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
const Navigation = lazy(() => retry(() => import('./components/Navigation')));
const Home = lazy(() => retry(() => import('./components/Home')));
const Project = lazy(() => retry(() => import('./components/Work/index')));
const About = lazy(() => retry(() => import('./components/About')));
const Work = lazy(() => retry(() => import('./components/Work')));
const Contact = lazy(() => retry(() => import('./components/Contact')));
const Footer = lazy(() => retry(() => import('./components/Footer')));

const App = () => {

  console.log('%cMade with ❤ by Hit Patel', 'color: black; background: grey; font-size: 15px; padding: 5px 15px; border-radius: 6px');

  const cookies = new Cookies();
  if (cookies.get('DARK_MODE') === 'true') {
    document.body.classList.toggle('dark');
  }

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home'
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About'
    },
    {
      pageLink: '/work',
      view: Work,
      displayName: 'Work'
    },
    {
      pageLink: '/contact',
      view: Contact,
      displayName: 'Contact'
    },
    {
      pageLink: '/work/:workCode',
      view: Project,
      displayName: 'Work'
    },
  ];

  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Navigation />
        <Switch>
          {pages.map((page, index) => {
            return (
              <Route
                exact
                path={page.pageLink}
                render={() => <page.view />}
                key={index}
              />
            );
          })}
          <Redirect to='/' />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;