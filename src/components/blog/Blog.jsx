import React from 'react';
import css from './Blog.module.css';
import blog1 from '../../images/blog1.png';
import blog2 from '../../images/blog2.png';
import blog3 from '../../images/blog3.png';
import solutions from '../../images/solutions.png';
import solutionbtn from '../../images/solutionbtn.png';

const Blog = () => {
  return (
    <>
      <div id="blog" className={css.container}>
        <div className={css.top}>
          <h1 className={css.heading}>
            What to <span className={css.colors}> Expect</span>
          </h1>
          <div className={css.cards}>
            <div className={css.card}>
              <div className={css.cardImg}>
                <img src={blog1} alt="" />
              </div>
              <h3>A robust action plan</h3>
              <p>
                Our Cybersecurity Maturity Assessment spans 70+ critical
                capabilities and defines the specific activities needed to
                develop an effective cybersecurity strategy that meets current
                and future needs
              </p>
            </div>
            <div className={css.card}>
              <div className={css.cardImg}>
                <img src={blog2} alt="" />
              </div>
              <h3>A fast start</h3>
              <p>
                Our X-ray survey provides an essential quick take on what you do
                well and where you lag, based on our proprietary industry
                benchmarks
              </p>
            </div>
            <div className={css.card}>
              <div className={css.cardImg}>
                <img src={blog3} alt="" />
              </div>
              <h3>A tailored solution</h3>
              <p>
                From targeted investment to a full transformation, we help you
                determine precisely what actions are required to improve your
                governance, processes, technology and organisational
                effectiveness
              </p>
            </div>
          </div>
        </div>
        <div className={css.bottom}>
          <div className={css.left}>
            <h2>Ready To Get Free Consultations For Any </h2>
            <h2>Kind Of Solutions?</h2>
            <a
              href="https://criteriaforsuccess.com/18-awesome-technology-quotes-to-inspire-motivate/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={css.leftImg} src={solutionbtn} alt="" />
            </a>
          </div>
          <div className={css.right}>
            <img src={solutions} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
