import { ArrowLeft, CheckCircle2, XCircle, Users, Clock, Calendar, BarChart3, Zap, TrendingUp, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';

export default function SdrIADetail() {
  const caracteristicas = [
    {
      icon: Zap,
      title: 'Contacta en segundos',
      description: 'Respuesta automática inmediata a cada lead'
    },
    {
      icon: Clock,
      title: 'Hace seguimiento 24/7',
      description: 'Sin descansos, sin olvidos, sin retrasos'
    },
    {
      icon: Calendar,
      title: 'Agenda reuniones que sí se presentan',
      description: 'Confirmación y recordatorios automáticos'
    },
    {
      icon: BarChart3,
      title: 'Reporting en tiempo real',
      description: 'Visibilidad total del funnel comercial'
    }
  ];

  const problemas = [
    'Los leads se enfrían',
    'Los SDR no llegan a todos',
    'Los seguimientos se olvidan',
    'Las reuniones no se confirman'
  ];

  const queHace = [
    'Contacta automáticamente a los leads en segundos',
    'Cualifica según contexto y respuestas del prospecto',
    'Hace seguimiento automático multicanal',
    'Agenda reuniones directamente en el calendario',
    'Confirma y recuerda la cita para reducir no-shows',
    'Reagenda oportunidades que se habían perdido',
    'Entrega contexto completo al equipo comercial',
    'Todo conectado a tu CRM, WhatsApp, teléfono y calendario'
  ];

  const implementacion = [
    {
      numero: '1',
      title: 'Radiografía comercial inicial',
      items: [
        'Tiempo medio de contacto',
        'Tasa de agendamiento',
        'Tasa de asistencia',
        'Puntos de fuga del funnel'
      ],
      footer: 'Calculamos incluso cuánto dinero se está perdiendo actualmente.'
    },
    {
      numero: '2',
      title: 'Sistema SDR IA instalado',
      items: [
        'Contactan a todos los leads',
        'Cualifican automáticamente',
        'Agendan reuniones',
        'Hacen seguimiento persistente'
      ],
      footer: 'Agentes IA que trabajan 24/7 dentro de tu funnel.'
    },
    {
      numero: '3',
      title: 'Reporting y dashboards',
      items: [
        'Tiempo de respuesta',
        'Ratio de contacto',
        'Ratio de reunión',
        'Tasa de cierre'
      ],
      footer: 'Datos reales para optimizar el funnel.'
    }
  ];

  const beneficios = [
    { text: 'Contacto con leads en segundos', icon: Zap },
    { text: 'Hasta x5 más probabilidades de agendar', icon: TrendingUp },
    { text: 'Reducción de no-shows entre 30-60%', icon: CheckCircle2 },
    { text: 'Liberación de tiempo para el equipo', icon: Users },
    { text: 'Funnel totalmente trazable', icon: BarChart3 },
    { text: 'ROI positivo desde el primer mes', icon: Shield }
  ];

  const casosExito = [
    {
      empresa: 'TechSolutions SL',
      sector: 'Software B2B',
      logo: '🚀',
      resultado: '+320% reuniones agendadas',
      testimonio: 'Antes perdíamos el 70% de los leads por no contactar rápido. Con SDR IA respondemos en segundos y nuestra tasa de conversión se multiplicó por 5. El equipo comercial ahora solo se dedica a cerrar ventas.',
      autor: 'Carlos Mendoza',
      cargo: 'Director Comercial',
      metricas: [
        { label: 'Tiempo de respuesta', antes: '4h 20min', despues: '12 segundos' },
        { label: 'Tasa de agendamiento', antes: '8%', despues: '42%' },
        { label: 'No-shows', antes: '45%', despues: '18%' }
      ]
    },
    {
      empresa: 'Inmobiliaria Digital',
      sector: 'PropTech',
      logo: '🏢',
      resultado: '67% reducción en no-shows',
      testimonio: 'El mayor problema no era generar leads, sino que llegaran a la reunión. SDR IA confirmó, recordó y reprogramó automáticamente. Pasamos de perder casi la mitad de las citas a tener un 82% de asistencia.',
      autor: 'Laura Jiménez',
      cargo: 'CEO',
      metricas: [
        { label: 'Leads contactados', antes: '45%', despues: '100%' },
        { label: 'Asistencia a reuniones', antes: '55%', despues: '82%' },
        { label: 'Tiempo del equipo liberado', antes: '0h', despues: '120h/mes' }
      ]
    },
    {
      empresa: 'FinanzasPlus',
      sector: 'Fintech',
      logo: '💰',
      resultado: '€47K ahorro mensual en SDRs',
      testimonio: 'Teníamos 4 SDRs que no daban abasto. SDR IA hace el trabajo de 8 personas, sin errores y 24/7. La inversión se amortizó en 3 semanas. Ahora escalamos sin límites.',
      autor: 'Miguel Ángel Torres',
      cargo: 'VP Sales',
      metricas: [
        { label: 'Capacidad de gestión', antes: '250 leads/mes', despues: '1.200 leads/mes' },
        { label: 'Coste por lead gestionado', antes: '€42', despues: '€8' },
        { label: 'Reuniones cerradas', antes: '32/mes', despues: '156/mes' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-imgenia-pink/5 via-white to-imgenia-blue/5 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-imgenia-pink/10 text-imgenia-pink font-semibold text-sm rounded-full mb-4">
                🔥 Producto Estrella
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">SDR IA</h1>
              <p className="text-2xl text-imgenia-blue font-medium mb-6">
                El sistema que gestiona tus leads y los convierte en reuniones reales de venta
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Contacta en segundos. Cualifica automáticamente. Agenda más reuniones.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-imgenia-pink/20 to-imgenia-blue/20 rounded-3xl blur-3xl"></div>
              <img
                src="/sdr_ia_1.png"
                alt="SDR IA Dashboard - The War Room"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {caracteristicas.map((caracteristica) => {
            const Icon = caracteristica.icon;
            return (
              <div key={caracteristica.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-imgenia-pink mb-4" strokeWidth={1.5} />
                <h3 className="font-semibold text-gray-900 mb-2">{caracteristica.title}</h3>
                <p className="text-sm text-gray-600">{caracteristica.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 mb-24 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">El problema que resuelve</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Muchas empresas invierten miles de euros cada mes en generar leads… pero siguen perdiendo
            oportunidades porque su proceso comercial no está preparado para gestionar volumen.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {problemas.map((problema) => (
              <div key={problema} className="flex items-center gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-gray-700">{problema}</span>
              </div>
            ))}
          </div>

          <p className="text-lg font-semibold text-red-600">
            El resultado: muchas oportunidades perdidas sin saber por qué.
          </p>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Qué hace SDR IA</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Nuestro sistema instala un equipo digital de agentes comerciales con IA que trabajan 24/7 dentro de tu funnel.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {queHace.map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-green-50 border border-green-100 rounded-lg p-4">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Los 3 problemas que resuelve</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-imgenia-pink/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-imgenia-pink">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Llegan tarde al lead</h3>
              <p className="text-gray-600 leading-relaxed">
                La probabilidad de conversión cae drásticamente cuando no se contacta en los primeros minutos.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-imgenia-blue/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-imgenia-blue">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seguimiento inconsistente</h3>
              <p className="text-gray-600 leading-relaxed">
                Una venta compleja requiere entre 5 y 12 interacciones. Los equipos humanos no pueden hacerlo a escala.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="w-12 h-12 bg-imgenia-navy/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl font-bold text-imgenia-navy">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Falta de visibilidad del funnel</h3>
              <p className="text-gray-600 leading-relaxed">
                No se sabe exactamente dónde se están perdiendo las oportunidades.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg font-semibold text-imgenia-blue">
              SDR IA automatiza todo el proceso y convierte tu captación en un sistema realmente escalable.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-imgenia-blue/5 to-imgenia-pink/5 rounded-3xl p-12 mb-24 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Qué incluye la implementación</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {implementacion.map((fase) => (
              <div key={fase.numero} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-16 h-16 bg-gradient-to-br from-imgenia-pink to-imgenia-blue rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl font-bold text-white">{fase.numero}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{fase.title}</h3>
                <ul className="space-y-2 mb-6">
                  {fase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600">
                      <span className="text-imgenia-blue mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 italic border-t border-gray-200 pt-4">
                  {fase.footer}
                </p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/sdr_ia_1.png"
                alt="SDR IA - The War Room"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/sdr_ia_2.png"
                alt="SDR IA Analytics Dashboard"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Beneficios principales</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beneficios.map((beneficio) => {
              const Icon = beneficio.icon;
              return (
                <div key={beneficio.text} className="flex items-center gap-4 bg-white border-2 border-green-100 rounded-xl p-6 hover:border-green-300 transition-colors">
                  <Icon className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-gray-900">{beneficio.text}</span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-2xl font-bold text-imgenia-pink">
              Convierte cada lead en una oportunidad real.
            </p>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600">Lo que dicen nuestros clientes sobre SDR IA</p>
          </div>

          <div className="space-y-12">
            {casosExito.map((caso, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 hover:border-imgenia-blue transition-colors">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-imgenia-pink/20 to-imgenia-blue/20 rounded-xl flex items-center justify-center text-3xl">
                        {caso.logo}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{caso.empresa}</h3>
                        <p className="text-gray-600">{caso.sector}</p>
                      </div>
                    </div>

                    <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded-lg mb-6">
                      <span className="text-lg font-bold text-green-600">{caso.resultado}</span>
                    </div>

                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{caso.testimonio}"
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">{caso.autor}</p>
                        <p className="text-sm text-gray-600">{caso.cargo}</p>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-80 bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4 text-center">Métricas Clave</h4>
                    <div className="space-y-4">
                      {caso.metricas.map((metrica) => (
                        <div key={metrica.label}>
                          <p className="text-sm text-gray-600 mb-2">{metrica.label}</p>
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex-1 bg-red-100 rounded px-3 py-2">
                              <span className="text-sm font-medium text-red-700">{metrica.antes}</span>
                            </div>
                            <span className="text-gray-400">→</span>
                            <div className="flex-1 bg-green-100 rounded px-3 py-2">
                              <span className="text-sm font-medium text-green-700">{metrica.despues}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-imgenia-blue to-imgenia-navy rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">¿Listo para multiplicar tus reuniones de venta?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Agenda una demo de 30 minutos y descubre cómo SDR IA puede transformar tu proceso comercial
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-imgenia-blue font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Solicitar Demo
            </a>
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Hablar con Ventas
            </a>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-gray-300">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img
                src="/LogotipoPositivo.png"
                alt="IMGENIA"
                className="h-12"
              />
            </div>
            <p className="text-sm text-gray-500 mb-4">Artificial Intelligence for Real Business</p>
            <p className="text-xs text-gray-400">© 2026 <ImgeniaText className="inline" />. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
