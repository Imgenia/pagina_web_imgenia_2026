import Section from '../Section';
import { Bot, Workflow, Lock } from 'lucide-react';

export default function QueHacemos() {
  const ejes = [
    {
      icon: Bot,
      title: 'Automatización Inteligente',
      description: 'Agentes de IA que trabajan 24/7 en tareas críticas: prospección, cualificación, seguimiento.'
    },
    {
      icon: Workflow,
      title: 'Integración sin Fricciones',
      description: 'Conectamos múltiples proveedores LLM con tu stack tecnológico actual sin vendor lock-in.'
    },
    {
      icon: Lock,
      title: 'Seguridad Empresarial',
      description: 'Anonimización, compliance y auditoría para que uses IA sin riesgos legales ni de privacidad.'
    }
  ];

  return (
    <Section
      id="que-hacemos"
      title="Qué Hacemos"
      subtitle="Transformamos procesos empresariales con IA de forma segura, escalable y medible."
      background="white"
    >
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {ejes.map((eje) => {
          const Icon = eje.icon;
          return (
            <div key={eje.title} className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-imgenia-pink mb-3 sm:mb-4" strokeWidth={1.5} />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{eje.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{eje.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
