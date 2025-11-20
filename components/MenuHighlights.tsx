import React from 'react';
import { ArrowRightIcon } from './Icons';

const items = [
  {
    title: "Bravas del Abuelo",
    desc: "Patata agria cortada a mano, doble fritura y nuestra salsa secreta con el punto justo de picante.",
    price: "5,50€",
    img: "https://images.unsplash.com/photo-1596910547037-846b1980329f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Callos a la Catalana",
    desc: "Melosos, picantitos y con garbanzos. Pide pan extra, porque lo vas a necesitar.",
    price: "8,90€",
    img: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Torradas XXL",
    desc: "Pan de payés tostado al momento con embutidos de proximidad y escalivada.",
    price: "Desde 7,00€",
    img: "https://images.unsplash.com/photo-1626804475297-411d863b37f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const MenuHighlights: React.FC = () => {
  return (
    <section id="carta" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-[#C0392B] font-bold tracking-wider uppercase text-sm">Nuestros Clásicos</span>
          <h2 className="text-3xl font-bold mt-2 font-serif text-[#2C3E50]">Los Intocables de la Carta</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-gray-100 group transition duration-300">
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-serif text-[#2C3E50]">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                <span className="font-bold text-[#C0392B]">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-flex items-center text-[#C0392B] font-bold border-b-2 border-[#C0392B] pb-1 hover:text-red-800 hover:border-red-800 transition">
            Ver menú completo <ArrowRightIcon className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;