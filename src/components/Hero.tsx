import React from 'react';
import { Star } from 'lucide-react';
import { Counter } from './Counter';
import FoldText from './FoldText';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image with picture element for responsive mobile/desktop */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet="/assets/images/hero-car-mobile.jpg" />
          <img
            src="/assets/images/hero-car.jpg"
            alt="Estudio de detailing con cartel neón DETAILING de fondo"
            className="w-full h-full object-cover object-center transform scale-105 opacity-60"
            loading="eager"
          />
        </picture>
        {/* Layered dark gradients for readability & lighting */}
        <div className="absolute inset-0 bg-gradient-to-t from-lumux-bg via-lumux-bg/60 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-lumux-bg/90 via-lumux-bg/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs sm:text-sm font-medium tracking-wider uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-lumux-red" />
            Servicio a Domicilio Premium
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal font-heading tracking-tight leading-[0.98] text-white mb-6">
            Aumentamos el <br />
            valor de{' '}
            <FoldText
              text="tu auto"
              splitBy="char"
              hinge="top"
              trigger="mount"
              duration={0.65}
              stagger={0.045}
              ease="power3.out"
              perspective={700}
              creaseShading={0.55}
              color="#e11d2a"
              className="text-lumux-red"
            />
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Servicio profesional de car detailing a domicilio. Cuidamos cada centímetro
            de tu vehículo, tanto exterior como interior, con productos y técnicas premium.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-lumux-red hover:bg-lumux-redHover text-white text-base font-medium transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Agendar turno
            </a>
            <a
              href="#resultados"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-lumux-card/80 hover:bg-lumux-card border border-lumux-border hover:border-white/40 text-white text-base font-normal transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Ver resultados
            </a>
          </div>

          {/* Stats Bar with Counter Animation */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-8 border-t border-lumux-border/60 max-w-lg">
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-semibold text-white font-heading">
                  <Counter end={500} duration={1800} />
                </span>
                <span className="text-lumux-red font-medium text-xl sm:text-2xl">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-normal">Autos detallados</div>
            </div>

            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-4xl font-semibold text-white font-heading">
                  <Counter end={5} duration={1600} />
                </span>
                <span className="text-lumux-red font-medium text-xl sm:text-2xl">+</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-normal">Años de experiencia</div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-4xl font-semibold text-white font-heading">
                  <Counter end={9.8} decimals={1} duration={1800} />
                </span>
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400 font-normal">Calificación promedio</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
