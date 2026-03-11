import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../Section';
import { LEAD_FORM_URL } from '../../constants/cta';
import { Users, GitBranch, Code, ShieldCheck, ArrowRight, Wind } from 'lucide-react';

interface Caso {
  nombre: string;
  sector: string;
  metrica: string;
  link: string;
  imagen: string;
}

interface Linea {
  icon: React.ElementType;
  color: string;
  title: string;
  subtitle: string;
  description: string;
  featured: boolean;
  link: string;
  casos?: Caso[];
}

export default function LineasNegocio() {
  const lineas: Linea[] = [
    {
      icon: Users,
      color: 'pink',
      title: 'SDR IA',
      subtitle: 'Prospección Comercial Autónoma',
      description: 'Agente de ventas de IA que trabaja 24/7 identificando, cualificando y contactando prospectos. Multiplica tu pipeline sin aumentar headcount.',
      featured: true,
      link: '/sdr-ia'
    },
    {
      icon: GitBranch,
      color: 'blue',
      title: 'Integra',
      subtitle: 'Gateway Multi-Proveedor LLM · RAG · Asistentes Técnicos',
      description: 'Plataforma unificada que conecta tu empresa con los mejores modelos del mercado (GPT, Claude, Gemini…) a través de un único gateway. Construye asistentes inteligentes con RAG sobre tu documentación interna, automatiza consultas técnicas repetitivas y despliega copilotos de negocio sin exponer tus datos.',
      featured: false,
      link: LEAD_FORM_URL,
      casos: [
        {
          nombre: 'Test My Bike',
          sector: 'Alta tecnología · Asistente técnico IA',
          metrica: '-70% soporte humano repetitivo',
          link: '/caso-test-my-bike',
          imagen: '/logo_test_my bike.png'
        }
      ]
    },
    {
      icon: Code,
      color: 'navy',
      title: 'A Medida',
      subtitle: 'Soluciones IA Personalizadas',
      description: 'Desarrollo de sistemas de IA específicos para tu caso de uso. Desde la conceptualización hasta el despliegue en producción.',
      featured: false,
      link: LEAD_FORM_URL,
      casos: [
        {
          nombre: 'NORCI Logística',
          sector: 'Logística ecommerce · MRW G3',
          metrica: '-80% tiempo de explotación',
          link: '/caso-norci',
          imagen: '/norci_1.png'
        },
        {
          nombre: 'INCOTRADING',
          sector: 'Distribución · Navision',
          metrica: '-75% tiempo de gestión',
          link: '/caso-incotrading',
          imagen: '/iamai_pedidos_1.png'
        },
        {
          nombre: 'Endesa · IAMAI Eólica',
          sector: 'Energía eólica · SCADA / ERP',
          metrica: 'Análisis en minutos vs. horas',
          link: '/caso-iamai-eolica',
          imagen: '/iamai_05.png'
        }
      ]
    },
    {
      icon: ShieldCheck,
      color: 'blue',
      title: 'Seguridad',
      subtitle: 'Compliance IA y Auditoría',
      description: 'Suite completa de herramientas para garantizar seguridad, privacidad y cumplimiento normativo en todos tus sistemas de IA.',
      featured: false,
      link: LEAD_FORM_URL,
      casos: [
        {
          nombre: 'AJP · Sector Energético',
          sector: 'Energía · Grandes parques eólicos y fotovoltaicos',
          metrica: 'Auditoría activa de agentes IA multiagenticos',
          link: '/caso-ajp',
          imagen: '/AJPsytemFondeado_RGB.png'
        }
      ]
    }
  ];

  return (
    <Section
      id="lineas-negocio"
      title="Líneas de Negocio"
      subtitle="Cuatro verticales especializadas que cubren todo el espectro de necesidades empresariales en IA."
      background="gray"
    >
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {lineas.map((linea) => {
          const Icon = linea.icon;
          const colorClasses = {
            pink: 'text-imgenia-pink bg-imgenia-pink/10 border-imgenia-pink hover:bg-imgenia-pink',
            blue: 'text-imgenia-blue bg-imgenia-blue/10 border-imgenia-blue hover:bg-imgenia-blue',
            navy: 'text-imgenia-navy bg-imgenia-navy/10 border-imgenia-navy hover:bg-imgenia-navy'
          };

          return (
            <div key={linea.title} className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all">
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 items-start">
                <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[1]} rounded-xl sm:rounded-2xl flex items-center justify-center`}>
                  <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[0]}`} strokeWidth={1.5} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="min-w-0">
                      {linea.featured && (
                        <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 bg-imgenia-pink/10 text-imgenia-pink text-xs font-semibold rounded-full mb-2">
                          🔥 Destacado
                        </span>
                      )}
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{linea.title}</h3>
                      <p className="text-base sm:text-lg text-imgenia-blue font-medium break-words">{linea.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">{linea.description}</p>

                  {linea.casos ? (
                    <div>
                      <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2 sm:mb-3">Casos de éxito</p>
                      <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                        {linea.casos.map((caso) => (
                          <Link
                            key={caso.nombre}
                            to={caso.link}
                            className="group flex items-center gap-3 sm:gap-4 bg-gray-50 border border-gray-200 hover:border-imgenia-navy hover:shadow-md rounded-lg sm:rounded-xl p-3 sm:p-4 transition-all duration-300 min-h-[56px]"
                          >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 bg-white flex items-center justify-center p-1">
                              {caso.imagen ? (
                                <img src={caso.imagen} alt={caso.nombre} className="w-full h-full object-contain" />
                              ) : (
                                <Wind className="w-6 h-6 text-imgenia-navy/40" strokeWidth={1.5} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900 text-sm truncate">{caso.nombre}</div>
                              <div className="text-xs text-gray-500 mb-1 truncate">{caso.sector}</div>
                              <div className="text-xs font-semibold text-imgenia-navy">{caso.metrica}</div>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-imgenia-navy group-hover:translate-x-1 transition-all flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : linea.link.startsWith('/') ? (
                    <Link
                      to={linea.link}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 min-h-[44px] ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[0]} font-medium rounded-lg text-sm sm:text-base ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[3]} hover:text-white transition-all duration-300 group`}
                    >
                      Ver más detalles
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  ) : (
                    <a
                      href={linea.link}
                      target={linea.link.startsWith('http') ? '_blank' : undefined}
                      rel={linea.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 sm:px-6 sm:py-3 border-2 min-h-[44px] ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[2]} ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[0]} font-medium rounded-lg text-sm sm:text-base ${colorClasses[linea.color as keyof typeof colorClasses].split(' ')[3]} hover:text-white transition-all duration-300 group`}
                    >
                      Más información
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
