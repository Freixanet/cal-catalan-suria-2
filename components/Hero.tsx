import React from 'react';
import { StarIcon } from './Icons';

interface HeroProps {
  onOpenReservation: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative w-full md:min-h-[600px] flex flex-col md:grid md:grid-cols-2 md:items-center">
      {/* Text Content */}
      <div className="order-1 md:order-1 px-6 py-8 md:pl-12 md:pr-8 lg:pl-24">
        <span className="inline-block bg-orange-100 text-[#C0392B] px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
          📍 Carrer de Salvador Vives, Súria
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 text-gray-900 font-serif">
          Comida Casera
          <br className="hidden md:block" />
          {" "}que
          <br className="md:hidden" />
          {" "}
          <span className="text-[#C0392B] underline decoration-4 decoration-orange-200">Cura el Alma.</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Olvida cocinar hoy. Disfruta de tapas recién hechas, guisos de la abuela y el ambiente auténtico de toda la vida.
        </p>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4">
          <button 
            onClick={onOpenReservation}
            className="bg-[#C0392B] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-red-800 transition transform hover:-translate-y-1"
          >
            Reservar Mesa
          </button>
          <a href="#carta" className="border-2 border-[#2C3E50] text-[#2C3E50] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Ver la Carta
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <div className="flex text-[#F1C40F]">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4" />
            ))}
          </div>
          <span>+1.200 vecinos felices</span>
        </div>
      </div>

      {/* Image */}
      <div className="order-2 md:order-2 w-full h-64 md:h-full relative overflow-hidden min-h-[300px] md:min-h-auto">
        <img 
          src="https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="Mesa llena de tapas y vino en Cal Catalán" 
          className="w-full h-full object-cover md:absolute md:inset-0 transform hover:scale-105 transition duration-700"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent md:hidden pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;