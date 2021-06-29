import './App.scss';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { retry } from './utils/commonFunctions';
import Cookies from 'universal-cookie';
import ScrollToTop from './components/ScrollToTop';
const Home = lazy(() => retry(() => import('./components/Home')));
const Work = lazy(() => retry(() => import('./components/Work')));
const Project = lazy(() => retry(() => import('./components/Work/index')));

const App = () => {
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
      pageLink: '/work',
      view: Work,
      displayName: 'Work'
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
        <Suspense fallback={<div />}>
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
        </Suspense>
    </Router>
  );
}

export default App;