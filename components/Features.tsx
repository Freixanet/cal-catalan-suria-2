import React from 'react';
import { CarrotIcon, FlameIcon, WineIcon } from './Icons';

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C3E50] font-serif">
        ¿Cansado de comida que sabe a plástico?
      </h2>
      <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl mx-auto font-medium">
        Sin congelados. Sin atajos. Solo cocina de mercado, patatas peladas a mano y guisos que hacen <em>chup-chup</em> desde el amanecer.
      </p>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12 text-left md:text-center">
        {/* Feature 1 */}
        <div className="flex items-center md:block gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 md:bg-transparent md:border-0 md:p-0">
          <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex shrink-0 items-center justify-center text-[#C0392B] md:mx-auto mb-0 md:mb-4">
            <CarrotIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg font-serif text-[#2C3E50]">Mercado Local</h3>
            <p className="text-sm text-gray-500">Todo comprado en Súria.</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center md:block gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 md:bg-transparent md:border-0 md:p-0">
          <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex shrink-0 items-center justify-center text-[#C0392B] md:mx-auto mb-0 md:mb-4">
            <FlameIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg font-serif text-[#2C3E50]">Cocina Lenta</h3>
            <p className="text-sm text-gray-500">Sin prisas, solo cariño.</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center md:block gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 md:bg-transparent md:border-0 md:p-0">
          <div className="bg-orange-100 p-3 rounded-full w-14 h-14 flex shrink-0 items-center justify-center text-[#C0392B] md:mx-auto mb-0 md:mb-4">
            <WineIcon className="w-7 h-7" />
          </div>
          <div>
            <h3 className="font-bold text-lg font-serif text-[#2C3E50]">Bodega Auténtica</h3>
            <p className="text-sm text-gray-500">Vinos de la tierra.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;