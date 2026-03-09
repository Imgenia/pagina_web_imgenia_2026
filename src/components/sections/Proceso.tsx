import Section from '../Section';
import { Play, Rocket, CheckCircle2 } from 'lucide-react';

export default function Proceso() {
  const pasos = [
    {
      icon: Play,
      numero: '1',
      titulo: 'Demo 10 min',
      descripcion: 'Mostramos cómo funciona aplicado a tu caso',
      entregables: ['Diagnóstico inicial', 'ROI estimado', 'Timeline propuesto']
    },
    {
      icon: Rocket,
      numero: '2',
      titulo: 'Piloto 5 días',
      descripcion: 'Implementamos una versión funcional en producción',
      entregables: ['Sistema desplegado', 'Métricas en tiempo real', 'Ajustes basados en datos']
    },
    {
      icon: CheckCircle2,
      numero: '3',
      titulo: 'Producción',
      descripcion: 'Escalamos y optimizamos continuamente',
      entregables: ['Soporte 24/7', 'Actualizaciones mensuales', 'Optimización continua']
    }
  ];

  return (
    <Section
      id="proceso"
      title="Proceso"
      subtitle="De la demo a producción en menos de 2 semanas."
      background="white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {pasos.map((paso) => {
            const Icon = paso.icon;
            return (
              <div key={paso.numero} className="relative">
                <div className="bg-gradient-to-br from-imgenia-blue/5 to-imgenia-pink/5 rounded-2xl p-8 border border-gray-200 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-imgenia-pink to-imgenia-blue rounded-xl flex items-center justify-center text-white font-bold text-xl">
                      {paso.numero}
                    </div>
                    <Icon className="w-8 h-8 text-imgenia-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600 mb-4">{paso.descripcion}</p>
                  <div className="space-y-2">
                    {paso.entregables.map((entregable) => (
                      <div key={entregable} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5">✓</span>
                        <span>{entregable}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
