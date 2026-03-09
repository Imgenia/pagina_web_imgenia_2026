import { Link } from 'react-router-dom';
import Section from '../Section';
import { ArrowRight } from 'lucide-react';

export default function CasosExito() {
  const casos = [
    {
      cliente: 'NORCI Logística',
      sector: 'Logística ecommerce · MRW G3',
      producto: 'IAMAI MRW',
      descripcion: 'Plataforma de IA que unifica y estructura los datos de G3 de MRW eliminando horas de reconciliación manual diaria.',
      metricas: [
        { valor: '-80%', label: 'Tiempo de explotación' },
        { valor: '+3h/día', label: 'Liberadas por operador' }
      ],
      logo: '/NORCI_LOGO2.png',
      imagen: '/norci_1.png',
      link: '/caso-norci',
      color: 'blue'
    },
    {
      cliente: 'INCOTRADING',
      sector: 'Distribución · Microsoft Navision',
      producto: 'IAMAI · Gestión de Pedidos',
      descripcion: 'Sistema de nodos inteligentes que transforma la gestión de pedidos por email en un motor industrial automatizado con visión 360°.',
      metricas: [
        { valor: '-75%', label: 'Tiempo de gestión' },
        { valor: 'x3-4', label: 'Capacidad de escala' }
      ],
      logo: '/Incotrading_logo.png',
      imagen: '/iamai_pedidos_1.png',
      link: '/caso-incotrading',
      color: 'pink'
    },
    {
      cliente: 'Endesa',
      sector: 'Energía eólica · SCADA / ERP / CRM',
      producto: 'IAMAI Eólica',
      descripcion: 'Ecosistema de IAs distribuidas que conecta todos los sistemas de un parque eólico y permite consultar, analizar y actuar sobre datos complejos con voz o texto.',
      metricas: [
        { valor: 'Minutos', label: 'Para analizar semanas de datos' },
        { valor: 'x10', label: 'Potencial multi-parque' }
      ],
      logo: '/enel.png',
      imagen: '/iamai_05.png',
      link: '/caso-iamai-eolica',
      color: 'navy'
    }
  ];

  return (
    <Section
      id="casos-exito"
      title="Casos de Éxito"
      subtitle="Resultados reales en empresas reales. Transformaciones medibles desde el primer día."
      background="gray"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {casos.map((caso) => {
          const borderColor = caso.color === 'pink' ? 'border-imgenia-pink/30 hover:border-imgenia-pink' : caso.color === 'navy' ? 'border-imgenia-navy/30 hover:border-imgenia-navy' : 'border-imgenia-blue/30 hover:border-imgenia-blue';
          const badgeColor = caso.color === 'pink' ? 'bg-imgenia-pink/10 text-imgenia-pink' : caso.color === 'navy' ? 'bg-imgenia-navy/10 text-imgenia-navy' : 'bg-imgenia-blue/10 text-imgenia-blue';
          const metricColor = caso.color === 'pink' ? 'text-imgenia-pink' : caso.color === 'navy' ? 'text-imgenia-navy' : 'text-imgenia-blue';
          const btnBorder = caso.color === 'pink' ? 'border-imgenia-pink text-imgenia-pink hover:bg-imgenia-pink' : caso.color === 'navy' ? 'border-imgenia-navy text-imgenia-navy hover:bg-imgenia-navy' : 'border-imgenia-blue text-imgenia-blue hover:bg-imgenia-blue';

          return (
            <div key={caso.cliente} className={`bg-white rounded-xl sm:rounded-2xl border-2 ${borderColor} transition-all hover:shadow-xl overflow-hidden`}>
              {/* Logo de la empresa */}
              <div className="h-24 sm:h-32 md:h-36 bg-gray-50 flex items-center justify-center px-4 py-4 sm:px-6 sm:py-6 border-b border-gray-100">
                <img
                  src={caso.logo}
                  alt={caso.cliente}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className={`inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 ${badgeColor} text-xs font-semibold rounded-full mb-2 sm:mb-3`}>
                  {caso.producto}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">{caso.cliente}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">{caso.sector}</p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">{caso.descripcion}</p>

                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {caso.metricas.map((m) => (
                    <div key={m.label} className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                      <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${metricColor} mb-0.5 sm:mb-1`}>{m.valor}</div>
                      <div className="text-[10px] sm:text-xs text-gray-600 font-medium leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={caso.link}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 min-h-[44px] ${btnBorder} font-medium rounded-lg text-sm sm:text-base hover:text-white transition-all duration-300 group`}
                >
                  Ver caso completo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
