import React from 'react';
import css from './Features.module.css';
import features1 from '../../images/features1.png';
import features2 from '../../images/features2.png';
import features3 from '../../images/features3.png';
import features4 from '../../images/features4.png';
import features5 from '../../images/features5.png';
import features6 from '../../images/features6.png';
import features7 from '../../images/features7.png';

const Features = () => {
  return (
    <>
      <div id="features" className={css.container}>
        <h1 className={css.heading1}>
          <span className={css.headingColor}>blockchain</span> cyber
          <span className={css.headingColor}>threats</span> to
        </h1>
        <h1 className={css.heading2}>watch for</h1>
        <p className={css.discription}>
          despite a secure infrastructure, blockchains aren’t immune to
          cybersecurity issues.
        </p>
        <div className={css.options1}>
          <div className={css.option1}>
            <img src={features1} alt="" />
            <span>stolen keys</span>
          </div>
          <div className={css.option1}>
            <span>routing attacks</span>
            <img src={features2} alt="" />
          </div>
          <div className={css.option1}>
            <img src={features3} alt="" />
            <span>sybil attacks</span>
          </div>
          <div className={css.option1}>
            <span>51% attacks</span>
            <img src={features4} alt="" />
          </div>
        </div>
        <div className={css.options2}>
          <div className={css.option2}>
            <img src={features5} alt="" />
            <span>code exploration</span>
          </div>
          <div className={css.option2}>
            <span>computer hacking</span>
            <img src={features6} alt="" />
          </div>
          <div className={css.option2}>
            <img src={features7} alt="" />
            <span>phishing attacks</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
