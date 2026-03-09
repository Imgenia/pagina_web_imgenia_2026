import Section from '../Section';
import ImgeniaText from '../ImgeniaText';
import { Target, Zap, Shield } from 'lucide-react';

export default function SobreImgenia() {
  const pilares = [
    {
      icon: Target,
      title: 'Enfoque Práctico',
      description: 'No hacemos IA por hacer IA. Resolvemos problemas de negocio reales con tecnología avanzada.'
    },
    {
      icon: Zap,
      title: 'Tecnología Avanzada',
      description: 'Integramos los mejores LLMs del mercado con arquitectura robusta y escalable.'
    },
    {
      icon: Shield,
      title: 'Seguridad Total',
      description: 'Cumplimiento normativo, anonimización automática y auditoría completa incluida.'
    }
  ];

  return (
    <Section
      id="sobre-imgenia"
      title={<>Sobre <ImgeniaText /></>}
      subtitle="Especialistas en Inteligencia Artificial aplicada a resultados de negocio."
      background="gray"
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {pilares.map((pilar) => {
          const Icon = pilar.icon;
          return (
            <div key={pilar.title} className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-imgenia-blue/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-imgenia-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{pilar.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{pilar.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
