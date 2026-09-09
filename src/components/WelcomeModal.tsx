import React, { useState, useEffect } from 'react';
import { X, ArrowRight, MessageCircle, ChevronLeft, Check, Sparkles, Star } from 'lucide-react';
import { GOALS, PACKS, WHATSAPP_PHONE, type GoalItem } from '../data/content';
import ElectricBorder from './ElectricBorder';

export const WelcomeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<GoalItem | null>(null);

  useEffect(() => {
    // Abrir automáticamente al cargar la página tras 1 segundo de delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const handleGeneralWhatsapp = () => {
    const text = '¡Hola Lumux Detailing! Quisiera consultar por turnos y asesoramiento para mi vehículo.';
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBookPack = (goalTitle: string, packName: string) => {
    const text = `¡Hola Lumux Detailing! Mi objetivo es "${goalTitle}" y me interesa agendar el ${packName}. ¿Tienen disponibilidad?`;
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const recommendedPack = selectedGoal
    ? PACKS.find((p) => p.colorScheme === selectedGoal.packColor) || PACKS[0]
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Backdrop click listener */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

      {/* Soft ambient red studio halo behind modal */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg h-[75%] bg-lumux-red/30 rounded-full blur-[100px] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Modal Container in clean dark gray */}
      <div className="relative w-full max-w-md max-h-[92vh] flex flex-col bg-[#141416] border border-[#28282e] rounded-3xl shadow-[0_0_60px_rgba(225,29,42,0.35)] overflow-hidden z-10 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all z-20 border border-white/5"
          aria-label="Cerrar ventana emergente"
        >
          <X className="w-5 h-5" />
        </button>

        {/* VIEW 1: GOALS LIST */}
        {!selectedGoal && (
          <>
            {/* Scrollable Content */}
            <div className="overflow-y-auto px-5 pt-7 pb-4 sm:px-6 sm:pt-8 custom-scrollbar relative z-10">
              {/* Heading */}
              <div className="text-center mb-5">
                <h2 className="text-2xl sm:text-3xl font-medium font-heading text-white tracking-tight leading-tight">
                  ¿Qué querés <br />
                  <span className="text-gray-300">lograr con tu auto?</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-400 mt-1.5 font-normal">
                  Te recomendamos el servicio ideal según lo que buscas.
                </p>
              </div>

              {/* Goals List with ElectricBorder on buttons/cards */}
              <div className="space-y-3 mb-5">
                {GOALS.map((goal) => (
                  <ElectricBorder
                    key={goal.id}
                    color="#f00d0d"
                    speed={1}
                    chaos={0.12}
                    thickness={2}
                    style={{ borderRadius: 16 }}
                    className="cursor-pointer transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div
                      onClick={() => setSelectedGoal(goal)}
                      className="p-3 sm:p-3.5 rounded-[16px] bg-[#1a1a1f] hover:bg-[#202026] transition-colors flex items-center justify-between gap-3 shadow-sm"
                    >
                      {/* Number in Red */}
                      <div className="font-heading font-black italic text-2xl sm:text-3xl text-lumux-red pl-1 w-9 flex-shrink-0">
                        {goal.number}
                      </div>

                      {/* Vertical Divider */}
                      <div className="w-[1px] h-7 bg-white/10 flex-shrink-0" />

                      {/* Content */}
                      <div className="flex-1 min-w-0 pr-1">
                        <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white truncate">
                          {goal.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-gray-400 leading-tight mt-0.5 line-clamp-1">
                          {goal.description}
                        </p>
                        <div className="text-[10px] sm:text-[11px] font-medium text-gray-400 mt-1 uppercase tracking-wider">
                          PACK RECOMENDADO:{' '}
                          <span className="text-lumux-red font-bold">
                            {goal.pack.replace('Pack ', '')}
                          </span>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-8 h-8 rounded-full border border-lumux-red/40 bg-lumux-red/10 flex items-center justify-center text-lumux-red transition-colors flex-shrink-0">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </ElectricBorder>
                ))}
              </div>
            </div>

            {/* Footer CTA Button */}
            <div className="p-4 sm:p-5 bg-[#141416] border-t border-[#28282e] relative z-10">
              <button
                onClick={handleGeneralWhatsapp}
                className="w-full py-3.5 sm:py-4 px-6 rounded-full bg-lumux-red hover:bg-lumux-redHover text-white font-heading font-medium transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Consultanos por WhatsApp
                </span>
              </button>
            </div>
          </>
        )}

        {/* VIEW 2: RECOMMENDED PLAN DETAIL */}
        {selectedGoal && recommendedPack && (
          <>
            <div className="overflow-y-auto px-5 pt-6 pb-4 sm:px-7 sm:pt-7 custom-scrollbar animate-fadeIn relative z-10">
              {/* Back Button */}
              <div className="mb-4">
                <button
                  onClick={() => setSelectedGoal(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Volver a los objetivos</span>
                </button>
              </div>

              {/* Goal reference */}
              <div className="mb-4 p-3.5 rounded-2xl bg-[#1a1a1f] border border-[#28282e]">
                <span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 block">
                  Tu objetivo:
                </span>
                <span className="text-xs sm:text-sm font-bold text-white">
                  "{selectedGoal.title}"
                </span>
              </div>

              {/* Recommended Pack Card */}
              <div className="relative p-5 rounded-2xl bg-[#1a1a1f] border border-lumux-red/60 shadow-xl mb-4">
                {recommendedPack.featured && (
                  <div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-lumux-red text-white text-[10px] font-medium uppercase tracking-wider mb-2">
                    <Star className="w-3 h-3 fill-white" />
                    El más elegido
                  </div>
                )}

                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-gray-400">
                    {recommendedPack.level}
                  </span>
                  <span className="text-lumux-red">
                    <Sparkles className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-heading text-white mb-1">
                  {recommendedPack.name}
                </h3>
                <p className="text-xs text-gray-400 mb-4 font-normal">
                  {recommendedPack.tagline}
                </p>

                <div className="w-full h-px bg-white/10 mb-4" />

                <div className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">
                  ¿Qué incluye este tratamiento?
                </div>

                <ul className="space-y-2.5">
                  {recommendedPack.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                      <Check className="w-4 h-4 text-lumux-red flex-shrink-0 mt-0.5" />
                      <span>
                        {feature.text}{' '}
                        {feature.note && (
                          <span className="text-[11px] text-lumux-red font-medium">
                            ({feature.note})
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions on primary CTA button */}
            <div className="p-4 sm:p-5 bg-[#141416] border-t border-[#28282e] flex flex-col gap-2 relative z-10">
              <button
                onClick={() => handleBookPack(selectedGoal.title, recommendedPack.name)}
                className="w-full py-3.5 px-6 rounded-full bg-lumux-red hover:bg-lumux-redHover text-white font-heading font-medium transition-all duration-200 flex items-center justify-center gap-2.5 shadow-md hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">
                  Agendar este Pack por WhatsApp
                </span>
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  const el = document.getElementById('servicios');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 text-center text-xs font-semibold text-gray-400 hover:text-white transition-colors"
              >
                Ver todos los packs en la web &darr;
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
