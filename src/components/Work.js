import React, { lazy } from 'react';
import { retry } from '../utils/commonFunctions';
const Navigation = lazy(() => retry(() => import('../components/Navigation')));
const Projects = lazy(() => retry(() => import('../components/Projects')));
const Footer = lazy(() => retry(() => import('../components/Footer')));

const Work = (props) => {

  const { aboutRef, workRef, contactRef } = props;

  return (
    <>
      <Navigation aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <Projects/>
      <Footer aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
    </>
  );
}

export default Work;