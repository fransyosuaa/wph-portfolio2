'use client';

import BriefingContainer from './home/partials/briefing-container';
import CareerJourneyContainer from './home/partials/career-journey-container';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';
import TestimonyContainer from './home/partials/testimony-container';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BriefingContainer />
      <CareerJourneyContainer />
      <TestimonyContainer />
      <Footer />
    </div>
  );
};

export default Home;
