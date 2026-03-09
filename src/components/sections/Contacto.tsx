import Section from '../Section';
import ImgeniaText from '../ImgeniaText';
import { Mail, Calendar, ArrowRight } from 'lucide-react';

export default function Contacto() {
  return (
    <Section
      id="contacto"
      title="¿Hablamos?"
      subtitle="Cuéntanos tu reto de negocio y te mostraremos cómo la IA puede ayudarte a resolverlo."
      background="gray"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <Mail className="w-10 h-10 text-imgenia-blue mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Escríbenos directamente y te respondemos en menos de 24 horas.
            </p>
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center gap-2 text-imgenia-blue font-medium hover:gap-3 transition-all"
            >
              info@imgenia.es
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <Calendar className="w-10 h-10 text-imgenia-pink mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Agenda una Demo</h3>
            <p className="text-gray-600 mb-4">
              Reserva 30 minutos en nuestra agenda para una demo personalizada.
            </p>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-imgenia-pink font-medium hover:gap-3 transition-all"
            >
              Reservar ahora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 p-8 bg-white rounded-2xl border border-gray-200 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            ¿Listo para transformar tu negocio con IA?
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Más de 50 empresas ya confían en <ImgeniaText className="inline" /> para sus proyectos de Inteligencia Artificial.
            Únete a ellas y descubre el poder de la IA aplicada a resultados reales.
          </p>
          <a
            href="mailto:info@imgenia.es"
            className="inline-flex items-center gap-2 px-8 py-4 bg-imgenia-blue text-white font-semibold rounded-lg hover:bg-imgenia-navy transition-colors"
          >
            Comenzar ahora
            <ArrowRight className="w-5 h-5" />
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
    </Section>
  );
}
