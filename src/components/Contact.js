import React from 'react';
import Fade from 'react-reveal/Fade'

const Contact = (props) => {

  const { contactRef } = props;

  return (
    <div className="container">
      <div className="contact" ref={contactRef}>
        <div className="bebasHuge mtL">
          Contact
        </div>
        <Fade bottom>
          <div className="newDiv">
            <h1>Get In Touch With Me</h1>
            <a className="aLink" href='mailto:patelhit125@gmail.com'>patelhit125@gmail.com &#8594;</a>
            <div className="mt socialLinks">
              <a className="aLink socialLink" href='https://dribbble.com/patelhit125' target='_blank' rel='noreferrer'>Dribbble</a>
              <a className="aLink socialLink" href='https://github.com/patelhit125' target='_blank' rel='noreferrer'>Github</a>
              <a className="aLink socialLink" href='https://www.instagram.com/patelhit125/' target='_blank' rel='noreferrer'>Instagram</a>
              <a className="aLink socialLink" href='https://www.linkedin.com/in/patelhit125/' target='_blank' rel='noreferrer'>LinkedIn</a>
              <a className="aLink socialLink" href='https://twitter.com/patelhit125' target='_blank' rel='noreferrer'>Twitter</a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;