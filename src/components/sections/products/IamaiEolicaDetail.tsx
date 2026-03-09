import { ArrowLeft, Clock, BarChart3, TrendingUp, Zap, Database, Shield, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';

export default function IamaiEolicaDetail() {
  const impactos = [
    {
      icon: Clock,
      metric: 'Minutos',
      label: 'Para analizar semanas de datos',
      detail: 'Antes requería horas de trabajo manual'
    },
    {
      icon: TrendingUp,
      metric: 'x10',
      label: 'Potencial multi-parque',
      detail: 'Escalable a toda la flota de activos'
    },
    {
      icon: Database,
      metric: '100%',
      label: 'Integración de sistemas',
      detail: 'SCADA, ERP y CRM conectados'
    },
    {
      icon: Zap,
      metric: '24/7',
      label: 'Monitorización continua',
      detail: 'Alertas y análisis en tiempo real'
    }
  ];

  const problemas = [
    'Los datos de producción, mantenimiento y contratos estaban fragmentados en sistemas distintos',
    'Analizar el rendimiento de un parque requería extraer y cruzar datos manualmente de múltiples fuentes',
    'Sin visión unificada era imposible correlacionar incidencias SCADA con órdenes de trabajo del ERP',
    'El tiempo entre detección de anomalía y acción correctiva era demasiado elevado',
    'Escalar el análisis a múltiples parques multiplicaba el esfuerzo humano de forma insostenible'
  ];

  const capacidades = [
    {
      title: 'Ecosistema de IAs distribuidas',
      description: 'Arquitectura multi-agente donde cada IA especializada gestiona un dominio (SCADA, ERP, CRM) y colabora con las demás para ofrecer respuestas integradas.',
      icon: Database
    },
    {
      title: 'Interfaz conversacional',
      description: 'El equipo puede consultar, analizar y actuar sobre datos complejos usando voz o texto natural, sin necesidad de conocer SQL ni los sistemas subyacentes.',
      icon: Wind
    },
    {
      title: 'Conectores nativos SCADA/ERP',
      description: 'Integración directa con los sistemas de supervisión y control industrial, así como con el ERP corporativo para cruzar producción con costes y contratos.',
      icon: Zap
    },
    {
      title: 'Análisis predictivo',
      description: 'Detección temprana de patrones anómalos en series temporales de producción. Correlación automática entre condiciones meteorológicas, rendimiento y mantenimiento.',
      icon: TrendingUp
    },
    {
      title: 'Reporting automatizado',
      description: 'Generación automática de informes de rendimiento por parque, aerogenerador y período. Exportación a formatos corporativos sin intervención manual.',
      icon: BarChart3
    },
    {
      title: 'Control de acceso y auditoría',
      description: 'Cada consulta y acción queda registrada. Gestión de permisos por rol para que cada perfil acceda sólo a los datos que le corresponden.',
      icon: Shield
    }
  ];

  const stack = [
    { label: 'Arquitectura', value: 'Multi-agente IA con orquestación centralizada' },
    { label: 'Integraciones', value: 'SCADA industrial, SAP/ERP, CRM corporativo' },
    { label: 'IA', value: 'LLMs + RAG + herramientas especializadas por dominio' },
    { label: 'Interfaz', value: 'Chat conversacional web + API para integraciones' },
    { label: 'Infraestructura', value: 'Despliegue on-premise / cloud híbrido según requerimientos' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-imgenia-navy/5 via-white to-imgenia-blue/5 py-10 sm:py-14 md:py-20 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-imgenia-navy/10 text-imgenia-navy font-semibold text-sm rounded-full mb-4">
                Caso de Éxito · Energía
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Endesa · IAMAI Eólica</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-imgenia-navy font-medium mb-4 sm:mb-6">
                Ecosistema de IAs distribuidas para parques eólicos
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cómo <ImgeniaText /> conectó todos los sistemas de un parque eólico de Endesa —SCADA, ERP y CRM— en un ecosistema de inteligencias artificiales que permite consultar, analizar y actuar sobre datos complejos en minutos.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-imgenia-navy/20 to-imgenia-blue/20 rounded-3xl blur-3xl scale-105"></div>
              <div className="relative rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                <img
                  src="/iamai_04.png"
                  alt="IAMAI Eólica — Ecosistema de IA para energía eólica: interfaz conversacional con gráficos de penalización por reactiva y potencia activa"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
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
                <Icon className="w-8 h-8 text-imgenia-navy mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-4xl font-bold text-imgenia-blue mb-2">{item.metric}</div>
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
              Un parque eólico moderno genera miles de señales por segundo desde sus aerogeneradores, mientras que el ERP gestiona las órdenes de mantenimiento y el CRM los contratos de venta de energía. Esta fragmentación hace casi imposible obtener una visión integrada del activo en tiempo real.
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
                  <span className="font-semibold text-gray-900">Endesa</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sector</span>
                  <span className="font-semibold text-gray-900">Energía eólica</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sistemas integrados</span>
                  <span className="font-semibold text-gray-900">SCADA, ERP, CRM</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Alcance</span>
                  <span className="font-semibold text-gray-900">Parques eólicos</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Escalabilidad</span>
                  <span className="font-semibold text-gray-900">Multi-parque</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Producto Imgenia</span>
                  <span className="font-semibold text-imgenia-navy">IAMAI Eólica</span>
                </div>
              </div>
            </div>
            <div className="bg-imgenia-navy/5 border border-imgenia-navy/20 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "El reto no era recoger más datos —ya los teníamos— sino poder hacerles preguntas complejas de forma instantánea y actuar sobre ellos sin fricciones entre sistemas."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">La solución: IAMAI Eólica</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Un ecosistema de inteligencias artificiales especializadas que trabajan de forma coordinada para ofrecer una capa de inteligencia unificada sobre todos los sistemas del parque eólico.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capacidades.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-imgenia-navy mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Stack tecnológico</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {stack.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
                <span className="font-semibold text-imgenia-navy w-28 flex-shrink-0 text-sm">{item.label}</span>
                <span className="text-gray-700 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">El resultado</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            El equipo de Endesa pasó de dedicar horas a cruzar datos entre sistemas a obtener análisis completos en minutos mediante consultas en lenguaje natural. La arquitectura multi-agente permite escalar el mismo modelo a toda la flota de parques sin incrementar el esfuerzo operativo.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-blue mb-2">Minutos</div>
              <div className="text-white font-medium">Para analizar semanas de datos</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-blue mb-2">x10</div>
              <div className="text-white font-medium">Potencial de escalado multi-parque</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-blue mb-2">3 en 1</div>
              <div className="text-white font-medium">SCADA, ERP y CRM integrados</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">¿Tienes sistemas industriales que necesitan integrarse con IA?</p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-imgenia-navy text-white font-semibold rounded-xl hover:bg-imgenia-blue transition-colors"
          >
            Hablemos de tu caso
          </a>
        </div>
      </div>
    </div>
  );
}
