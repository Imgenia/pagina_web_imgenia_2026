import Section from '../Section';
import ImgeniaText from '../ImgeniaText';
import { Mail, Calendar, ArrowRight } from 'lucide-react';
import { LEAD_FORM_URL } from '../../constants/cta';

export default function Contacto() {
  return (
    <Section
      id="contacto"
      title="¿Hablamos?"
      subtitle="Cuéntanos tu reto de negocio y te mostraremos cómo la IA puede ayudarte a resolverlo."
      background="gray"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8">
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-imgenia-blue mb-3 sm:mb-4" strokeWidth={1.5} />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Escríbenos directamente y te respondemos en menos de 24 horas.
            </p>
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center gap-2 text-imgenia-blue font-medium hover:gap-3 transition-all text-sm sm:text-base min-h-[44px] items-center break-all"
            >
              info@imgenia.es
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 p-5 sm:p-6 md:p-8">
            <Calendar className="w-8 h-8 sm:w-10 sm:h-10 text-imgenia-pink mb-3 sm:mb-4" strokeWidth={1.5} />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">Agenda una demo / reunión</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
              Reserva 30 minutos en nuestra agenda para una demo personalizada o una reunión.
            </p>
            <a
              href={LEAD_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-imgenia-pink font-medium hover:gap-3 transition-all text-sm sm:text-base min-h-[44px] items-center"
            >
              Reservar ahora
              <ArrowRight className="w-4 h-4 flex-shrink-0" />
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 p-5 sm:p-6 md:p-8 bg-white rounded-xl sm:rounded-2xl border border-gray-200 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4 px-1">
            ¿Listo para transformar tu negocio con IA?
          </h3>
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto px-1">
            Más de 50 empresas ya confían en <ImgeniaText className="inline" /> para sus proyectos de Inteligencia Artificial.
            Únete a ellas y descubre el poder de la IA aplicada a resultados reales.
          </p>
          <a
            href={LEAD_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-imgenia-blue text-white font-semibold rounded-lg hover:bg-imgenia-navy transition-colors text-sm sm:text-base min-h-[44px]"
          >
            Comenzar ahora
            <ArrowRight className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      </div>

      <div className="mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 md:pt-12 border-t border-gray-300">
        <div className="text-center px-2">
          <div className="flex justify-center mb-3 sm:mb-4">
            <img
              src="/LogotipoPositivo.png"
              alt="IMGENIA"
              className="h-10 sm:h-12 w-auto"
            />
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">Artificial Intelligence for Real Business</p>
          <p className="text-[10px] sm:text-xs text-gray-400">© 2026 <ImgeniaText className="inline" />. Todos los derechos reservados.</p>
        </div>
      </div>
    </Section>
  );
}
