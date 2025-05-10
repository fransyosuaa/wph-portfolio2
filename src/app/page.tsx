'use client';

import Container1 from './home/partials/container1';
import Container2 from './home/partials/container2';
import Hero from './home/partials/hero';
import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container1 />
      <Container2 />
    </div>
  );
};

export default Home;
