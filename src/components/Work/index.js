import React from 'react';
import Fade from 'react-reveal/Fade';
import { useParams, Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { projectData } from '../ProjectData';

const Work = () => {

  const workCode = useParams().workCode;

  let project;
  switch (workCode) {
    case 'coronaboard':
      project = projectData.project1;
      break;

    case 'chair':
      project = projectData.project2;
      break;

    case 'samarthya':
      project = projectData.project3;
      break;

    case 'enigma':
      project = projectData.project4;
      break;

    case 'ted-talks':
      project = projectData.project5;
      break;

    default:
      break;
  }

  return (
    <>
      <div className="bebasHuge">
        Work
      </div>
      <div className="container newDiv">
        <Fade bottom>
          <h2>{project.projectName}</h2>
          <div>
            {project.projectDescription}
          </div>
          <div className="mt">
            <a className="aLink" href={project.projectLink} target='_blank' rel='noreferrer'>Launch project &#8594;</a>
          </div>
        </Fade>
      </div>
      <LazyLoadImage
        className="mtM img"
        alt={project.projectImage.Alt}
        effect="blur"
        src={project.projectImage.Image} />
      <div className="container">
        <Fade bottom>
          <LazyLoadImage
            className="mtM imgFluid"
            alt={project.projectImage1.Alt}
            effect="blur"
            src={project.projectImage1.Image} />
          <LazyLoadImage
            className="mt imgFluid"
            alt={project.projectImage2.Alt}
            effect="blur"
            src={project.projectImage2.Image} />
          <LazyLoadImage
            className="mt imgFluid"
            alt={project.projectImage3.Alt}
            effect="blur"
            src={project.projectImage3.Image} />
          <LazyLoadImage
            className="mt imgFluid"
            alt={project.projectImage4.Alt}
            effect="blur"
            src={project.projectImage4.Image} />
          <div className="mtL center">
            <h3><Link className="aLink" to={project.projectNext}>Next project &#8594;</Link></h3>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Work;