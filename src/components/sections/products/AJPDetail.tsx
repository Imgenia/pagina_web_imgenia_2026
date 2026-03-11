import { ArrowLeft, Shield, AlertTriangle, FileSearch, Lock, CheckCircle, Eye, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';
import { LEAD_FORM_URL } from '../../../constants/cta';

export default function AJPDetail() {
  const impactos = [
    {
      icon: Shield,
      metric: '100%',
      label: 'Trazabilidad de acciones de agentes',
      detail: 'Cada decisión registrada y auditable'
    },
    {
      icon: AlertTriangle,
      metric: '0',
      label: 'Acciones no supervisadas en producción',
      detail: 'Control total del comportamiento IA'
    },
    {
      icon: CheckCircle,
      metric: 'ISO/IEC',
      label: 'Cumplimiento normativo garantizado',
      detail: 'RGPD, ISO 27001, regulación energética'
    },
    {
      icon: Eye,
      metric: 'Tiempo real',
      label: 'Monitorización activa',
      detail: 'Alertas automáticas ante comportamientos anómalos'
    }
  ];

  const problemas = [
    'Los sistemas multiagenticos tomaban decisiones críticas sin supervisión humana verificable',
    'Imposible demostrar trazabilidad de las acciones de los agentes ante una auditoría externa',
    'Riesgo de incumplimiento normativo en el sector energético regulado (RGPD, ISO 27001)',
    'Cada agente podía ser manipulado mediante prompt injection o jailbreaking sin detección',
    'La reputación técnica de AJP frente a clientes como Endesa, EDP o Naturgy dependía de garantizar la seguridad IA'
  ];

  const capacidades = [
    {
      title: 'Auditoría activa con ataques controlados',
      description: 'IAMAI Auditing lanza ataques simulados reales (prompt injection, jailbreaking, adversarial prompting) sobre los agentes en entorno controlado para detectar vulnerabilidades antes de producción.',
      icon: AlertTriangle
    },
    {
      title: 'Enmascaramiento semántico reversible',
      description: 'Los datos sensibles de AJP y sus clientes energéticos se anonimizan antes de llegar a los LLMs externos. La respuesta se reidentifica en local, sin exposición de información estratégica.',
      icon: Lock
    },
    {
      title: 'Supervisión de agentes multiagenticos',
      description: 'Capa de monitorización que intercepta y registra cada acción de los sistemas multiagenticos, permitiendo revisión humana, rollback y trazabilidad completa de decisiones.',
      icon: Eye
    },
    {
      title: 'Score de riesgo e informes técnicos',
      description: 'Tras cada ciclo de auditoría, el sistema genera un informe técnico con score de riesgo por vector de ataque y recomendaciones priorizadas de mitigación.',
      icon: BarChart3
    },
    {
      title: 'Compatible con cualquier modelo LLM',
      description: 'Funciona con GPT, Claude, Gemini y modelos privados. No requiere acceso al código fuente del modelo auditado, solo a las interfaces de entrada/salida.',
      icon: Zap
    },
    {
      title: 'Cumplimiento RGPD e ISO 27001',
      description: 'La suite genera la documentación de evidencia necesaria para auditorías externas. Cubre los requisitos de trazabilidad y protección activa exigidos por la normativa.',
      icon: FileSearch
    }
  ];

  const ataques = [
    { tipo: 'Prompt Injection', descripcion: 'Instrucciones maliciosas inyectadas en el contexto del agente' },
    { tipo: 'Jailbreaking', descripcion: 'Técnicas para eludir las restricciones del modelo' },
    { tipo: 'Adversarial Prompting', descripcion: 'Entradas diseñadas para provocar respuestas incorrectas o peligrosas' },
    { tipo: 'Filtrado débil de contenidos', descripcion: 'Detección de información sensible que escapa a los filtros estándar' },
    { tipo: 'Evasión de límites de acceso', descripcion: 'Intentos de acceder a datos o capacidades fuera del scope del agente' }
  ];

  const stack = [
    { label: 'Suite', value: 'IAMAI Seguridad (plataforma propietaria Imgenia)' },
    { label: 'Módulo auditoría', value: 'IAMAI Auditing — ataques controlados sobre LLMs' },
    { label: 'Módulo privacidad', value: 'Gateway de enmascaramiento semántico reversible' },
    { label: 'Modelos cubiertos', value: 'GPT-4/5, Claude, Gemini, modelos privados on-premise' },
    { label: 'Normativa', value: 'RGPD, LOPD, ISO/IEC 27001, regulación sector energético' },
    { label: 'Despliegue', value: 'On-premise o cloud privada según requisitos del cliente' }
  ];

  const clientes = ['Endesa', 'EDP', 'Naturgy'];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-imgenia-navy py-10 sm:py-14 md:py-20 pt-24 sm:pt-28 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-300 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 font-semibold text-sm rounded-full mb-4 border border-blue-500/30">
                Caso de Éxito · Seguridad IA
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">AJP</h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue-300 font-medium mb-4 sm:mb-6">
                Supervisión y auditoría de agentes IA en el sector energético
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Cómo <ImgeniaText /> dotó a AJP de una suite completa de seguridad IA para que sus sistemas multiagenticos operen en proyectos críticos de energía renovable con trazabilidad total y cumplimiento normativo garantizado.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {clientes.map((c) => (
                  <span key={c} className="px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-lg border border-white/20">
                    {c}
                  </span>
                ))}
                <span className="px-4 py-2 bg-white/10 text-slate-300 text-sm rounded-lg border border-white/20">+ grandes utilities</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              {/* Logo AJP */}
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-blue-500/20 rounded-3xl blur-3xl scale-110"></div>
                <div className="relative bg-white/5 backdrop-blur rounded-3xl shadow-2xl border border-white/10 p-12 flex items-center justify-center">
                  <img
                    src="/AJPsytemFondeado_RGB.png"
                    alt="AJP"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </div>
              {/* Imágenes del producto: Monitor de Auditoría */}
              <div className="w-full max-w-sm space-y-4">
                <img
                  src="/aplicativo%201.png"
                  alt="Monitor de Auditoría en Tiempo Real — AJP"
                  className="w-full rounded-xl border border-white/10 shadow-xl object-cover object-top"
                />
                <img
                  src="/aplicativo%202.png"
                  alt="Monitor de Auditoría en Tiempo Real — detalle de acciones"
                  className="w-full rounded-xl border border-white/10 shadow-xl object-cover object-top"
                />
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Ingeniería de alta tecnología · Sector energético
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
                <Icon className="w-8 h-8 text-imgenia-blue mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl font-bold text-imgenia-pink mb-2">{item.metric}</div>
                <div className="font-semibold text-gray-900 text-sm mb-1">{item.label}</div>
                <div className="text-xs text-gray-500">{item.detail}</div>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
          <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">El reto</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              AJP desarrolla sistemas multiagenticos de alta complejidad para el sector energético, trabajando con grandes utilities como Endesa, EDP y Naturgy en la operación de parques eólicos y fotovoltaicos. La criticidad de sus proyectos exigía que ninguna acción de sus agentes IA quedara fuera del control y la trazabilidad.
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
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <img
                  src="/AJPsytemFondeado_RGB.png"
                  alt="AJP"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Empresa</span>
                  <span className="font-semibold text-gray-900">AJP</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Especialidad</span>
                  <span className="font-semibold text-gray-900">Ingeniería tecnológica</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sector</span>
                  <span className="font-semibold text-gray-900">Energía renovable</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Proyectos</span>
                  <span className="font-semibold text-gray-900">Parques eólicos y fotovoltaicos</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 block">Producto Imgenia</span>
                  <span className="font-semibold text-imgenia-blue">IAMAI Seguridad · Suite de Auditoría IA</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6">
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "La IA puede ayudarte a crecer… o poner en riesgo todo tu negocio. En IMGENIA, la auditamos antes de que lo haga el mundo."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">La solución: IAMAI Seguridad</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Una suite completa de seguridad IA que combina auditoría activa mediante ataques controlados con un gateway de enmascaramiento semántico reversible para proteger los datos sensibles del sector energético.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capacidades.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-imgenia-pink mb-4" strokeWidth={1.5} />
                  <h3 className="font-semibold text-gray-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-imgenia-navy rounded-3xl p-12 mb-24">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">Vectores de ataque simulados</h2>
          <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">IAMAI Auditing prueba los agentes de AJP contra las técnicas de explotación más avanzadas antes de cualquier despliegue en producción.</p>
          <div className="space-y-3 max-w-3xl mx-auto">
            {ataques.map((ataque) => (
              <div key={ataque.tipo} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2"></div>
                <div>
                  <span className="font-semibold text-white text-sm block mb-1">{ataque.tipo}</span>
                  <span className="text-slate-400 text-sm">{ataque.descripcion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Plataforma en acción</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">La suite de anonimización garantiza que los datos sensibles de los proyectos energéticos nunca abandonen el perímetro de seguridad de AJP.</p>
          <div className="grid md:grid-cols-1 gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/Plataforma_de_anonimizacion_2.png"
                alt="Plataforma de anonimización IAMAI Seguridad"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Stack tecnológico</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {stack.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
                <span className="font-semibold text-imgenia-blue w-36 flex-shrink-0 text-sm">{item.label}</span>
                <span className="text-gray-700 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">El resultado</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            AJP opera ahora con sistemas multiagenticos en proyectos críticos de energía renovable con la garantía de que cada acción de sus agentes es supervisada, auditada y trazable. Sus clientes del sector energético pueden verificar el cumplimiento normativo en cualquier momento.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">100%</div>
              <div className="text-white font-medium">Trazabilidad de agentes IA</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">0</div>
              <div className="text-white font-medium">Acciones no supervisadas en producción</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">ISO/IEC</div>
              <div className="text-white font-medium">Cumplimiento normativo certificable</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">¿Tus sistemas de IA están listos para una auditoría?</p>
          <a
            href={LEAD_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-imgenia-blue text-white font-semibold rounded-xl hover:bg-imgenia-navy transition-colors"
          >
            Hablemos de tu caso
          </a>
        </div>
      </div>
    </div>
  );
}
