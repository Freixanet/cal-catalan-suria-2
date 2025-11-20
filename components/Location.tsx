import React from 'react';
import { ClockIcon, PhoneIcon, MapPinIcon } from './Icons';

const Location: React.FC = () => {
  return (
    <section id="ubicacion" className="py-16 bg-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Map Side */}
        <div className="order-2 md:order-1">
          <div className="bg-white p-4 rounded-xl shadow-lg rotate-1 hover:rotate-0 transition duration-300">
            <div className="bg-gray-200 w-full h-64 rounded-lg flex items-center justify-center text-gray-500 relative overflow-hidden group">
                {/* Placeholder for Map */}
                <img 
                  src="https://picsum.photos/800/400" 
                  alt="Mapa ubicación Cal Catalán" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none">
                  <span className="bg-white px-3 py-1 rounded shadow text-xs font-bold text-[#2C3E50]">C/ Salvador Vives 14, Súria</span>
                </div>
            </div>
          </div>
        </div>

        {/* Info Side */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4 font-serif text-[#2C3E50]">Te guardamos sitio</h2>
          <p className="text-gray-600 mb-6">Somos un local pequeño y familiar. Los fines de semana y mediodías se llena rápido.</p>
          
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#2C3E50]">
              <MapPinIcon className="w-5 h-5 text-[#C0392B]" />
              <span>Carrer de Salvador Vives, 14, 08260 Súria</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#2C3E50]">
              <ClockIcon className="w-5 h-5 text-[#C0392B]" />
              <span>Abierto de 08:00 a 23:00</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3 text-[#2C3E50]">
              <PhoneIcon className="w-5 h-5 text-[#C0392B]" />
              <span>938 69 55 12</span>
            </div>
          </div>
          
          <p className="text-sm font-bold text-[#C0392B] animate-pulse">
            ⚠️ Quedan pocas mesas para este fin de semana
          </p>
        </div>
      </div>
    </section>
  );
};

export default Location;