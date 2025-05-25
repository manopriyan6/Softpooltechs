import React from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/About';
import ServicesSection from '../components/home/Services';
import InstagramPost from '../components/social/InstagramPost';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <div className="max-w-full overflow-auto p-8">
        <InstagramPost />
      </div>
    </>
  );
};

export default HomePage;