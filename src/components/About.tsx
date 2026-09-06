import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { Counter } from './Counter';

export const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 sm:py-20 bg-lumux-alt relative overflow-hidden border-y border-lumux-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/3.8] max-h-[420px] lg:max-h-[440px] rounded-2xl overflow-hidden border border-lumux-border shadow-xl group">
              <img
                src="/assets/images/car-front.jpg"
                alt="Auto de lujo visto de frente en estudio de detailing"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-lumux-card/90 backdrop-blur-md border border-lumux-border/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-lumux-red/15 text-lumux-red">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Equipamiento Móvil Completo</h4>
                    <p className="text-[11px] text-gray-400">Generador, agua filtrada y pulidoras profesionales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-3 w-fit">
              • Sobre Lumux
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-heading text-white leading-tight mb-4">
              Llevamos los servicios que ofrecemos al{' '}
              <span className="text-lumux-red">
                siguiente nivel.
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Cuando comenzamos Lumux Detailing, definimos nuestras prioridades de inmediato:
              profesionalismo extremo y un enfoque individual tanto para el vehículo como para su dueño.
              Vamos directo a tu domicilio con todo el equipamiento necesario para transformar tu auto sin que tengas que moverlo.
            </p>

            <ul className="space-y-3 mb-10 text-sm sm:text-base text-gray-300">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-lumux-red flex-shrink-0" />
                <span>Productos importados de primera línea (Gyeon, Koch Chemie, Menzerna)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-lumux-red flex-shrink-0" />
                <span>Técnicos certificados con experiencia en vehículos de alta gama</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-lumux-red flex-shrink-0" />
                <span>Garantía escrita y asesoramiento post-servicio</span>
              </li>
            </ul>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-lumux-border">
              <div className="bg-lumux-card/60 p-4 rounded-xl border border-lumux-border/50 text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white font-heading">
                  <Counter end={500} duration={1800} />+
                </div>
                <div className="text-xs text-gray-400 mt-1">Autos trabajados</div>
              </div>
              <div className="bg-lumux-card/60 p-4 rounded-xl border border-lumux-border/50 text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white font-heading">
                  <Counter end={5} duration={1600} />+
                </div>
                <div className="text-xs text-gray-400 mt-1">Años de experiencia</div>
              </div>
              <div className="bg-lumux-card/60 p-4 rounded-xl border border-lumux-border/50 text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-white font-heading">
                  <Counter end={10} duration={1600} />+
                </div>
                <div className="text-xs text-gray-400 mt-1">Tipos de servicios</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
