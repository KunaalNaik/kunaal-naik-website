
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Offerings from '@/components/Offerings';
import MasterclassPromo from '@/components/MasterclassPromo';
import ContactLinks from '@/components/ContactLinks';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Mission />
        <Offerings />
        <MasterclassPromo />
        <ContactLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
