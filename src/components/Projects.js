import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';
import project5 from '../assets/project5.png';

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
            1.<br />
            <h1>Coronaboard</h1>
            <LazyLoadImage
              className="imgFluid"
              alt="Hit Patel."
              effect="blur"
              src={project1} />
            <h3>
              Dashboard for recent pendamic COVID-19 cases in India.
            </h3>
            <div>
              Web, Development, ReactJs, Material-UI
            </div>
            <div className="mt">
              <Link className="aLink" to='/work/coronaboard'>View project &#8594;</Link>
            </div>
          </div>
          <div className="mtL">
            2.<br />
            <h1>ChAIR</h1>
            <LazyLoadImage
              className="imgFluid"
              alt="Hit Patel."
              effect="blur"
              src={project2} />
            <h3>
              ChAIR is a e-commerce website for modern chairs.
            </h3>
            <div>
              Front-end, Development, Designing, JavaScript, Bootstrap
            </div>
            <div className="mt">
              <Link className="aLink" to='/work/chair'>View project &#8594;</Link>
            </div>
          </div>
          <div className="mtL">
            3.<br />
            <h1>Samarthya</h1>
            <LazyLoadImage
              className="imgFluid"
              alt="Hit Patel."
              effect="blur"
              src={project3} />
            <h3>
              Samarthya. Site developing for non-profit organization.
            </h3>
            <div>
              Web, Designing, Development, JavaScript, CSS
            </div>
            <div className="mt">
              <Link className="aLink" to='/work/samarthya'>View project &#8594;</Link>
            </div>
          </div>
          <div className="mtL">
            4.<br />
            <h1>Enigma</h1>
            <LazyLoadImage
              className="imgFluid"
              alt="Hit Patel."
              effect="blur"
              src={project4} />
            <h3>
              Enigma. An aesthically designed Question Paper Generator Application.
            </h3>
            <div>
              Android, Kotlin, Firebase, UI/UX
            </div>
            <div className="mt">
              <Link className="aLink" to='/work/enigma'>View project &#8594;</Link>
            </div>
          </div>
          <div className="mtL">
            5.<br />
            <h1>TED-Talks</h1>
            <LazyLoadImage
              className="imgFluid"
              alt="Hit Patel."
              effect="blur"
              src={project5} />
            <h3>
              Web Application for Ted-Talks event.
            </h3>
            <div>
              PHP, WebApp, Development, Server side scripting, JavaScript
            </div>
            <div className="mt">
              <Link className="aLink" to='/work/ted-talks'>View project &#8594;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;