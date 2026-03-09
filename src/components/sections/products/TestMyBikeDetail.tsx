import { ArrowLeft, MessageSquare, FileText, TrendingDown, Star, Zap, BookOpen, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImgeniaText from '../../ImgeniaText';

export default function TestMyBikeDetail() {
  const impactos = [
    {
      icon: TrendingDown,
      metric: '-70%',
      label: 'Soporte humano repetitivo',
      detail: 'Consultas resueltas sin intervención del equipo'
    },
    {
      icon: Star,
      metric: '↑ NPS',
      label: 'Satisfacción del cliente',
      detail: 'Respuestas inmediatas, precisas y documentadas'
    },
    {
      icon: Zap,
      metric: '24/7',
      label: 'Disponibilidad del asistente',
      detail: 'Sin horarios, sin esperas, sin fricción'
    },
    {
      icon: FileText,
      metric: '100%',
      label: 'Respuestas con fuente técnica',
      detail: 'Vinculadas a documentación oficial del fabricante'
    }
  ];

  const capacidades = [
    {
      title: 'Comprensión de lenguaje técnico',
      description: 'El asistente interpreta preguntas en lenguaje natural como "¿Cómo ajusto el freno hidráulico de mi bicicleta?" y las conecta con la documentación técnica relevante.',
      icon: MessageSquare
    },
    {
      title: 'Respuestas enriquecidas con recursos',
      description: 'Cada respuesta incluye automáticamente imágenes, vídeos tutoriales o documentos técnicos del fabricante enlazados de forma contextual.',
      icon: FileText
    },
    {
      title: 'Base de conocimiento dinámica',
      description: 'Conectada a la documentación técnica de miles de modelos de bicicletas. Se actualiza continuamente sin intervención manual del equipo de Test My Bike.',
      icon: BookOpen
    },
    {
      title: 'Escalabilidad sin límite',
      description: 'Atiende simultáneamente a cualquier número de usuarios, con el mismo nivel de calidad, en cualquier momento del día o la noche.',
      icon: Zap
    },
    {
      title: 'Integración nativa con IAMAI Bike',
      description: 'Construido sobre la plataforma IAMAI de Imgenia, con capacidades de retrieval aumentado (RAG) específicamente diseñadas para documentación técnica.',
      icon: Star
    },
    {
      title: 'Mejora continua',
      description: 'Las interacciones alimentan el sistema de aprendizaje. Las preguntas sin respuesta óptima se detectan y escalan para enriquecer la base de conocimiento.',
      icon: HeartHandshake
    }
  ];

  const problemas = [
    'Miles de clientes preguntaban lo mismo sobre mantenimiento y ajustes',
    'El equipo técnico dedicaba horas a responder consultas repetitivas por email y chat',
    'Las respuestas dependían del conocimiento de personas concretas del equipo',
    'La documentación técnica de fabricantes estaba dispersa y era difícil de consultar',
    'La imagen digital de la marca no reflejaba el nivel de innovación del producto'
  ];

  const stack = [
    { label: 'Motor IA', value: 'IAMAI Bike (plataforma propietaria Imgenia)' },
    { label: 'Arquitectura', value: 'RAG (Retrieval-Augmented Generation) sobre documentación técnica' },
    { label: 'Modelos LLM', value: 'Multi-proveedor vía Integra Gateway (OpenAI, Anthropic, otros)' },
    { label: 'Fuentes de datos', value: 'Manuales técnicos, vídeos, especificaciones de fabricantes' },
    { label: 'Despliegue', value: 'Widget embebido en web + API para integraciones futuras' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-imgenia-blue/5 via-white to-cyan-50 py-20 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-imgenia-blue hover:text-imgenia-navy mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-imgenia-blue/10 text-imgenia-blue font-semibold text-sm rounded-full mb-4">
                Caso de Éxito · Integra
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Test My Bike</h1>
              <p className="text-2xl text-imgenia-blue font-medium mb-6">
                Un técnico virtual para tu bicicleta
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Cómo <ImgeniaText /> automatizó el soporte técnico de una empresa española de alta tecnología con un asistente inteligente capaz de responder cualquier pregunta técnica sobre bicicletas, al instante y con fuentes documentales.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-imgenia-blue/20 to-cyan-300/20 rounded-3xl blur-3xl scale-110"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-12 flex items-center justify-center">
                  <img
                    src="/logo_test_my bike.png"
                    alt="Test My Bike"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Empresa española de alta tecnología
              </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">El reto</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Test My Bike es una empresa española de alta tecnología especializada en el mundo de la bicicleta. Con una base de clientes amplia y técnicamente exigente, el volumen de consultas de soporte sobre mantenimiento, ajustes y configuraciones desbordaba la capacidad de respuesta del equipo.
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
                  src="/logo_test_my bike.png"
                  alt="Test My Bike"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500 block">Empresa</span>
                  <span className="font-semibold text-gray-900">Test My Bike</span>
                </div>
                <div>
                  <span className="text-gray-500 block">País</span>
                  <span className="font-semibold text-gray-900">España</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Sector</span>
                  <span className="font-semibold text-gray-900">Alta tecnología · Ciclismo</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Ámbito</span>
                  <span className="font-semibold text-gray-900">Soporte técnico digital</span>
                </div>
                <div className="col-span-2">
                  <span className="text-gray-500 block">Producto Imgenia</span>
                  <span className="font-semibold text-imgenia-blue">IAMAI Bike</span>
                </div>
              </div>
            </div>
            <div className="bg-imgenia-blue/5 border border-imgenia-blue/20 rounded-2xl p-6">
              <p className="text-gray-700 text-sm leading-relaxed italic">
                "La necesidad era clara: automatizar el soporte técnico sin perder la calidad ni la precisión que los clientes de Test My Bike esperan."
              </p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">La solución: IAMAI Bike</h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Un asistente inteligente construido sobre la plataforma IAMAI de Imgenia, con acceso a toda la documentación técnica del universo bicicleta y capacidad para generar respuestas ricas y precisas al instante.
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

        <div className="bg-gradient-to-br from-imgenia-blue/5 to-cyan-50 rounded-3xl p-12 mb-24 border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Cómo funciona</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Un flujo de tres pasos que convierte cualquier pregunta técnica en una respuesta completa y documentada.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-imgenia-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-imgenia-blue font-bold text-lg">1</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Pregunta en lenguaje natural</h3>
              <p className="text-sm text-gray-600">"¿Cómo ajusto el freno hidráulico de mi bicicleta de montaña?"</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-imgenia-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-imgenia-blue font-bold text-lg">2</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Búsqueda en base documental</h3>
              <p className="text-sm text-gray-600">IAMAI Bike localiza la documentación técnica relevante del modelo y componente exacto.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="w-12 h-12 bg-imgenia-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-imgenia-blue font-bold text-lg">3</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Respuesta enriquecida</h3>
              <p className="text-sm text-gray-600">El cliente recibe una respuesta clara con imágenes, vídeos o documentos técnicos enlazados.</p>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Stack tecnológico</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {stack.map((item) => (
              <div key={item.label} className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5">
                <span className="font-semibold text-imgenia-blue w-32 flex-shrink-0 text-sm">{item.label}</span>
                <span className="text-gray-700 text-sm">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">El resultado</h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
            Test My Bike redujo un 70% el soporte humano repetitivo, mejoró la satisfacción del cliente con respuestas inmediatas y documentadas, y elevó su imagen digital como empresa tecnológica de referencia en el sector del ciclismo.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">-70%</div>
              <div className="text-white font-medium">Soporte humano repetitivo</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">24/7</div>
              <div className="text-white font-medium">Disponibilidad del asistente</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold text-imgenia-pink mb-2">↑ NPS</div>
              <div className="text-white font-medium">Satisfacción del cliente</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">¿Tienes miles de consultas técnicas que automatizar?</p>
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
