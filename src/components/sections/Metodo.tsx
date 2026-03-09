import Section from '../Section';
import ImgeniaText from '../ImgeniaText';

export default function Metodo() {
  return (
    <Section
      id="metodo"
      title={<>Método <ImgeniaText /></>}
      subtitle="Arquitectura propietaria vs soluciones plug-and-play genéricas."
      background="white"
    >
      <div className="max-w-5xl mx-auto bg-white border-2 border-gray-200 rounded-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-8 bg-red-50/50 border-r border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-red-500">✕</span> Enfoque Plug-&-Play
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Solución genérica one-size-fits-all</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Vendor lock-in con un único proveedor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Sin control sobre los datos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">•</span>
                <span>Imposible auditar decisiones</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-green-50/50">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="text-green-500">✓</span> Arquitectura <ImgeniaText />
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Personalizado para tu caso de uso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Multi-proveedor, cambio sin fricción</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Anonimización automática built-in</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                <span>Trazabilidad completa y compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
