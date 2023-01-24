import React from 'react';
import css from './AboutUs.module.css';
import aboutusbg from '../../images/aboutusbg.png';
import aboutusbg2 from '../../images/aboutusbg2.png';
import aboutus3 from '../../images/aboutus3.png';
import aboutus4 from '../../images/aboutus4.png';
import aboutus5 from '../../images/aboutus5.png';
import aboutus6 from '../../images/aboutus6.png';
import aboutus7 from '../../images/aboutus7.png';
import aboutus8 from '../../images/aboutus8.png';
import aboutus9 from '../../images/aboutus9.png';

const AboutUs = () => {
  return (
    <>
      <div id="about" className={css.container}>
        <div
          style={{
            backgroundImage: `url(${aboutusbg})`,
            backgroundSize: 'cover',
          }}
          className={css.bgImg}
        >
          <div className={css.containt}>
            <h1 className={css.heading}>IN CYBERSECURITY</h1>
            <div className={css.left}>
              <img src={aboutus3} alt="" />
              <span>traditional endpoint protection</span>
            </div>
            <div className={css.right}>
              <img src={aboutus4} alt="" />
              <span>identity security</span>
            </div>
            <div className={css.left}>
              <img src={aboutus5} alt="" />
              <span>transaction and communication infrastructure security</span>
            </div>
            <div className={css.right}>
              <img src={aboutus6} alt="" />
              <span>preventing data manipulation</span>
            </div>
            <div className={css.left}>
              <img src={aboutus7} alt="" />
              <span>preventing distributed denial of service attacks</span>
            </div>
            <div className={css.right}>
              <img src={aboutus8} alt="" />
              <span>security from malicious insiders</span>
            </div>
            <div className={css.left}>
              <img src={aboutus9} alt="" />
              <span>protection from compromised nodes or server failure</span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${aboutusbg2})`,
            backgroundSize: 'cover',
          }}
          className={css.bgImg_2}
        >
          <div className={css.containt_2}>
            <div className={css.leftContaint1}>
              <span>
                Blockchain is a powerful innovation that brings positive changes
                to various industries, including finance, supply chain, food,
                insurance and many more.
              </span>
            </div>
            <div className={css.rightContaint}>
              <span>
                Entrepreneurs, policymakers and investors are increasingly
                adopting Blockchain technology to transform the way businesses
                communicate with other companies, regulators and customers.
              </span>
            </div>
            <div className={css.leftContaint2}>
              <span>
                This insight article intends to explore the role of Blockchain
                as an effective solution for addressing critical cyberthreats
                with faster detection, mitigation and response capabilities.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
