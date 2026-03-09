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
      <div className="grid md:grid-cols-3 gap-8">
        {pilares.map((pilar) => {
          const Icon = pilar.icon;
          return (
            <div key={pilar.title} className="bg-white rounded-2xl p-8 border border-gray-200">
              <div className="w-14 h-14 bg-imgenia-blue/10 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-imgenia-blue" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{pilar.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pilar.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
