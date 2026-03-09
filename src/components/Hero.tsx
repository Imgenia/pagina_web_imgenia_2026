import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-imgenia-pink/5 via-imgenia-blue/5 to-imgenia-navy/5"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <img
            src="/LogotipoPositivo.png"
            alt="IMGENIA"
            className="h-24 md:h-32"
          />
        </div>

        <p className="text-2xl md:text-3xl font-light text-gray-600 mb-4">
          Artificial Intelligence for Real Business
        </p>

        <div className="inline-block mt-8 px-4 py-2 border border-imgenia-blue/20 rounded-full">
          <span className="text-sm font-medium text-imgenia-navy">Dossier Corporativo 2026</span>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('sobre-imgenia')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 p-3 rounded-full border border-gray-300 hover:border-imgenia-blue hover:bg-imgenia-blue/5 transition-all duration-300 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-gray-600" />
      </button>
    </section>
  );
}
