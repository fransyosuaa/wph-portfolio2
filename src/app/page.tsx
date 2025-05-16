'use client';

import AboutMeContainer from './home/partials/about-me-container';
import CareerJourneyContainer from './home/partials/career-journey-container';
import ComparisonContainer from './home/partials/comparison-container';
import ContactMeContainer from './home/partials/contact-me-container';
import FAQContainer from './home/partials/faq-container';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import ProjectListContainer from './home/partials/project-list-container';
import TestimonyContainer from './home/partials/testimony-container';
import Wave from './home/partials/wave';

const Home = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Hero />
      <Wave />
      <AboutMeContainer />
      <CareerJourneyContainer />
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
