import React from 'react';
import HomePageGraphic from '../Images/HomePageGraphic.png';
import HomePageText from '../Images/HomePageText.png';

export const Home = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center gap-20">
      <img alt="home-page-text" src={HomePageText} className="mt-40" />
      <img alt="home-page-graphic" src={HomePageGraphic} className="mt-10" />
    </div>
  );
};

export default Home;
