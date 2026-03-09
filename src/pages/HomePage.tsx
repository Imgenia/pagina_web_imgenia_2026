import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import VideoPresentation from '../components/VideoPresentation';
import SobreImgenia from '../components/sections/SobreImgenia';
import QueHacemos from '../components/sections/QueHacemos';
import LineasNegocio from '../components/sections/LineasNegocio';
import CasosExito from '../components/sections/CasosExito';
import Premios from '../components/sections/Premios';
import Metodo from '../components/sections/Metodo';
import Equipo from '../components/sections/Equipo';
import Proceso from '../components/sections/Proceso';
import Contacto from '../components/sections/Contacto';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <VideoPresentation />
        <SobreImgenia />
        <QueHacemos />
        <LineasNegocio />
        <CasosExito />
        <Premios />
        <Metodo />
        <Equipo />
        <Proceso />
        <Contacto />
      </main>
    </div>
  );
}
