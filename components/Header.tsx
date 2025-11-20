import React from 'react';
import { MenuIcon, CloseIcon } from './Icons';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
  onOpenReservation: () => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen, onOpenReservation }) => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center bg-white shadow-sm sticky top-0 z-40">
      <div className="text-xl font-black text-[#C0392B] tracking-tighter font-serif">
        CAL CATALÁN
      </div>
      
      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#carta" className="text-[#2C3E50] font-bold hover:text-[#C0392B] transition">La Carta</a>
        <a href="#menu-diario" className="text-[#2C3E50] font-bold hover:text-[#C0392B] transition">Menú Diario</a>
        <a href="#ubicacion" className="text-[#2C3E50] font-bold hover:text-[#C0392B] transition">Ubicación</a>
        <button 
          onClick={onOpenReservation}
          className="bg-[#C0392B] text-white px-6 py-2 rounded-full font-bold hover:bg-red-800 transition shadow-sm"
        >
          Reservar Mesa
        </button>
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="md:hidden text-2xl text-[#2C3E50] p-1"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
      >
        {isMobileMenuOpen ? <CloseIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
      </button>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 md:hidden flex flex-col p-4 gap-4 animate-in slide-in-from-top-2 duration-200">
          <a 
            href="#carta" 
            className="text-lg font-bold text-[#2C3E50] py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            La Carta
          </a>
          <a 
            href="#menu-diario" 
            className="text-lg font-bold text-[#2C3E50] py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menú Diario
          </a>
          <a 
            href="#ubicacion" 
            className="text-lg font-bold text-[#2C3E50] py-2 border-b border-gray-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ubicación
          </a>
          <button 
            className="text-center bg-[#C0392B] text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition"
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenReservation();
            }}
          >
            Reservar Mesa
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;