import React, { useState, useEffect } from 'react';
import { CloseIcon, ChevronDownIcon, PhoneIcon, WhatsappIcon, CheckCircleIcon, SpinnerIcon } from './Icons';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TIME_SLOTS = ['13:30', '14:00', '14:30', '20:30', '21:00', '21:30'];

const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    people: '4',
    date: '',
    time: '',
    name: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.time) {
        alert("Por favor selecciona una hora aproximada.");
        return;
    }
    setStatus('submitting');
    
    // Simular envío
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setTimeout(() => {
          setStatus('idle');
          setFormData({ people: '4', date: '', time: '', name: '', phone: '' });
        }, 500);
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="relative bg-white w-full md:w-full md:max-w-md rounded-t-2xl md:rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in slide-in-from-bottom-4 fade-in duration-300">
        
        {/* Header */}
        <div className="bg-[#C0392B] text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <h3 className="text-xl font-bold leading-tight font-serif">Asegura tu mesa</h3>
            <p className="text-orange-100 text-xs mt-1">Sin pagos por adelantado.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-white/80 hover:text-white p-1 hover:bg-white/10 rounded-full transition"
            aria-label="Cerrar"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto bg-[#FDFBF7]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            
            {/* Row 1: People & Date */}
            <div className="flex gap-3">
              <div className="flex-1 min-w-0">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Personas</label>
                <div className="relative">
                  <select 
                    className="w-full h-12 pl-3 pr-8 rounded-lg border-gray-300 border shadow-sm focus:border-[#C0392B] focus:ring focus:ring-[#C0392B]/20 appearance-none bg-white text-lg font-semibold text-[#2C3E50]"
                    value={formData.people}
                    onChange={(e) => setFormData({...formData, people: e.target.value})}
                    required
                  >
                    <option value="2">2 Pers</option>
                    <option value="3">3 Pers</option>
                    <option value="4">4 Pers</option>
                    <option value="5">5 Pers</option>
                    <option value="6">6 Pers</option>
                    <option value="large">+6 Pers</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <ChevronDownIcon className="w-5 h-5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Fecha</label>
                <input 
                  type="date" 
                  className="w-full min-w-0 h-12 px-3 rounded-lg border-gray-300 border shadow-sm focus:border-[#C0392B] focus:ring focus:ring-[#C0392B]/20 text-base font-semibold text-[#2C3E50] bg-white"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Row 2: Time Slots */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Hora aprox.</label>
              <div className="grid grid-cols-3 gap-2">
                {TIME_SLOTS.map(time => (
                  <button 
                    key={time}
                    type="button" 
                    onClick={() => setFormData({...formData, time})}
                    className={`
                      py-2 rounded-lg text-sm font-semibold transition border
                      ${formData.time === time 
                        ? 'bg-[#C0392B] text-white border-[#C0392B]' 
                        : 'bg-white text-gray-600 border-gray-300 hover:border-[#C0392B] hover:text-[#C0392B] hover:bg-orange-50'
                      }
                    `}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 3: Name */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Tu Nombre</label>
              <input 
                type="text" 
                placeholder="Ej: Jordi" 
                className="w-full h-12 px-4 rounded-lg border-gray-300 border shadow-sm focus:border-[#C0392B] focus:ring focus:ring-[#C0392B]/20 text-lg text-[#2C3E50] bg-white"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>

            {/* Row 4: Phone */}
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Teléfono</label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <input 
                  type="tel" 
                  placeholder="600 000 000" 
                  className="w-full h-12 pl-10 pr-4 rounded-lg border-gray-300 border shadow-sm focus:border-[#C0392B] focus:ring focus:ring-[#C0392B]/20 text-lg font-mono text-[#2C3E50] bg-white"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required 
                  pattern="[0-9]*" 
                  inputMode="numeric"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 flex items-center">
                <WhatsappIcon className="w-3 h-3 mr-1 text-green-500" /> 
                Te confirmaremos por WhatsApp.
              </p>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={status !== 'idle'}
              className={`
                w-full font-bold text-xl py-4 rounded-xl shadow-lg transform transition active:scale-95 mt-4 flex justify-center items-center gap-2
                ${status === 'success' ? 'bg-green-600 text-white' : 'bg-[#2C3E50] text-white hover:bg-gray-800'}
                ${status === 'submitting' ? 'opacity-75 cursor-wait' : ''}
              `}
            >
              {status === 'idle' && (
                <>
                  <span>Confirmar Reserva</span>
                  <CheckCircleIcon className="w-6 h-6 text-[#F1C40F]" />
                </>
              )}
              {status === 'submitting' && (
                <>
                  <SpinnerIcon className="w-5 h-5 animate-spin" />
                  <span>Enviando...</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <span>¡Reserva Solicitada!</span>
                  <CheckCircleIcon className="w-6 h-6" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationModal;