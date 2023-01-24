import React from 'react';
import css from './Header.module.css';
import logo from '../../images/logo.png';
import { Link } from 'react-scroll';
import { useState } from 'react';

const Header = () => {
  const [nav, setNav] = useState(false);

  const changeHeader = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener('scroll', changeHeader);

  return (
    <>
      <div className={nav ? css.main_active : css.main}>
        <div className={css.container}>
          <div className={css.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={nav ? css.menu_active : css.menu}>
            <li>
              <Link to="home" smooth={true} duration={500}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500}>
                ABOUT US
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>
                SERVICES
              </Link>
            </li>
            <li>
              <Link to="whyUs" smooth={true} duration={500}>
                WHY US
              </Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={500}>
                FEATURES
              </Link>
            </li>
            <li>
              <Link to="blog" smooth={true} duration={500}>
                BLOG
              </Link>
            </li>
          </div>
          <div className={nav ? css.contactUs_active : css.contactUs}>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                CONTACT US
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
