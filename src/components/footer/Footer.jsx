import React from 'react';
import css from './Footer.module.css';
import logo2 from '../../images/logo2.png';
import c7wfooter from '../../images/c7wfooter.jpg';

const Footer = () => {
  return (
    <>
      <div id="contact" className={css.container}>
        <div
          style={{
            backgroundImage: `url(${c7wfooter})`,
            backgroundSize: 'cover',
          }}
          className={css.bgImg}
        >
          <div className={css.first}>
            <img src={logo2} alt="" />
            <p>
              We transform businesses with powerful and adaptable digital
              solutions that satisfy the needs of today and unlock the
              opportunities of tomorrow.
            </p>
          </div>
          <div className={css.second}>
            <h4>COMPANY</h4>
            <div className={css.list1}>
              <li>About Us</li>
              <li>Why Us</li>
              <li>Clints</li>
              <li>Solutions</li>
            </div>
          </div>
          <div className={css.third}>
            <h4>QUICK LINKS</h4>
            <div className={css.list2}>
              <li>Service</li>
              <li>Contact</li>
              <li>Feature</li>
            </div>
          </div>
          <div className={css.fourth}>
            <h4>CONTACT US</h4>
            <div className={css.address}>
              <p>Address: </p>
              <p>
                WeWork Berger Delhi One, Floor 19, C-001/A2, Sector 16B, Noida,
                Uttar Pradesh 201301
              </p>
            </div>
            <div className={css.email}>
              <p>Email: </p>
              <p>cyber7work@cyber7work.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.lastLine}>
        <p>
          Copyright © 2022 <span className={css.underline}>Cyber7work.</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
