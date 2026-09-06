import React, { useState } from 'react';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { FAQS, WHATSAPP_PHONE } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="pt-6 sm:pt-10 lg:pt-14 pb-14 sm:pb-18 lg:pb-24 bg-lumux-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-3">
                • Preguntas Frecuentes
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-white leading-tight mb-4">
                Ya sabemos lo que <br />
                <span className="text-lumux-red">querés preguntar.</span>
              </h2>
              <p className="text-gray-400 text-sm sm:text-base mb-8">
                Despejamos las dudas más comunes sobre técnicas, tiempos, protección y nuestro servicio a domicilio.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-lumux-card border border-lumux-border">
              <h4 className="text-base font-medium text-white mb-2">¿Tenés una consulta puntual?</h4>
              <p className="text-xs sm:text-sm text-gray-400 mb-4">
                Escribinos por WhatsApp y te asesoramos al instante sobre el mejor tratamiento para tu vehículo.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                  'Hola! Tengo una consulta sobre los servicios de Lumux Detailing.'
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-lumux-red hover:text-lumux-redHover uppercase tracking-wider transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Hablar con un asesor &rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-lumux-card border-lumux-red/50 shadow-lg'
                      : 'bg-lumux-card/60 border-lumux-border hover:border-gray-600'
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-medium text-base sm:text-lg text-white group"
                  >
                    <span className="group-hover:text-lumux-red transition-colors">
                      {faq.question}
                    </span>
                    <span
                      className={`p-2 rounded-full transition-transform duration-300 ${
                        isOpen
                          ? 'bg-lumux-red text-white rotate-180'
                          : 'bg-lumux-alt text-gray-400 group-hover:text-white'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-lumux-border/40 pt-4 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
