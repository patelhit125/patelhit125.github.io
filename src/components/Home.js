import React, { lazy } from 'react';
import { retry } from '../utils/commonFunctions';
import About from './About';
const Landing = lazy(() => retry(() => import('../components/Landing')));
const Work = lazy(() => retry(() => import('./Work')));
const Contact = lazy(() => retry(() => import('../components/Contact')));


const Home = () => {

  return (
    <>
      <Landing />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default Home;