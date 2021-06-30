import React from 'react';
import Fade from 'react-reveal/Fade'
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { projectData } from './ProjectData';

const Projects = (props) => {

  const { workRef } = props;

  return (
    <div className="container">
      <div ref={workRef}>
        <div className="bebasHuge mtL">
          Work
        </div>
        <div className="newDiv left">
          <div>
            <Fade bottom>
              1.<br />
              <h1>Coronaboard</h1>
              <LazyLoadImage
                className="imgFluid"
                alt={projectData.project1.projectImage1.Alt}
                effect="blur"
                src={projectData.project1.projectImage1.Image} />
              <h3>
                Dashboard for recent pendamic COVID-19 cases in India.
              </h3>
              <div>
                Web, Development, ReactJs, Material-UI
              </div>
              <div className="mt">
                <Link className="aLink" to='/work/coronaboard'>View project &#8594;</Link>
              </div>
            </Fade>
          </div>
          <div className="mtL">
            <Fade bottom>
              2.<br />
              <h1>ChAIR</h1>
              <LazyLoadImage
                className="imgFluid"
                alt={projectData.project2.projectImage1.Alt}
                effect="blur"
                src={projectData.project2.projectImage1.Image} />
              <h3>
                ChAIR is a e-commerce website for modern chairs.
              </h3>
              <div>
                Front-end, Development, Designing, JavaScript, Bootstrap
              </div>
              <div className="mt">
                <Link className="aLink" to='/work/chair'>View project &#8594;</Link>
              </div>
            </Fade>
          </div>
          <div className="mtL">
            <Fade bottom>
              3.<br />
              <h1>Samarthya</h1>
              <LazyLoadImage
                className="imgFluid"
                alt={projectData.project3.projectImage1.Alt}
                effect="blur"
                src={projectData.project3.projectImage1.Image} />
              <h3>
                Samarthya. Site developing for non-profit organization.
              </h3>
              <div>
                Web, Designing, Development, JavaScript, CSS
              </div>
              <div className="mt">
                <Link className="aLink" to='/work/samarthya'>View project &#8594;</Link>
              </div>
            </Fade>
          </div>
          <div className="mtL">
            <Fade bottom>
              4.<br />
              <h1>Enigma</h1>
              <LazyLoadImage
                className="imgFluid"
                alt={projectData.project4.projectImage1.Alt}
                effect="blur"
                src={projectData.project4.projectImage1.Image} />
              <h3>
                Enigma. An aesthically designed Question Paper Generator Application.
              </h3>
              <div>
                Android, Kotlin, Firebase, UI/UX
              </div>
              <div className="mt">
                <Link className="aLink" to='/work/enigma'>View project &#8594;</Link>
              </div>
            </Fade>
          </div>
          <div className="mtL">
            <Fade bottom>
              5.<br />
              <h1>TED-Talks</h1>
              <LazyLoadImage
                className="imgFluid"
                alt={projectData.project5.projectImage1.Alt}
                effect="blur"
                src={projectData.project5.projectImage1.Image} />
              <h3>
                Web Application for Ted-Talks event.
              </h3>
              <div>
                PHP, WebApp, Development, Server side scripting, JavaScript
              </div>
              <div className="mt">
                <Link className="aLink" to='/work/ted-talks'>View project &#8594;</Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;