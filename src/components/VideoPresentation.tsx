export default function VideoPresentation() {
  return (
    <section className="bg-gray-950 py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6 sm:mb-10">
          <p className="text-imgenia-blue font-semibold text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">Presentación</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-1">
            Conoce Imgenia en 2 minutos
          </h2>
        </div>
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video w-full">
          <iframe
            src="https://player.vimeo.com/video/1171719812?badge=0&autopause=0&player_id=0&app_id=58479"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="IMGENIA"
          />
        </div>
      </div>
    </section>
  );
}
