import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y marca */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-3 sm:mb-4 min-h-[44px] flex items-center">
              <img
                src="/LogotipoPositivo.png"
                alt="IMGENIA"
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Inteligencia Artificial para resultados reales en tu negocio.
            </p>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4">
              Información legal
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link to="/politica-seguridad" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Política de seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4">
              Contacto
            </h3>
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center gap-2 text-xs sm:text-sm hover:text-imgenia-cyan transition-colors min-h-[44px] items-center break-all"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              info@imgenia.es
            </a>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 sm:mb-4">
              Web
            </h3>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <a href="/#sobre-imgenia" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Sobre IMGENIA
                </a>
              </li>
              <li>
                <a href="/#lineas-negocio" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Líneas de negocio
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-xs sm:text-sm hover:text-imgenia-cyan transition-colors py-2 block min-h-[44px] flex items-center">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-gray-500">
            © {currentYear} IMGENIA. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Protección de datos y cumplimiento normativo.
          </p>
        </div>
      </div>
    </footer>
  );
}
