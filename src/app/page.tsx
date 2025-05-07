'use client';

import Navbar from './home/partials/navbar';

const Home = () => {
  return (
    <div className='h-[200vh]'>
      <Navbar />
      <div className='bg-primary-200 mx-auto mt-50 h-50 w-50'></div>
    </div>
  );
};

export default Home;
