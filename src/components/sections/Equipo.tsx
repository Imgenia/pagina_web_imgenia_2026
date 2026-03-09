import Section from '../Section';

const fundadores = [
  {
    nombre: 'Antonio Marin Fuentes',
    rol: 'COO · Chief Operating Officer',
    frase: 'La tecnología debe adaptarse a las personas, no al revés.',
    linkedin: 'https://www.linkedin.com/company/imgenia/',
    foto: '/Jose Luis.png',
  },
  {
    nombre: 'Arturo Mesa',
    rol: 'CEO y Fundador',
    frase: 'Creo en la IA que ayuda a dormir tranquilo.',
    linkedin: 'https://linkedin.com/in/arturo-mesa-540579a2',
    foto: '/arturo03.png',
  },
  {
    nombre: 'Ángel Gómez',
    rol: 'CTO y Fundador',
    frase: 'La confianza se construye con cada línea de código.',
    linkedin: 'https://linkedin.com/in/angel-gomez-calcerrada',
    foto: '/angel.jpeg',
  },
  {
    nombre: 'Julio Gil',
    rol: 'Director de Investigación',
    frase: 'Innovación responsable es nuestro compromiso diario.',
    linkedin: 'https://www.linkedin.com/company/imgenia/',
    foto: '/julio02.png',
  },
];

export default function Equipo() {
  return (
    <Section
      id="equipo"
      title="El equipo"
      subtitle="Cuatro socios con visión compartida: construir tecnología de IA que genere impacto real en las empresas."
      background="gray"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {fundadores.map((persona) => (
          <div
            key={persona.nombre}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <div className="relative overflow-hidden">
              <img
                src={persona.foto}
                alt={persona.nombre}
                className="w-full aspect-square object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-gray-900 leading-tight">{persona.nombre}</h3>
              <p className="text-imgenia-blue font-semibold text-sm mt-0.5 mb-4">{persona.rol}</p>
              <blockquote className="text-gray-500 text-sm italic leading-relaxed flex-1 border-l-2 border-imgenia-pink/40 pl-3">
                "{persona.frase}"
              </blockquote>
              <a
                href={persona.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-imgenia-blue hover:text-imgenia-pink transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Ver perfil
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
