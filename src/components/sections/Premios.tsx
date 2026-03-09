import Section from '../Section';
import { Award, Star, Trophy } from 'lucide-react';

export default function Premios() {
  const premios = [
    {
      icon: Trophy,
      titulo: 'Premio Innovación Tecnológica',
      organizacion: 'Sector Industrial · 2024',
      descripcion: 'Reconocimiento a la solución IAMAI por su impacto en la automatización de procesos industriales complejos.',
      color: 'gold'
    },
    {
      icon: Award,
      titulo: 'Startup Destacada en IA',
      organizacion: 'Madrid Tech Week · 2024',
      descripcion: 'Seleccionados entre las startups más relevantes del ecosistema de inteligencia artificial empresarial en España.',
      color: 'blue'
    },
    {
      icon: Star,
      titulo: 'Caso de Éxito Sector Energía',
      organizacion: 'Asociación Energías Renovables · 2023',
      descripcion: 'Reconocimiento al proyecto IAMAI Eólica con Endesa como referente en transformación digital del sector energético.',
      color: 'green'
    }
  ];

  return (
    <Section
      id="premios"
      title="Reconocimientos"
      subtitle="El trabajo bien hecho genera confianza. Algunos reconocimientos que avalan nuestra trayectoria."
      background="white"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {premios.map((premio) => {
          const Icon = premio.icon;
          const iconColor = premio.color === 'gold' ? 'text-amber-500' : premio.color === 'green' ? 'text-emerald-600' : 'text-imgenia-blue';
          const bgColor = premio.color === 'gold' ? 'bg-amber-50 border-amber-200' : premio.color === 'green' ? 'bg-emerald-50 border-emerald-200' : 'bg-imgenia-blue/5 border-imgenia-blue/20';

          return (
            <div key={premio.titulo} className={`rounded-2xl border-2 ${bgColor} p-8 text-center hover:shadow-lg transition-shadow`}>
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-6`}>
                <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{premio.titulo}</h3>
              <p className="text-sm font-semibold text-gray-500 mb-4">{premio.organizacion}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{premio.descripcion}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
