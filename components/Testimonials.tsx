import React from 'react';
import { StarIcon } from './Icons';

const testimonials = [
  {
    text: "Las mejores bravas de Súria, sin discusión. El trato de Jordi es como estar en familia.",
    author: "Marc V."
  },
  {
    text: "Esos callos me resucitaron un domingo. Comida real, abundante y a buen precio.",
    author: "Laura G."
  },
  {
    text: "El menú de mediodía es imbatible. Calidad casera que ya cuesta encontrar.",
    author: "Pere M."
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm text-gray-400 font-bold uppercase tracking-widest mb-6">
          Lo que dicen en el pueblo
        </p>
        
        <div className="flex md:grid md:grid-cols-3 gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="min-w-[85%] md:min-w-0 bg-gray-50 p-6 rounded-xl snap-center border border-gray-100 flex flex-col"
            >
              <div className="flex text-[#F1C40F] mb-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <p className="italic text-gray-700 mb-4 flex-grow">"{item.text}"</p>
              <div className="font-bold text-sm text-[#2C3E50]">— {item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;