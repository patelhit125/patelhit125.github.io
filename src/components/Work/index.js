import React, { lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { retry } from '../../utils/commonFunctions';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import project1gif from '../../assets/project1/project1gif.gif';
import project11 from '../../assets/project1/project11.png';
import project12 from '../../assets/project1/project12.png';
import project13 from '../../assets/project1/project13.png';
import project14 from '../../assets/project1/project14.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';
import project4 from '../../assets/project4.png';
import project5 from '../../assets/project5.png';
const Navigation = lazy(() => retry(() => import('../../components/Navigation')));
const Footer = lazy(() => retry(() => import('../../components/Footer')));

const Work = (props) => {

  const workCode = useParams().workCode;

  const { aboutRef, workRef, contactRef } = props;

  let projectImage, projectImage1, projectImage2, projectImage3, projectImage4, projectName, projectDescription, projectLink, projectNext;
  switch (workCode) {
    case 'coronaboard':
      projectImage = project1gif;
      projectImage1 = project11;
      projectImage2 = project12;
      projectImage3 = project13;
      projectImage4 = project14;
      projectName = 'Coronaboard';
      projectDescription = 'CORONABOARD is a simple dashboard for corona cases in india and and vaccination details, Check live statistics of confirmed, active, recovered, deaths cases and vaccination details.';
      projectLink = 'https://patelhit125.github.io/coronaboard/';
      projectNext = '/work/chair'
      break;

    case 'chair':
      projectImage = project2;
      projectName = 'ChAIR';
      projectDescription = 'ChAIR is a e-commerce website for modern chairs.';
      projectNext = '/work/samarthya'
      break;

    case 'samarthya':
      projectImage = project3;
      projectName = 'Samarthya';
      projectDescription = 'Samarthya (Indian meaning: Support) is a Indian based initiative non-government entity operating on the International level (10 countries). The main idea behind this NGO is to support, plan and carry out boots-on-the-ground projects to accomplish our objectives.';
      projectNext = '/work/enigma'
      break;

    case 'enigma':
      projectImage = project4;
      projectName = 'Enigma';
      projectDescription = 'A Question Paper Generator Application. An aesthically designed app for saving a ton of time for creating a Question Paper on just few clicks!!';
      projectNext = '/work/ted-talks'
      break;

    case 'ted-talks':
      projectImage = project5;
      projectName = 'TED-Talks';
      projectDescription = 'TED-Talks event webapp';
      projectNext = '/work/coronaboard'
      break;

    default:
      break;
  }

  return (
    <>
      <Navigation  aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <div className="bebasHuge">
        Work
      </div>
      <div className="container newDiv">
        <h2>{projectName}</h2>
        <div>
          {projectDescription}
        </div>
        <div className="mt">
          <a className="aLink" href={projectLink} target='_blank' rel='noreferrer'>Launch project &#8594;</a>
        </div>
      </div>
      <LazyLoadImage
        className="mtM img"
        alt="Hit Patel."
        effect="blur"
        src={projectImage} />
      <div className="container">
        <LazyLoadImage
          className="mtM imgFluid"
          alt="Hit Patel."
          effect="blur"
          src={projectImage1} />
        <LazyLoadImage
          className="mt imgFluid"
          alt="Hit Patel."
          effect="blur"
          src={projectImage2} />
        <LazyLoadImage
          className="mt imgFluid"
          alt="Hit Patel."
          effect="blur"
          src={projectImage3} />
        <LazyLoadImage
          className="mt imgFluid"
          alt="Hit Patel."
          effect="blur"
          src={projectImage4} />

        <div className="mtL center">
          <h3><Link className="aLink" to={projectNext}>Next project &#8594;</Link></h3>
        </div>
      </div>
      <Footer aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
    </>
  );
}

export default Work;