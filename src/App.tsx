import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HomePage from './pages/HomePage';
import SdrIADetail from './components/sections/products/SdrIADetail';
import NorciDetail from './components/sections/products/NorciDetail';
import IncoTradingDetail from './components/sections/products/IncoTradingDetail';
import IamaiEolicaDetail from './components/sections/products/IamaiEolicaDetail';
import TestMyBikeDetail from './components/sections/products/TestMyBikeDetail';
import AJPDetail from './components/sections/products/AJPDetail';
import AvisoLegal from './pages/AvisoLegal';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import PoliticaCookies from './pages/PoliticaCookies';
import PoliticaSeguridad from './pages/PoliticaSeguridad';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <CookieConsent />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sdr-ia" element={<SdrIADetail />} />
            <Route path="/caso-norci" element={<NorciDetail />} />
            <Route path="/caso-incotrading" element={<IncoTradingDetail />} />
            <Route path="/caso-iamai-eolica" element={<IamaiEolicaDetail />} />
            <Route path="/caso-test-my-bike" element={<TestMyBikeDetail />} />
            <Route path="/caso-ajp" element={<AJPDetail />} />
            <Route path="/aviso-legal" element={<AvisoLegal />} />
            <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
            <Route path="/politica-cookies" element={<PoliticaCookies />} />
            <Route path="/politica-seguridad" element={<PoliticaSeguridad />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
