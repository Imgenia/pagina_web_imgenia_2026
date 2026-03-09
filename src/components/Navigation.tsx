import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre IMGENIA', href: '/#sobre-imgenia' },
  { label: 'Qué Hacemos', href: '/#que-hacemos' },
  { label: 'Líneas de Negocio', href: '/#lineas-negocio' },
  { label: 'Premios', href: '/#premios' },
  { label: 'Agradecimientos', href: '/#agradecimientos' },
  { label: 'Método', href: '/#metodo' },
  { label: 'Equipo', href: '/#equipo' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link to="/" className="flex items-center min-h-[44px]">
            <img
              src="/LogotipoPositivo.png"
              alt="IMGENIA"
              className="h-8 sm:h-9 md:h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-x-10">
            {navItems.map((item) => (
              item.href === '/' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-xs font-medium text-gray-600 hover:text-imgenia-blue transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('/#')) {
                      if (location.pathname === '/') {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }
                    }
                  }}
                  className="text-xs font-medium text-gray-600 hover:text-imgenia-blue transition-colors whitespace-nowrap"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 min-w-[44px] min-h-[44px] flex items-center justify-center -mr-1"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              item.href === '/' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-sm font-medium text-gray-600 hover:text-imgenia-blue transition-colors py-3 px-2 rounded-lg active:bg-gray-100 min-h-[44px] flex items-center"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavigation(item.href)}
                  className="block text-sm font-medium text-gray-600 hover:text-imgenia-blue transition-colors py-3 px-2 rounded-lg active:bg-gray-100 min-h-[44px] flex items-center"
                >
                  {item.label}
                </a>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
