import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y marca */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/LogotipoPositivo.png"
                alt="IMGENIA"
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Inteligencia Artificial para resultados reales en tu negocio.
            </p>
          </div>

          {/* Enlaces legales */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
              Información legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/aviso-legal" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Aviso legal
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidad" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link to="/politica-cookies" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Política de cookies
                </Link>
              </li>
              <li>
                <Link to="/politica-seguridad" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Política de seguridad
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
              Contacto
            </h3>
            <a
              href="mailto:info@imgenia.es"
              className="inline-flex items-center gap-2 text-sm hover:text-imgenia-cyan transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              info@imgenia.es
            </a>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
              Web
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/#sobre-imgenia" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Sobre IMGENIA
                </a>
              </li>
              <li>
                <a href="/#lineas-negocio" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Líneas de negocio
                </a>
              </li>
              <li>
                <a href="/#contacto" className="text-sm hover:text-imgenia-cyan transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
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
