import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Navbar = (props) => {

  const cookies = new Cookies();
  let storedDarkMode = false;
  if (cookies.get('DARK_MODE') === 'true') {
    storedDarkMode = true;
  }
  const [isDarkMode, setDarkMode] = React.useState(storedDarkMode);
  const { aboutRef, workRef, contactRef } = props;
  const scrollAbout = () => aboutRef.current.scrollIntoView();
  const scrollWork = () => workRef.current.scrollIntoView();
  const scrollContact = () => contactRef.current.scrollIntoView();

  const darkMode = () => {
    setDarkMode(!isDarkMode);
    cookies.set('DARK_MODE', !isDarkMode);
    document.body.classList.toggle('dark');
  }

  return (
    <nav className="container">
      <Link className="navBrand" to='/'>Hit.</Link>
      <div className="navMenu">
        <Link className="navLink" to='/' onClick={scrollAbout}>About</Link>
        <Link className="navLink" to='/' onClick={scrollWork}>Work</Link>
        <Link className="navLink" to='/' onClick={scrollContact}>Contact</Link>
        <button onClick={darkMode} tabIndex={0} className="darkMode"></button>
      </div>
    </nav>
  );
};

export default Navbar;
