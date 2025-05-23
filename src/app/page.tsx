'use client';

import { useEffect, useRef, useState } from 'react';

import AboutMeContainer from './home/partials/about-me-container';
import CareerJourneyContainer from './home/partials/career-journey-container';
import ComparisonContainer from './home/partials/comparison-container';
import ContactMeContainer from './home/partials/contact-me-container';
import FAQContainer from './home/partials/faq-container';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import ProjectListContainer from './home/partials/project-list-container';
import SkillContainer from './home/partials/skill-container';
import TestimonyContainer from './home/partials/testimony-container';
import Wave from './home/partials/wave';

const Home = () => {
  const heroBtnRef = useRef<HTMLButtonElement>(null);
  const [heroBtnRefY, setHeroBtnRefY] = useState<number>(0);

  useEffect(() => {
    const updatePosition = () => {
      if (heroBtnRef.current) {
        const rect = heroBtnRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        setHeroBtnRefY(rect.top + scrollY);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <div className='relative'>
      <Navbar />
      <Hero buttonRef={heroBtnRef} />
      <Wave heroBtnTop={heroBtnRefY} />
      <AboutMeContainer />
      <CareerJourneyContainer />
      <SkillContainer />
      <ComparisonContainer />
      <ProjectListContainer />
      <FAQContainer />
      <TestimonyContainer />
      <ContactMeContainer />
      <Footer />
    </div>
  );
};

export default Home;
