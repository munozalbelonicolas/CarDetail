import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { WHATSAPP_PHONE } from '../data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-lumux-border py-16 text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/Lumux (sin fondo).png"
                alt="Lumux Detailing Logo"
                className="h-9 w-auto object-contain"
              />
              <span className="font-heading font-medium text-xl tracking-wider uppercase text-white">
                Lumux
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Servicio premium de car detailing a domicilio. Protección, brillo y restauración estética con productos y estándares de nivel internacional.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lumux.detailing?stkn=MTlqdHhnYmt0NWh2cA=="
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-lumux-card border border-lumux-border hover:border-lumux-red hover:text-lumux-red transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE}`}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-lumux-card border border-lumux-border hover:border-whatsapp hover:text-whatsapp transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-xs mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#equipo" className="hover:text-white transition-colors">Equipo</a></li>
              <li><a href="#resultados" className="hover:text-white transition-colors">Antes y Después</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-xs mb-4">
              Servicios
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#servicios" className="hover:text-white transition-colors">Coating Cerámico</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Corrección de Pintura</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Detallado Interior</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Pack Diamante</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Pack Oro</a></li>
              <li><a href="#servicios" className="hover:text-white transition-colors">Lavado Bronce</a></li>
            </ul>
          </div>

          {/* Service Details */}
          <div>
            <h4 className="text-white font-medium uppercase tracking-wider text-xs mb-4">
              Servicio a Domicilio
            </h4>
            <p className="text-gray-400 text-sm mb-3">
              Nos trasladamos a tu domicilio con todo el equipamiento profesional necesario para transformar y proteger tu vehículo sin que tengas que moverlo.
            </p>
            <p className="text-xs text-lumux-red font-medium">
              Servicio 100% a domicilio con turno programado
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lumux-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Lumux Detailing. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Detailing de alta gama a domicilio
          </p>
        </div>

        {/* Last line: Powered by */}
        <div className="mt-6 pt-4 border-t border-white/5 text-center text-xs text-gray-400">
          Powered by{' '}
          <a
            href="https://nilotech.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#fdd200] hover:underline font-medium transition-colors"
          >
            Nilo Tech
          </a>
        </div>
      </div>
    </footer>
  );
};
