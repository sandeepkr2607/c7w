import React from 'react';
import css from './WhyUs.module.css';
import whyusBtn from '../../images/whyusBtn.png';
import { Link } from 'react-scroll';

const WhyUs = () => {
  return (
    <>
      <div id="whyUs" className={css.container}>
        <div className={css.containt1}>
          <h3 className={css.whyUs}>WHY CHOOSE US</h3>
          <h1 className={css.Heading}>
            EVERY PART OF YOUR{' '}
            <span className={css.headingColor}>IT ECOSYSTEM</span>
          </h1>
          <h1 className={css.Heading2}>TAKEN CARE OF.</h1>
          <p className={css.whyUsText}>
            Comprehensive Care Of Your Cloud Or On-Premises Infrastructure And
            Applications:
          </p>
          <div className={css.whyUsBtns}>
            <li>Consulting</li>
            <li>Security</li>
            <li>Implementation</li>
          </div>
          <div className={css.whyUsBtns2}>
            <li>Management & Support</li>
            <li>Help Desk Services</li>
          </div>
        </div>
        <div className={css.containt2}>
          <h3 className={css.title}>CONCLUSION</h3>
          <p className={css.discription}>
            One important point to accept is that cybercrime is ever-evolving
            and lucrative. Thus, no cyber defence system can be regarded as 100
            % secure. A cybersecurity system that is deemed most effective today
            may not retain its efficacy tomorrow. But at the present moment,
            when every organisation is looking forward to adopting a
            cybersecurity solution that is Secure, Vigilant and Resilient, then
            Blockchain has a lot to offer. Blockchain-powered cybersecurity
            controls and standards can build stronger technical infrastructure
            to protect organisations from cyber attacks. This may also require
            combining Blockchain with other deep technologies like AI(artificial
            intelligence), IoT and ML. If you want to integrate Blockchain
            technology to enhance and improve the cybersecurity of your project,
            contact our Blockchain experts. Schedule a consultation call and
            discuss your requirements
          </p>
          <div className={css.btn3}>
            <Link to="contact" smooth={true} duration={500}>
              <img src={whyusBtn} alt="" className={css.btn3Img} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
