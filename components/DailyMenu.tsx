import React from 'react';
import { UtensilsIcon, ShieldIcon } from './Icons';

const DailyMenu: React.FC = () => {
  return (
    <section id="menu-diario" className="py-12 bg-[#2C3E50] text-white relative overflow-hidden">
      {/* Decorative Background Icon */}
      <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3 pointer-events-none">
        <UtensilsIcon className="w-[300px] h-[300px]" />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">¿Trabajas cerca? Ven al Menú Diario</h2>
        <p className="text-gray-300 mb-8 text-lg">Primero + Segundo + Postre Casero + Bebida + Café.</p>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block border border-white/20">
          <span className="block text-sm text-gray-400 line-through mb-1">Valorado en 18,00€</span>
          <span className="block text-4xl font-black text-[#F1C40F]">12,50€</span>
          <span className="block text-xs text-gray-300 mt-2">De Lunes a Viernes</span>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-sm opacity-80">
          <ShieldIcon className="w-4 h-4" />
          <span>Si te quedas con hambre, te invitamos al postre.</span>
        </div>
      </div>
    </section>
  );
};

export default DailyMenu;