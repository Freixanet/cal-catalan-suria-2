import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import MenuHighlights from './components/MenuHighlights';
import DailyMenu from './components/DailyMenu';
import Location from './components/Location';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import ReservationModal from './components/ReservationModal';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservation = () => setIsReservationModalOpen(true);

  return (
    <div className="min-h-screen flex flex-col pb-24 md:pb-0 bg-[#FDFBF7]">
      <Header 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        onOpenReservation={openReservation}
      />
      
      <main className="flex-grow">
        <Hero onOpenReservation={openReservation} />
        <Testimonials />
        <Features />
        <MenuHighlights />
        <DailyMenu />
        <Location />
      </main>

      <Footer />
      <StickyMobileCTA onOpenReservation={openReservation} />
      
      <ReservationModal 
        isOpen={isReservationModalOpen} 
        onClose={() => setIsReservationModalOpen(false)} 
      />
    </div>
  );
};

export default App;