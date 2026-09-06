import React from 'react';
import { Star } from 'lucide-react';
import { SPECIALISTS } from '../data/content';

export const Team: React.FC = () => {
  return (
    <section id="equipo" className="pt-12 sm:pt-16 lg:pt-20 pb-6 sm:pb-10 lg:pb-16 bg-lumux-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-3">
              • Especialistas
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-white max-w-xl">
              Nuestro equipo con <span className="text-lumux-red">experiencia certificada</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base max-w-md">
            Al confiar tu auto a nuestros especialistas, podés estar seguro de que el trabajo será realizado con precisión quirúrgica y los más altos estándares internacionales.
          </p>
        </div>

        {/* Specialists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALISTS.map((specialist) => (
            <div
              key={specialist.name}
              className="group rounded-2xl bg-lumux-card/70 border border-lumux-border hover:border-lumux-red/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Photo */}
              <div className="relative aspect-[4/4.5] overflow-hidden">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lumux-card via-transparent to-transparent" />
                
                {/* Rating badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-medium text-white">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span>{specialist.rating}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-medium font-heading text-white group-hover:text-lumux-red transition-colors mb-1">
                  {specialist.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 font-medium">
                  {specialist.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
