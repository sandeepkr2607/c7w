import React from 'react';
import Header from '../components/header/Header';
import AboutUs from '../components/aboutUs/AboutUs';
import Services from '../components/services/Services';
import WhyUs from '../components/whyUs/WhyUs';
import Features from '../components/features/Features';
import Blog from '../components/blog/Blog';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import CyberAttack from '../components/cyberAttack/CyberAttack';
import OurTeam from '../components/ourTeam/OurTeam';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <WhyUs />
      <Features />
      <CyberAttack />
      <Blog />
      <OurTeam />
      <Footer />
    </>
  );
};

export default Home;
