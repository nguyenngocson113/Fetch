import React from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Header
        title="Silver Tier"
        description="In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards."
      />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
