import { Trophy, ExternalLink, Users, Calendar, Building2, Award } from 'lucide-react';

const metricas = [
  { valor: '609',  label: 'Invitados a la gala',        icono: Users },
  { valor: '45',   label: 'Años de ASEYACOVI',           icono: Calendar },
  { valor: '+50',  label: 'Empresas patrocinadoras',     icono: Building2 },
  { valor: '2025', label: 'Año del reconocimiento',      icono: Award },
];

export default function Premios() {
  return (
    <section id="premios" className="bg-[#070d1a] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Cabecera ─────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2 mb-6">
            <Trophy className="w-4 h-4 text-amber-400" strokeWidth={2} />
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase">
              Reconocimiento Oficial · ASEYACOVI 2025
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Premio a la Pyme<br />
            <span className="text-imgenia-cyan">más Innovadora</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            La Asociación de Empresarios y Autónomos de Colmenar Viejo reconoció a IMGENIA como
            la empresa más innovadora del tejido empresarial colmenareño.
          </p>
        </div>

        {/* ── Banda "En colaboración con" ───────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-16">
          <span className="text-gray-500 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
            En colaboración con
          </span>
          <div className="hidden sm:block h-px w-12 bg-gray-700" />
          <div className="flex items-center gap-8">
            {/* Logo ASEYACOVI: fondo negro → mix-blend-mode screen elimina el negro sobre fondo oscuro */}
            <img
              src="/Logo-Aseyacovi-textos.png"
              alt="ASEYACOVI"
              className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="h-8 w-px bg-gray-600" />
            {/* Logo Colmenar Viejo: PNG con fondo claro → caja blanca */}
            <div className="bg-white rounded-xl px-4 py-2 shadow-md">
              <img
                src="/colmenar.png"
                alt="Ayuntamiento de Colmenar Viejo"
                className="h-10 w-auto object-contain"
              />
            </div>
          </div>
          <div className="hidden sm:block h-px w-12 bg-gray-700" />
        </div>

        {/* ── Bloque principal: historia + galería ─────────────────── */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Historia */}
          <div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Una noche de celebración<br />e innovación
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-[15px]">
              <p>
                En el marco de la{' '}
                <strong className="text-white">IX Gala Empresarial de ASEYACOVI</strong>,
                celebrada con 609 invitados y patrocinada por más de medio centenar de empresas,{' '}
                <strong className="text-imgenia-cyan">
                  IMGENIA recibió el galardón a la Pyme más Innovadora
                </strong>
                , que distingue a las empresas más destacadas por su apuesta por la innovación y la tecnología.
              </p>
              <p>
                El evento coincidió con el{' '}
                <strong className="text-white">45º aniversario de la asociación</strong>,
                un hito que reafirma su papel como referente en la promoción del emprendimiento en
                el norte de la Comunidad de Madrid. Reunió a empresarios, representantes
                institucionales y al alcalde{' '}
                <strong className="text-white">Carlos Blázquez</strong> al frente del equipo
                de gobierno municipal.
              </p>
              <p>
                Nuestra colaboración con{' '}
                <strong className="text-white">
                  ASEYACOVI y el Ayuntamiento de Colmenar Viejo
                </strong>{' '}
                va más allá de este reconocimiento: llevamos varios años desarrollando proyectos
                conjuntos para impulsar a Colmenar Viejo como municipio de referencia en
                innovación e inteligencia artificial, a través de ponencias, cursos y productos
                para todo el tejido empresarial local.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://colmenaraldia.com/2025/11/07/la-gala-anual-de-aseyacovi-se-consolida-como-el-mejor-encuentro-empresarial-del-norte-de-la-comunidad-de-madrid/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-imgenia-cyan text-white font-semibold px-5 py-3 rounded-xl hover:bg-imgenia-cyan/80 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Noticia en Colmenar al Día
              </a>
              <a
                href="https://www.linkedin.com/posts/angel-gomez-calcerrada_imgenia-innovaci%C3%B3n-premiopymeinnovadora-activity-7393918807959941120-G2ev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#0077b5] text-[#0077b5] font-semibold px-5 py-3 rounded-xl hover:bg-[#0077b5]/10 transition-colors text-sm"
              >
                {/* LinkedIn icon inline para no depender de lucide */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Ver en LinkedIn
              </a>
            </div>
          </div>

          {/* Galería */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 rounded-2xl overflow-hidden h-52 sm:h-64">
              <img
                src="/_V6A3193.jpg"
                alt="IMGENIA recibiendo el Premio Pyme más Innovadora · ASEYACOVI 2025"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-44">
              <img
                src="/_V6A3025.jpg"
                alt="IX Gala Empresarial ASEYACOVI 2025"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="rounded-xl overflow-hidden h-36 sm:h-44">
              <img
                src="/_V6A3031.jpg"
                alt="IX Gala Empresarial ASEYACOVI 2025"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* ── Métricas ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {metricas.map((m) => {
            const Icon = m.icono;
            return (
              <div
                key={m.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/8 transition-colors"
              >
                <Icon className="w-5 h-5 text-imgenia-cyan mx-auto mb-3" strokeWidth={1.5} />
                <div className="text-3xl font-black text-white mb-1">{m.valor}</div>
                <div className="text-gray-400 text-sm leading-snug">{m.label}</div>
              </div>
            );
          })}
        </div>

        {/* ── Cita final ───────────────────────────────────────────── */}
        <div className="relative rounded-2xl border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-imgenia-cyan/5 via-transparent to-imgenia-purple/5" />
          <div className="relative px-8 py-10 text-center">
            <img
              src="/isotipo-redondo.png"
              alt="IMGENIA"
              className="h-12 mx-auto mb-5 opacity-75"
            />
            <blockquote className="text-xl lg:text-2xl font-semibold text-white italic mb-3">
              "La innovación no es un destino, es una forma de caminar."
            </blockquote>
            <p className="text-imgenia-cyan font-semibold text-sm tracking-wide">
              IMGENIA · Premio Pyme más Innovadora · ASEYACOVI 2025
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
