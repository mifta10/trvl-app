import React from 'react';
import '../../App.css'
import Cards from '../Cards/Cards';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <Cards></Cards>
      <Footer></Footer>
    </>
  );
};

export default Home;