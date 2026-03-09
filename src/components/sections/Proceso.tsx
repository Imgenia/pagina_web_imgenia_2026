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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {pasos.map((paso) => {
            const Icon = paso.icon;
            return (
              <div key={paso.numero} className="relative">
                <div className="bg-gradient-to-br from-imgenia-blue/5 to-imgenia-pink/5 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 h-full">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-imgenia-pink to-imgenia-blue rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
                      {paso.numero}
                    </div>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-imgenia-blue flex-shrink-0" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{paso.titulo}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{paso.descripcion}</p>
                  <div className="space-y-1.5 sm:space-y-2">
                    {paso.entregables.map((entregable) => (
                      <div key={entregable} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
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
