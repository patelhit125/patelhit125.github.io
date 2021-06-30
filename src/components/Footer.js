import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="footer mtL">
      <div className="container">
        <div className="row">
          <div className="c2">
            <div className="footerLinks">
              <Link className="link" to='/about'>About</Link>
              <Link className="link" to='/work'>Work</Link>
              <Link className="link" to='/contact'>Contact</Link>
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
