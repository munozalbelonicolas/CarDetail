import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/content';

export const BeforeAfter: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const percent = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPos(percent);
    },
    []
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) handleMove(e.clientX);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleGlobalMouseUp);
      window.addEventListener('mousemove', handleGlobalMouseMove);
    }
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging, handleMove]);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section id="resultados" className="py-24 bg-lumux-alt relative overflow-hidden border-y border-lumux-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-3">
            • Resultados Reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-white mb-4">
            Antes <span className="text-lumux-red">&</span> Después
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Deslizá el control para ver la transformación real. Porsche 911 Carrera S — Detailing Diamante completo.
          </p>
        </div>

        {/* Comparison Wrapper */}
        <div className="max-w-4xl mx-auto">
          {/* Comparison Image Container with Ambient Glow confined ONLY to the image */}
          <div className="relative">
            {/* Soft ambient red glow bloom behind ONLY the image */}
            <div
              className="absolute -inset-3 sm:-inset-6 bottom-2 bg-lumux-red/45 rounded-3xl blur-3xl pointer-events-none -z-0"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-lumux-red/40 rounded-full blur-[60px] pointer-events-none -z-0"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 h-3/5 bg-red-600/30 rounded-full blur-[40px] pointer-events-none -z-0"
              aria-hidden="true"
            />

            <div
              ref={containerRef}
              className="relative z-10 w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-lumux-border/80 shadow-[0_0_55px_rgba(225,29,42,0.4)]"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* Imagen ANTES (fondo) */}
              <img
                src="/assets/images/before-detailing.jpg"
                alt="Auto antes del detailing - pintura opaca y con marcas"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                draggable={false}
              />
              <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm border border-white/10 text-xs font-bold uppercase tracking-wider text-gray-200">
                Antes
              </span>

              {/* Imagen DESPUÉS (con clip-path o wrap width) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
              >
                <img
                  src="/assets/images/after-detailing.jpg"
                  alt="Auto después del detailing - brillo espejo impecable"
                  className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                  draggable={false}
                />
                <span className="absolute top-4 right-4 z-10 px-3 py-1 rounded-md bg-lumux-red/90 backdrop-blur-sm border border-white/20 text-xs font-bold uppercase tracking-wider text-white">
                  Después
                </span>
              </div>

              {/* Divisor vertical */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-md z-20 pointer-events-none -translate-x-1/2"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-lumux-red text-white flex items-center justify-center shadow-md border border-white/80">
                  <ChevronLeft className="w-4 h-4 -mr-1" />
                  <ChevronRight className="w-4 h-4 -ml-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Description & Action (completely outside the glow, unilluminated) */}
          <div className="relative z-10 mt-8 p-6 rounded-2xl bg-lumux-card border border-lumux-border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div>
              <h3 className="text-xl font-bold font-heading text-white mb-1.5">
                Porsche 911 Carrera S — Detailing Diamante
              </h3>
              <p className="text-sm text-gray-400 max-w-xl">
                Corrección de laca en 2 pasos eliminando el 95% de micro-rayones, coating cerámico Flash Gyeon con durabilidad extendida, detallado minucioso de interiores y sellado de llantas.
              </p>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                'Hola! Vi el antes y después del Porsche 911 y quiero consultar para hacer algo similar en mi vehículo.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-lumux-red hover:bg-lumux-redHover text-white text-sm font-semibold flex items-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              Quiero algo así
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
