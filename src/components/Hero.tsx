import { ChevronDown } from 'lucide-react';
import { DOSSIER_MEET_URL } from '../constants/cta';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-20 pb-16">
      <div className="absolute inset-0 bg-gradient-to-br from-imgenia-pink/5 via-imgenia-blue/5 to-imgenia-navy/5" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex justify-center mb-6 sm:mb-8">
          <img
            src="/LogotipoPositivo.png"
            alt="IMGENIA"
            className="h-20 sm:h-24 md:h-32 w-auto max-w-[85vw] object-contain"
          />
        </div>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-3 sm:mb-4 px-2">
          Artificial Intelligence for Real Business
        </p>

        <a
          href={DOSSIER_MEET_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-6 sm:mt-8 px-3 py-1.5 sm:px-4 sm:py-2 border border-imgenia-blue/20 rounded-full hover:border-imgenia-blue hover:bg-imgenia-blue/5 transition-colors min-h-[44px]"
        >
          <span className="text-xs sm:text-sm font-medium text-imgenia-navy">Dossier Corporativo 2026</span>
        </a>
      </div>

      <button
        type="button"
        aria-label="Ir a Sobre IMGENIA"
        onClick={() => document.getElementById('sobre-imgenia')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 p-3 rounded-full border border-gray-300 hover:border-imgenia-blue hover:bg-imgenia-blue/5 transition-all duration-300 animate-bounce min-w-[44px] min-h-[44px] flex items-center justify-center"
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  );
}
