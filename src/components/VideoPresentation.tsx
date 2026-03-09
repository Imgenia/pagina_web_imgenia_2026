export default function VideoPresentation() {
  return (
    <section className="bg-gray-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-imgenia-blue font-semibold text-sm uppercase tracking-widest mb-3">Presentación</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Conoce Imgenia en 2 minutos
          </h2>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
          <iframe
            src="https://player.vimeo.com/video/1171719812?badge=0&autopause=0&player_id=0&app_id=58479"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            title="IMGENIA"
          />
        </div>
      </div>
    </section>
  );
}
