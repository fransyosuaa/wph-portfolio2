'use client';

import BriefingContainer from './home/partials/briefing-container';
import CareerJourneyContainer from './home/partials/career-journey-container';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BriefingContainer />
      <CareerJourneyContainer />
    </div>
  );
};

export default Home;
