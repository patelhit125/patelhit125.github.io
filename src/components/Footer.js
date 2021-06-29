import React from 'react'
import { Link } from 'react-router-dom';

const Footer = (props) => {

  const { aboutRef, workRef, contactRef } = props;
  const scrollAbout = () => aboutRef.current.scrollIntoView();
  const scrollWork = () => workRef.current.scrollIntoView();
  const scrollContact = () => contactRef.current.scrollIntoView();

  return (
    <div className="footer mtL">
      <div className="container">
        <div className="row">
          <div className="c2">
            <div className="footerLinks">
              <Link className="link" to='/' onClick={scrollAbout}>About</Link>
              <Link className="link" to='/' onClick={scrollWork}>Work</Link>
              <Link className="link" to='/' onClick={scrollContact}>Contact</Link>
            </div>
            <div className="mt">
              {new Date().getFullYear()} &copy; Hit Patel.
            </div>
          </div>
          <div className="c2">
            <div className="pointer" onClick={() => window.scrollTo(0, 0)}>Back to top &#8599;</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
