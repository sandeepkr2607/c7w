import React from 'react';
import css from './Services.module.css';
import services from '../../images/services.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';
import service4 from '../../images/service4.png';
import service5 from '../../images/service5.png';
import service6 from '../../images/service6.png';
import service7 from '../../images/service7.png';

const Services = () => {
  return (
    <>
      <div id="services" className={css.container}>
        <div className={css.heading}>
          <h1 className={css.headingOne}>
            USE CASES OF
            <span className={css.headingOneColor}> BLOCKCHAIN </span> FOR
          </h1>
          <h1 className={css.headingTwo}>CYBERSECURITY</h1>
        </div>
        <div className={css.blocks}>
          <div className={css.right}>
            <img src={services} alt="" />
          </div>
          <div className={css.left}>
            <div className={css.services}>
              <img src={service2} alt="" />
              <span>IOT security</span>
            </div>
            <div className={css.services}>
              <img src={service3} alt="" />
              <span>provenance of software </span>
            </div>
            <div className={css.services}>
              <img src={service4} alt="" />
              <span>secure DNS and DDOS</span>
            </div>
            <div className={css.services}>
              <img src={service5} alt="" />
              <span>secure private messages</span>
            </div>
            <div className={css.services}>
              <img src={service6} alt="" />
              <span>reduced human safety adversity caused by cyberattacks</span>
            </div>
            <div className={css.services}>
              <img src={service7} alt="" />
              <span>verification of cyber-physical infrastructures</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
