import Section from '../Section';
import { Quote } from 'lucide-react';

const testimonios = [
  {
    empresa: 'Test My Bike',
    nombre: 'Pablo Meson',
    cargo: 'CEO',
    texto: 'IMGENIA nos ha permitido escalar el soporte técnico sin perder calidad. Nuestros clientes reciben respuestas inmediatas y documentadas, y nuestro equipo puede centrarse en lo que realmente aporta valor.',
    video: null as string | null,
  },
  {
    empresa: 'AJP',
    nombre: 'Jose María Sánchez',
    cargo: 'Director de Operaciones',
    texto: 'La suite de seguridad y auditoría de agentes IA que implantamos con IMGENIA es ya un pilar en nuestros proyectos con utilities. Trazabilidad total y tranquilidad para nosotros y para nuestros clientes.',
    video: null as string | null,
  },
  {
    empresa: 'Sector logístico',
    nombre: 'David Ruiz',
    cargo: 'Director de Sistemas',
    texto: 'Hemos reducido drásticamente el tiempo de explotación y las horas de trabajo manual gracias a la solución de IA. La integración con nuestros sistemas ha superado nuestras expectativas.',
    video: null as string | null,
  },
  {
    empresa: 'Tecnología sanitaria / equipamiento',
    nombre: 'Laura Vega',
    cargo: 'Directora de Operaciones',
    texto: 'La gestión de procesos que antes era un cuello de botella pasó a ser automatizada y escalable. IMGENIA entendió desde el primer día las necesidades de nuestro sector.',
    video: null as string | null,
  },
];

export default function Agradecimientos() {
  return (
    <Section
      id="agradecimientos"
      title="Agradecimientos"
      subtitle="Lo que dicen instituciones y clientes sobre su experiencia con IMGENIA."
      background="gray"
    >
      <div className="space-y-10 sm:space-y-14 md:space-y-16">
        {/* Vídeo: Ayuntamiento de Colmenar Viejo */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="p-4 sm:p-6 md:p-8 border-b border-gray-100">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
              Ayuntamiento de Colmenar Viejo
            </h3>
            <p className="text-imgenia-blue font-semibold text-xs sm:text-sm leading-snug">
              Susana Jiménez Aibar — Tercera Teniente de Alcalde, Concejal de Economía, Desarrollo Empresarial y Empleo
            </p>
          </div>
          <div className="aspect-video w-full max-w-3xl mx-auto p-3 sm:p-4 md:p-6 bg-gray-50">
            <iframe
              src="https://player.vimeo.com/video/1171850587?badge=0&autopause=0&player_id=0&app_id=58479"
              className="w-full h-full rounded-xl"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="IMGENIA - Ayuntamiento Colmenar Viejo"
            />
          </div>
        </div>

        {/* Testimonios en texto */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {testimonios.map((t) => (
            <div
              key={t.empresa}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-imgenia-blue/30 mb-3 sm:mb-4 flex-shrink-0" />
              <blockquote className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 mb-4 sm:mb-6">
                &ldquo;{t.texto}&rdquo;
              </blockquote>
              <div className="border-t border-gray-100 pt-3 sm:pt-4">
                <p className="font-bold text-gray-900 text-sm sm:text-base">{t.nombre}</p>
                <p className="text-xs sm:text-sm text-imgenia-blue font-medium">{t.cargo}</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{t.empresa}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
