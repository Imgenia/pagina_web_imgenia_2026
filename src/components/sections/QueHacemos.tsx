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
      <div className="grid md:grid-cols-3 gap-8">
        {ejes.map((eje) => {
          const Icon = eje.icon;
          return (
            <div key={eje.title} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
              <Icon className="w-12 h-12 text-imgenia-pink mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{eje.title}</h3>
              <p className="text-gray-600 leading-relaxed">{eje.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
