import { ArrowLeft, Clock, BarChart3, TrendingUp, Zap, Database, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';

export default function NorciDetail() {
  const impactos = [
    {
      icon: Clock,
      metric: '-80%',
      label: 'Tiempo de explotación de datos',
      detail: 'De horas a minutos cada día'
    },
    {
      icon: TrendingUp,
      metric: '+3h',
      label: 'Ahorro diario por operador',
      detail: 'Redirigidas a tareas de mayor valor'
    },
    {
      icon: Database,
      metric: '100%',
      label: 'Trazabilidad de datos',
      detail: 'Métricas auditables y reproducibles'
    },
    {
      icon: Zap,
      metric: 'x∞',
      label: 'Escalabilidad',
      detail: 'Sin límite de volumen ni de clientes'
    }
  ];

  const problemas = [
    'La misma empresa aparecía con decenas de variantes distintas en G3',
    'El equipo dedicaba varias horas al día a reconciliar nombres manualmente',
    'Los reportes por cliente no eran fiables ni automatizables',
    'Riesgo constante de error humano en la unificación de datos',
    'Dependencia total de personas concretas para explotar los datos'
  ];

  const capacidades = [
    {
      title: 'Entity Resolution inteligente',
      description: 'Unifica nombres de empresas aunque se escriban con alias, abreviaturas, typos o formas legales distintas. Jaro-Winkler, token set ratio y reglas de negocio combinadas.',
      icon: Database
    },
    {
      title: 'Blocking y escalabilidad real',
      description: 'Gestiona miles de registros diarios en CPU estándar. Genera pares candidatos inteligentes en lugar de comparar todo contra todo (O(N²)).',
      icon: Zap
    },
    {
      title: 'Human-in-the-loop',
      description: 'El equipo valida o rechaza agrupaciones desde una interfaz web. Las validaciones se almacenan y mejoran el sistema de forma continua.',
      icon: Users
    },
    {
      title: 'Motor de reglas de negocio',
      description: 'Ventanas horarias, plus nocturno, direcciones adicionales, clientes especiales. Cada ejecución guarda un snapshot para que los resultados sean siempre reproducibles.',
      icon: Shield
    },
    {
      title: 'Integración nativa con G3 / MRW',
      description: 'Entrada: ficheros Excel exportados desde G3. Salida: datos estructurados por ejecución, repartidor y cluster, listos para explotar o exportar.',
      icon: BarChart3
    },
    {
      title: 'Diccionario de canónicos evolutivo',
      description: 'El sistema aprende con cada validación. La curva de aprendizaje del equipo se reduce progresivamente con el uso.',
      icon: TrendingUp
    }
  ];

  const stack = [
    { label: 'Backend', value: 'FastAPI (Python) + SQLAlchemy + MySQL' },
    { label: 'Frontend', value: 'Next.js (React), interfaz responsive' },
    { label: 'Algoritmos', value: 'RapidFuzz + NetworkX (clustering de grafos de similitud)' },
    { label: 'Despliegue', value: 'Docker (backend y frontend separados) + VPS' },
    { label: 'Seguridad', value: 'JWT para autenticación, snapshots auditables' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-imgenia-blue/5 via-white to-imgenia-pink/5 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-imgenia-blue/10 text-imgenia-blue font-semibold text-sm rounded-full mb-4">
                Caso de Éxito · A Medida
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4">NORCI Logística</h1>
              <p className="text-2xl text-imgenia-blue font-medium mb-6">
                Plataforma de IA para la explotación de datos G3 (MRW)
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cómo <ImgeniaText /> transformó un proceso manual de horas en un sistema semi-automatizado y auditable que libera más de 3 horas de trabajo diario al equipo de NORCI.
              </p>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-imgenia-blue/20 to-imgenia-pink/20 rounded-3xl blur-3xl"></div>
              <img
                src="/norci_1.png"
                alt="Plataforma IAMAI MRW - NORCI"
                className="relative rounded-2xl shadow-2xl border border-gray-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
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
              NORCI gestiona el ciclo logístico completo para sus clientes de ecommerce, con integración nativa a Shopify, WooCommerce, Magento y otros. La operación diaria con G3 de MRW genera listados donde el nombre del destinatario aparece escrito de formas completamente distintas, bloqueando la explotación de datos.
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
                  <span className="font-semibold text-gray-900">NORCI Logística</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Ubicación</span>
                  <span className="font-semibold text-gray-900">San Fernando de Henares, Madrid</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sector</span>
                  <span className="font-semibold text-gray-900">Logística ecommerce</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Integración</span>
                  <span className="font-semibold text-gray-900">G3 MRW</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Plataformas</span>
                  <span className="font-semibold text-gray-900">Shopify, WooCommerce, Magento</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Producto Imgenia</span>
                  <span className="font-semibold text-imgenia-blue">IAMAI MRW</span>
                </div>
              </div>
            </div>
            <div className="bg-imgenia-blue/5 border border-imgenia-blue/20 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "NORCI se define como una empresa de logística impulsada por datos: cada proceso se mide, cada desviación se detecta y las decisiones se basan en evidencia, no en intuición."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">La solución: IAMAI MRW</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Una capa de inteligencia artificial sobre los datos exportados de G3 que no sustituye al sistema, sino que enriquece y estructura su salida para que NORCI pueda explotarla con un mínimo de intervención manual.
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

        <div className="bg-gradient-to-br from-imgenia-blue/5 to-imgenia-pink/5 rounded-3xl p-12 mb-24 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">La plataforma en acción</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/norci_1.png"
                alt="IAMAI MRW - Interfaz de gestión"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img
                src="/norci_2.png"
                alt="IAMAI MRW - Dashboard de resultados"
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
                <span className="font-semibold text-imgenia-blue w-28 flex-shrink-0 text-sm">{item.label}</span>
                <span className="text-gray-700 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">El resultado</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            La explotación diaria de G3 dejó de depender de horas de trabajo manual de reconciliación y se convirtió en un proceso semi-automatizado y auditable. El mismo pipeline puede seguir creciendo con más datos o más reglas sin cambiar el flujo de trabajo básico de NORCI.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">80%</div>
              <div className="text-white font-medium">Reducción de tiempo de explotación</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">+3h/día</div>
              <div className="text-white font-medium">Ahorro de trabajo manual</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">100%</div>
              <div className="text-white font-medium">Trazabilidad y auditabilidad</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
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
