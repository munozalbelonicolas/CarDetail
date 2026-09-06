import React, { useState } from 'react';
import { MapPin, Phone, Clock, Car, Send, CheckCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/content';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Pack Diamante');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // No permitir números en el nombre
    const filtered = e.target.value.replace(/\d/g, '');
    setName(filtered);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // No permitir letras ni caracteres no telefónicos
    const filtered = e.target.value.replace(/[^\d\s+\-()]/g, '');
    setPhone(filtered);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `¡Hola Lumux Detailing! Mi nombre es *${name.trim()}*.\n` +
      `Teléfono: ${phone.trim()}\n` +
      `Servicio de interés: *${service}*\n` +
      (message.trim() ? `Detalle del vehículo / consulta: ${message.trim()}` : 'Quisiera coordinar un turno para mi vehículo.');

    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`, '_blank');

    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contacto" className="py-10 sm:py-12 lg:py-14 bg-lumux-alt relative border-t border-lumux-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Info Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lumux-card border border-lumux-border text-xs font-medium uppercase tracking-wider text-lumux-red mb-2.5">
              • Contacto
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-heading text-white leading-tight mb-3">
              Siempre estamos en contacto, en el formato que te sea más cómodo.
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
              Agendá tu turno o consultá presupuesto sin compromiso. Nos acercamos hasta tu cochera o garaje con todo lo necesario para dejar tu vehículo como recién salido del concesionario.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-lumux-card/60 border border-lumux-border/60">
                <div className="p-2.5 rounded-lg bg-lumux-red/20 text-lumux-red shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Ubicación</h4>
                  <p className="text-xs sm:text-sm font-normal text-white">Buenos Aires, Argentina</p>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-lumux-card/60 hover:bg-lumux-card border border-lumux-border/60 hover:border-[#25D366]/50 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-lumux-red/20 text-lumux-red group-hover:bg-[#25D366]/20 group-hover:text-[#25D366] transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">WhatsApp</h4>
                  <p className="text-xs sm:text-sm font-normal text-white group-hover:text-[#25D366] transition-colors">+54 9 11 6426-5505</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-lumux-card/60 border border-lumux-border/60">
                <div className="p-2.5 rounded-lg bg-lumux-red/20 text-lumux-red shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Horarios</h4>
                  <p className="text-xs sm:text-sm font-normal text-white">Lun a Sáb — 8 a 19 hs</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-lumux-card/60 border border-lumux-border/60">
                <div className="p-2.5 rounded-lg bg-lumux-red/20 text-lumux-red shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">Modalidad</h4>
                  <p className="text-xs sm:text-sm font-normal text-white">100% a domicilio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-6 bg-lumux-card rounded-2xl p-5 sm:p-6 lg:p-7 border border-lumux-border shadow-2xl relative">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1">Agendar o Cotizar Turno</h3>
            <p className="text-xs text-gray-400 mb-4">
              Completá los datos y te respondemos de inmediato por WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                  Tu nombre y apellido
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Ej: Nicolás Muñoz"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-lumux-alt border border-lumux-border focus:border-lumux-red focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Ej: 11 1234 5678"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-lumux-alt border border-lumux-border focus:border-lumux-red focus:outline-none text-white text-sm transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                  Servicio de interés
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-lumux-alt border border-lumux-border focus:border-lumux-red focus:outline-none text-white text-sm transition-colors"
                >
                  <option value="Pack Diamante (Corrección + Cerámico Flash)">Pack Diamante (Corrección + Cerámico Flash)</option>
                  <option value="Pack Oro (Detallado + Abrillantado)">Pack Oro (Detallado + Abrillantado)</option>
                  <option value="Lavado Bronce (Mantenimiento Express)">Lavado Bronce (Mantenimiento Express)</option>
                  <option value="Detallado de Interiores y Cueros">Detallado de Interiores y Cueros</option>
                  <option value="Pulido de Ópticas y Vidrios">Pulido de Ópticas y Vidrios</option>
                  <option value="Instalación de PPF / Polarizado">Instalación de PPF / Polarizado</option>
                  <option value="Otro / Asesoramiento personalizado">Otro / Asesoramiento personalizado</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                  Vehículo y detalles adicionales (opcional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ej: Audi A3 color negro. Quiero remover marcas de lavado."
                  className="w-full px-3.5 py-2 rounded-lg bg-lumux-alt border border-lumux-border focus:border-lumux-red focus:outline-none text-white text-sm transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-xl font-medium text-sm tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSent
                    ? 'bg-green-600 text-white shadow-sm'
                    : 'bg-lumux-red hover:bg-lumux-redHover text-white shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99]'
                }`}
              >
                {isSent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    <span>¡Enviando a WhatsApp!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Enviar consulta por WhatsApp</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
