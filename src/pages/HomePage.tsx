import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/About';
import ServicesSection from '../components/home/Services';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;