import React from 'react';
import css from './CyberAttack.module.css';
import cyberattack from '../../images/cyberattack.png';
import cyber1 from '../../images/cyber1.png';
import cyber2 from '../../images/cyber2.png';
import cyber3 from '../../images/cyber3.png';
import cyber4 from '../../images/cyber4.png';
import cyber5 from '../../images/cyber5.png';
import cyberbtn from '../../images/cyberbtn.png';

const CyberAttack = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.heading}>
          <h1 className={css.headingOne}>
            common form of
            <span className={css.headingOneColor}> cyber attacks </span>
          </h1>
        </div>
        <div className={css.block}>
          <div className={css.left}>
            <div className={css.services}>
              <img src={cyber1} alt="" />
              <span>malware</span>
            </div>
            <div className={css.services}>
              <img src={cyber2} alt="" />
              <span>web application attack/ credentials stuffing </span>
            </div>
            <div className={css.services}>
              <img src={cyber3} alt="" />
              <span>DDOS attacks</span>
            </div>
            <div className={css.services}>
              <img src={cyber4} alt="" />
              <span>man-in-the-middle attacks</span>
            </div>
            <div className={css.services}>
              <img src={cyber5} alt="" />
              <span>ransomware attacks</span>
            </div>
          </div>
          <div className={css.right}>
            <img src={cyberattack} alt="" />
          </div>
        </div>
      </div>
      <div className={css.bottom}>
        <h2 className={css.heading2}>$6,000 billion</h2>
        <p className={css.discription}>
          Estimated cost of cyberattacks to businesses in 2021*
        </p>
        <div className={css.forMore}>
          <span>For more hacker news</span>
          <a
            href="https://www.forbes.com/crypto-blockchain/?sh=66586ba92b6e"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={css.forMoreImg} src={cyberbtn} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CyberAttack;
