import { ArrowLeft, Clock, BarChart3, TrendingUp, Zap, Database, Shield, Users, Search, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';

export default function IncoTradingDetail() {
  const impactos = [
    {
      icon: Clock,
      metric: '-75%',
      label: 'Tiempo de gestión de pedidos',
      detail: 'De 8h a menos de 2h diarias'
    },
    {
      icon: TrendingUp,
      metric: '30h',
      label: 'Liberadas cada semana',
      detail: 'De picar datos a validar decisiones'
    },
    {
      icon: Zap,
      metric: 'x3-4',
      label: 'Capacidad de escala',
      detail: 'Sin añadir carga de trabajo'
    },
    {
      icon: Users,
      metric: 'Días',
      label: 'Curva de aprendizaje',
      detail: 'Vs. meses con el sistema anterior'
    }
  ];

  const problemas = [
    'Gestión artesanal y dependiente de la memoria de personas concretas',
    'Horas diarias dedicadas a leer correos, buscar en Navision y picar datos',
    'Los leads se enfriaban por tiempo de respuesta elevado',
    'Imposible escalar el volumen sin contratar más personas',
    'Error humano en bloqueos por riesgo y clientes con pago anticipado',
    'Sin visibilidad del funnel de pedidos ni métricas fiables'
  ];

  const nodos = [
    {
      numero: 'N0',
      title: 'Recepción e ingesta',
      description: 'Captura automática de correos, PDFs de pedidos (PO) y justificantes de pago. El sistema consolida todos los canales en un único flujo estructurado.',
      color: 'pink'
    },
    {
      numero: 'N1',
      title: 'Taxonomía canónica',
      description: 'Filtra spam, aprobaciones internas y ruido logístico. Solo llega a la bandeja de entrada lo que genera facturación. Higiene operativa anti-ruido.',
      color: 'blue'
    },
    {
      numero: 'N2',
      title: 'Case File (Visión 360°)',
      description: 'Consolida hilos de conversación, PDFs y consultas técnicas en un único expediente auditable por caso de negocio. Ana ya no busca en el historial; el historial viene a ella.',
      color: 'navy'
    },
    {
      numero: 'N3',
      title: 'Matching con Navision',
      description: 'Identifica clientes por CIF, dominio de email o teléfono con confianza del 95-100%. Avisa en tiempo real si hay rotura de stock o producto descatalogado.',
      color: 'pink'
    },
    {
      numero: 'N4',
      title: 'Seguridad financiera',
      description: 'Detecta automáticamente bloqueos por riesgo crediticio y clientes que requieren pago anticipado, evitando errores que comprometerían la tesorería.',
      color: 'blue'
    }
  ];

  const ventajas = [
    {
      icon: Search,
      title: 'Visión 360° (El "Case File")',
      description: 'IAMAI no ve correos sueltos; ve casos de negocio. Consolida conversaciones, POs, justificantes y consultas en un expediente auditable. El historial viene al operador, no al revés.'
    },
    {
      icon: Database,
      title: 'Matching Inteligente con Navision',
      description: 'Reconoce al cliente por CIF, dominio o teléfono con 95-100% de confianza. Avisa antes de abrir el pedido si hay rotura de stock o producto descatalogado.'
    },
    {
      icon: AlertTriangle,
      title: 'Higiene Operativa Anti-Ruido',
      description: 'La taxonomía canónica filtra spam, aprobaciones internas y ruido logístico. La bandeja de entrada solo muestra lo que genera facturación.'
    },
    {
      icon: Shield,
      title: 'Seguridad Financiera Automática',
      description: 'Detección automática de bloqueos por riesgo o pago anticipado requerido. Cero errores humanos que comprometan la tesorería.'
    },
    {
      icon: TrendingUp,
      title: 'Democratización del Conocimiento',
      description: 'La curva de aprendizaje se reduce de meses a días. IAMAI presenta la información masticada, identificando clientes y productos de Navision automáticamente.'
    },
    {
      icon: BarChart3,
      title: 'Escalabilidad Infinita',
      description: 'Diseñado para absorber un aumento del 200-300% en volumen sin colapsar. La IA procesa en segundos lo que a un humano le llevaría horas de lectura y búsqueda.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-imgenia-pink/5 via-white to-imgenia-blue/5 py-10 sm:py-14 md:py-20 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-imgenia-pink/10 text-imgenia-pink font-semibold text-sm rounded-full mb-4">
                Caso de Éxito · A Medida
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">INCOTRADING</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-imgenia-blue font-medium mb-4 sm:mb-6">
                El salto cuántico en la gestión de pedidos con IAMAI
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cómo <ImgeniaText /> transformó una operativa artesanal en un motor industrial de alta precisión. De 8 horas de gestión manual a menos de 2 horas diarias.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-imgenia-pink/20 to-imgenia-blue/20 rounded-3xl blur-3xl"></div>
              <img
                src="/iamai_pedidos_1.png"
                alt="IAMAI - Gestión de pedidos INCOTRADING"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 sm:px-6 py-10 sm:py-14 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {impactos.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center">
                <Icon className="w-8 h-8 text-imgenia-blue mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-imgenia-pink mb-2">{item.metric}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.detail}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">El problema de negocio</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              INCOTRADING tenía un proceso de gestión de pedidos completamente artesanal, dependiente de la memoria y el conocimiento de personas concretas. El equipo pasaba horas cada día leyendo correos, buscando en Navision y picando datos, sin posibilidad de escalar.
            </p>
            <div className="space-y-3">
              {problemas.map((problema) => (
                <div key={problema} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg p-4">
                  <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                  <span className="text-gray-700 text-sm">{problema}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">El cliente</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Empresa</span>
                  <span className="font-semibold text-gray-900">INCOTRADING</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sector</span>
                  <span className="font-semibold text-gray-900">Distribución / Comercio</span>
                </div>
                <div>
                  <span className="text-gray-500 block">ERP</span>
                  <span className="font-semibold text-gray-900">Microsoft Navision</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Canales</span>
                  <span className="font-semibold text-gray-900">Email, PDF, WhatsApp</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 block">Producto Imgenia</span>
                  <span className="font-semibold text-imgenia-blue">IAMAI · Gestión de Pedidos</span>
                </div>
              </div>
            </div>
            <div className="bg-imgenia-pink/5 border border-imgenia-pink/20 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "INCOTRADING ya no es una empresa que gestiona correos; es una empresa tecnológica que gestiona datos de venta."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">La arquitectura: Nodos Inteligentes (N0-N4)</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            IAMAI implementa una cadena de nodos especializados que procesa cada pedido de forma automática, desde la recepción hasta la validación final por el equipo.
          </p>

          <div className="relative">
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-imgenia-pink via-imgenia-blue to-imgenia-navy mx-16 z-0"></div>
            <div className="grid md:grid-cols-5 gap-4 relative z-10">
              {nodos.map((nodo) => {
                const colorMap = {
                  pink: 'bg-imgenia-pink text-white border-imgenia-pink',
                  blue: 'bg-imgenia-blue text-white border-imgenia-blue',
                  navy: 'bg-imgenia-navy text-white border-imgenia-navy'
                };
                const bgMap = {
                  pink: 'bg-imgenia-pink/5 border-imgenia-pink/20',
                  blue: 'bg-imgenia-blue/5 border-imgenia-blue/20',
                  navy: 'bg-imgenia-navy/5 border-imgenia-navy/20'
                };
                return (
                  <div key={nodo.numero} className={`rounded-2xl p-6 border ${bgMap[nodo.color as keyof typeof bgMap]}`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[nodo.color as keyof typeof colorMap]}`}>
                      <span className="text-lg font-bold">{nodo.numero}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm">{nodo.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{nodo.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Ventajas competitivas de IAMAI</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Cada capacidad del sistema está diseñada para eliminar un punto de fricción concreto en la operación.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventajas.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-imgenia-pink mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-imgenia-pink/5 to-imgenia-blue/5 rounded-3xl p-12 mb-24 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">La plataforma en acción</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/iamai_pedidos_1.png"
                alt="IAMAI - Bandeja de entrada inteligente"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/iamai_pedidos_2.png"
                alt="IAMAI - Case File y matching Navision"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Conclusión</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10">
            IAMAI no solo ahorra tiempo; protege el margen, elimina el error humano y garantiza que, crezcamos lo que crezcamos, la calidad del servicio sea siempre excelente. INCOTRADING puede duplicar su volumen de ventas mañana mismo sin añadir un solo minuto de carga de trabajo extra.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">75%</div>
              <div className="text-white font-medium">Reducción de jornada de gestión</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">200-300%</div>
              <div className="text-white font-medium">Capacidad de escala sin colapso</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">95-100%</div>
              <div className="text-white font-medium">Confianza en matching de clientes</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">¿Tienes un proceso similar que automatizar?</p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-imgenia-blue text-white font-semibold rounded-xl hover:bg-imgenia-navy transition-colors"
          >
            Hablemos de tu caso
          </a>
        </div>
      </div>
    </div>
  );
}
