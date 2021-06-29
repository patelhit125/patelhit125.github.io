import React, { lazy } from 'react';
import { retry } from '../utils/commonFunctions';
import About from './About';
const Navigation = lazy(() => retry(() => import('../components/Navigation')));
const Landing = lazy(() => retry(() => import('../components/Landing')));
const Projects = lazy(() => retry(() => import('../components/Projects')));
const Contact = lazy(() => retry(() => import('../components/Contact')));
const Footer = lazy(() => retry(() => import('../components/Footer')));


const Home = () => {

  const aboutRef = React.useRef(null);
  const workRef = React.useRef(null);
  const contactRef = React.useRef(null);

  return (
    <>
      <Navigation aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <Landing />
      <About aboutRef={aboutRef} />
      <Projects workRef={workRef} />
      <Contact contactRef={contactRef} />
      <Footer aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
    </>
  );
}

export default Home;