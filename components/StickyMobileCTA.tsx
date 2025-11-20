import React from 'react';

interface StickyMobileCTAProps {
  onOpenReservation: () => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onOpenReservation }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between gap-4">
      <div className="text-xs">
        <span className="block text-gray-500">¿Tienes hambre?</span>
        <span className="font-bold text-[#2C3E50]">Reserva en 1 min</span>
      </div>
      <button 
        onClick={onOpenReservation}
        className="bg-[#C0392B] text-white px-6 py-3 rounded-lg font-bold text-lg flex-grow text-center shadow-lg active:scale-95 transition"
      >
        Reservar Mesa
      </button>
    </div>
  );
};

export default StickyMobileCTA;