import React, { useState } from 'react';
import { ArrowDown, Check, Shield, Star, MessageSquare } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { GOALS, PACKS, WHATSAPP_PHONE } from '../data/content';
import LightPillar from './LightPillar';

const cardVariants: Variants = {
  offscreen: {
    y: 180,
    opacity: 0,
  },
  onscreen: (i: number) => ({
    y: 0,
    rotate: i === 0 ? -2.5 : i === 2 ? 2.5 : 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.35,
      duration: 0.85,
      delay: i * 0.12,
    },
  }),
};

const getSplashGradient = (scheme: 'bronce' | 'oro' | 'diamante') => {
  if (scheme === 'bronce') {
    // Tono bronce metalizado vibrante
    return 'linear-gradient(306deg, #4d210b 0%, #9c4819 50%, #cf6f34 100%)';
  }
  if (scheme === 'oro') {
    // Tono oro metalizado elegante
    return 'linear-gradient(306deg, #473403 0%, #b8860b 50%, #f0b72b 100%)';
  }
  // Tono gris/plata diamante
  return 'linear-gradient(306deg, #232a35 0%, #5a687d 50%, #a4b3c7 100%)';
};

export const Services: React.FC = () => {
  const [highlightedPack, setHighlightedPack] = useState<string | null>(null);

  const scrollToPack = (packColor: string) => {
    const targetId = `pack-${packColor}`;
    const el = document.getElementById(targetId);
    if (el) {
      const navHeight = 90;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });

      setHighlightedPack(packColor);
      setTimeout(() => {
        setHighlightedPack(null);
      }, 2000);
    }
  };

  return (
    <section id="servicios" className="py-24 bg-lumux-bg relative overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BLOCK 1: Goals with LightPillar Background */}
        <div className="relative mb-24">
          <div
            className="absolute -top-12 -bottom-12 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden z-0"
            style={{ width: '100%', height: 'calc(100% + 80px)', minHeight: '650px', maxWidth: '100vw' }}
          >
            <LightPillar
              topColor="#f9002b"
              bottomColor="#ff7979"
              intensity={0.8}
              rotationSpeed={0.25}
              glowAmount={0.003}
              pillarWidth={3.4}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={25}
              interactive={false}
              mixBlendMode="screen"
              quality="medium"
            />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="mb-12 max-w-4xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-lumux-red mb-3 leading-tight">
                ¿Qué querés lograr <span className="text-white">con tu auto?</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Te recomendamos el servicio ideal según el objetivo que busques.
              </p>
            </div>

            {/* Goal Cards List (2-column layout with AOS fade-right & fade-left by line) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 overflow-visible">
              {GOALS.map((goal, i) => {
                const isDiamante = goal.packColor === 'diamante';
                const isOro = goal.packColor === 'oro';
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={goal.id}
                    data-aos={isLeft ? 'fade-right' : 'fade-left'}
                    initial={{ opacity: 0, x: isLeft ? -35 : 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '0px 0px -40px 0px' }}
                    transition={{
                      duration: 0.55,
                      ease: [0.16, 1, 0.3, 1],
                      delay: isLeft ? 0 : 0.08,
                    }}
                    style={{ willChange: 'transform, opacity' }}
                    className="h-full flex flex-col"
                  >
                    <div
                      className="relative p-5 sm:p-6 rounded-2xl bg-[#161616]/90 backdrop-blur-sm border border-[#262626] hover:border-lumux-red/40 hover:shadow-[0_0_25px_rgba(225,29,42,0.15)] flex items-center justify-between gap-4 shadow-md cursor-pointer w-full h-full min-h-[142px] sm:min-h-[148px] transition-all duration-300 group overflow-hidden"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToPack(goal.packColor);
                      }}
                    >
                      {/* Left colored accent strip */}
                      <div
                        className={`absolute left-0 top-0 bottom-0 w-1 transition-colors ${
                          isDiamante
                            ? 'bg-lumux-red'
                            : isOro
                            ? 'bg-amber-500'
                            : 'bg-orange-600'
                        }`}
                      />

                      {/* Number in Red */}
                      <div className="font-heading font-semibold text-2xl sm:text-3xl text-lumux-red pl-2 w-9 sm:w-10 flex-shrink-0">
                        {goal.number}
                      </div>

                      {/* Body */}
                      <div className="flex-1 min-w-0 pr-2 flex flex-col justify-center">
                        <h3 className="text-sm sm:text-base font-semibold uppercase tracking-wide text-white group-hover:text-white transition-colors">
                          {goal.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed line-clamp-2 min-h-[38px] sm:min-h-[42px] flex items-center">
                          {goal.description}
                        </p>
                        <div className="mt-2.5 flex items-center gap-2">
                          <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-gray-400">
                            Pack recomendado:
                          </span>
                          <span
                            className={`text-[10px] sm:text-xs font-medium uppercase px-2 py-0.5 rounded-md ${
                              isDiamante
                                ? 'bg-red-500/15 text-lumux-red border border-red-500/30'
                                : isOro
                                ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                                : 'bg-orange-800/20 text-orange-400 border border-orange-700/30'
                            }`}
                          >
                            {goal.pack.replace('Pack ', '')}
                          </span>
                        </div>
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-10 h-10 rounded-full border border-lumux-border group-hover:border-lumux-red/50 group-hover:text-lumux-red flex items-center justify-center text-gray-400 flex-shrink-0 shadow-sm transition-colors">
                        <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BLOCK 2: Available Packs Section with LightPillar Background */}
        <div className="relative">
          {/* LightPillar Background Effect extending all the way down past cards */}
          <div
            className="absolute -top-16 -bottom-16 left-1/2 -translate-x-1/2 pointer-events-none overflow-hidden z-0"
            style={{ width: '100%', height: 'calc(100% + 140px)', minHeight: '1320px', maxWidth: '100vw' }}
          >
            <LightPillar
              topColor="#f9002b"
              bottomColor="#ff7979"
              intensity={0.85}
              rotationSpeed={0.3}
              glowAmount={0.003}
              pillarWidth={3.2}
              pillarHeight={0.4}
              noiseIntensity={0.5}
              pillarRotation={-25}
              interactive={false}
              mixBlendMode="screen"
              quality="medium"
            />
          </div>

          <div className="relative z-10">
            {/* BLOCK 2: Available Packs Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-3">
                • Packs Disponibles
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-white mb-4">
                Elegí tu nivel de <span className="text-lumux-red">detailing</span>
              </h2>
              <p className="text-white text-sm sm:text-base">
                Desde mantenimiento premium para uso diario hasta corrección avanzada y protección cerámica por años.
              </p>
            </div>

            {/* Packs Grid with Motion Scroll-Triggered Animation & Splash Backdrop */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch mb-12">
              {PACKS.map((pack, i) => {
                const isFeatured = pack.featured;
                const isDiamante = pack.colorScheme === 'diamante';
                const isOro = pack.colorScheme === 'oro';
                const isHighlighted = highlightedPack === pack.colorScheme;
                const splashBackground = getSplashGradient(pack.colorScheme);

                return (
                  <motion.div
                    key={pack.name}
                    id={`pack-${pack.colorScheme}`}
                    className={`relative flex flex-col justify-center items-center py-4 scroll-mt-28 transition-transform duration-500 ${
                      isHighlighted ? 'scale-[1.03]' : ''
                    }`}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.25 }}
                  >
                    {/* Angled Splash Backdrop */}
                    <div
                      className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                        isHighlighted ? 'opacity-100' : ''
                      }`}
                      style={{
                        background: splashBackground,
                        clipPath: 'polygon(0% 48%, 100% 32%, 100% 100%, 0% 100%)',
                        opacity: isHighlighted ? 1 : 0.95,
                      }}
                    />

                    {/* Animated Pack Card */}
                    <motion.div
                      custom={i}
                      variants={cardVariants}
                      whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                      className={`relative z-10 w-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 shadow-xl ${
                        isHighlighted
                          ? 'ring-2 ring-lumux-red shadow-[0_0_35px_rgba(225,29,42,0.45)] ' +
                            (isDiamante ? 'bg-gradient-to-b from-[#2e3440] to-[#20232c]' : 'bg-[#1e1e1e]')
                          : isDiamante
                          ? 'bg-gradient-to-b from-[#2a2f3b] via-[#222631] to-[#1c1f27] border border-slate-400/50 shadow-2xl'
                          : isOro
                          ? 'bg-[#161616] border border-[#262626] hover:border-amber-500/40'
                          : 'bg-[#161616] border border-[#262626] hover:border-orange-500/40'
                      }`}
                      style={{ minHeight: '520px', transformOrigin: '10% 60%' }}
                    >
                      {/* Featured Badge */}
                      {isFeatured && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-lumux-red text-white text-xs font-medium tracking-wide uppercase shadow-sm flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-white" />
                          El más elegido
                        </div>
                      )}

                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">
                            {pack.level}
                          </span>
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center p-1 overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
                              isDiamante
                                ? 'bg-slate-800/60 border border-slate-400/40 shadow-inner'
                                : isOro
                                ? 'bg-amber-950/40 border border-amber-500/30'
                                : 'bg-orange-950/40 border border-orange-500/30'
                            }`}
                          >
                            <img
                              src={
                                isDiamante
                                  ? '/assets/images/pack-diamante.png'
                                  : isOro
                                  ? '/assets/images/pack-oro.png'
                                  : '/assets/images/pack-bronce.png'
                              }
                              alt={pack.name}
                              className="w-full h-full object-contain mix-blend-screen"
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <h3 className="text-2xl font-medium font-heading text-white mb-2">
                          {pack.name}
                        </h3>
                        <p className="text-sm text-gray-400 mb-6">
                          {pack.tagline}
                        </p>

                        <div className="w-full h-px bg-lumux-border/60 mb-6" />

                        <ul className="space-y-3.5 mb-8">
                          {pack.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                              <Check className="w-4 h-4 text-lumux-red flex-shrink-0 mt-0.5" />
                              <span>
                                {feature.text}{' '}
                                {feature.note && (
                                  <span className="text-xs text-lumux-red font-medium">
                                    ({feature.note})
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                          `Hola! Me interesa consultar el precio y disponibilidad para el ${pack.name}.`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full py-3.5 rounded-xl font-medium text-center text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                          isFeatured
                            ? 'bg-lumux-red hover:bg-lumux-redHover text-white shadow-sm'
                            : 'bg-[#222222] hover:bg-[#2c2c2c] border border-[#2f2f2f] hover:text-white text-gray-200 shadow-sm'
                        }`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        Consultar precio
                      </a>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Note at bottom */}
            <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm text-gray-400 pt-4">
              <Shield className="w-4 h-4 text-lumux-red flex-shrink-0" />
              <span>Precios según tamaño y estado del vehículo &bull; WhatsApp directo: 11 6426-5505</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
