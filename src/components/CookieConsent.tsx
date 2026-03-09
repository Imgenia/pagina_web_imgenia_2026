import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'imgenia_cookie_consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900 text-white shadow-2xl border-t border-gray-700"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-gray-200 leading-relaxed flex-1">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y mostrar contenido relevante. 
            Puedes aceptar todas las cookies o configurar tus preferencias en nuestra{' '}
            <Link to="/politica-cookies" className="text-imgenia-cyan underline hover:no-underline">
              Política de Cookies
            </Link>.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Link
              to="/politica-cookies"
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-600 rounded-lg transition-colors"
            >
              Configurar
            </Link>
            <button
              onClick={accept}
              className="px-5 py-2 text-sm font-semibold bg-imgenia-blue text-white rounded-lg hover:bg-imgenia-navy transition-colors"
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
