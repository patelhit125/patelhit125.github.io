import React from 'react';
import Fade from 'react-reveal/Fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import img1 from '../assets/img1.jpg';

const About = (props) => {

  const { aboutRef } = props;

  return (
      <div className="container">
        <div ref={aboutRef}>
          <div className="bebasHuge mtL">
            About
          </div>
          <div className="newDiv left">
            <div className="row mRow">
              <div className="c2 pr">
                <Fade left>
                  <div>
                    A Full-stack beginner developer with IT engineering background, specializing with Node.js, JavaScript, SQL, Kotlin, Java, Python languages and related React, Next, Laravel, Android frameworks and platforms. I am currently learning UX/UI and Unity. I keep things simple by crafting clean and meaningful experience for users.
                    You can find me anywhere just type with <a className="aLink" href="https://www.google.com/search?q=patelhit125" target="_blank" rel="noreferrer">@patelhit125</a> username in searchbar.
                  </div>
                  <div className="mt">
                    <a className="aLink" href="https://github.com/patelhit125/patelhit125/raw/main/Hit%20Patel.pdf" target="_blank" rel="noreferrer">Download resume &#8594;</a>
                  </div>
                </Fade>
              </div>
              <div className="c2">
                <Fade right>
                  <LazyLoadImage
                    className="imgFluid"
                    alt="Hit Patel."
                    effect="blur"
                    src={img1} />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;