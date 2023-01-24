import React from 'react';
import css from './Hero.module.css';
import home from '../../images/home.png';
import button from '../../images/button.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <>
      <div id="home" className={css.container}>
        <div
          style={{ backgroundImage: `url(${home})`, backgroundSize: 'cover' }}
          className={css.backGround}
        >
          <div className={css.content}>
            <h1 className={css.title}>
              FOR <br />
              ORGANISATIONS OF <br /> ALL SIZES
            </h1>
            <p className={css.discription}>
              Our Cybersecurity Maturity Assessment helps you develop <br /> a
              strategy to fend off most attacks and recover quickly.
            </p>
            <div className={css.btn}>
              <Link to="contact" smooth={true} duration={500}>
                <img src={button} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
