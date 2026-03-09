import Navigation from '../components/Navigation';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PoliticaSeguridad() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LegalPageLayout
        title="Política de seguridad (versión pública)"
        subtitle="Compromiso de IMGENIA con la seguridad de la información y la protección de datos"
        lastUpdated="02/10/2025"
      >
        {/* Identificación del titular */}
        <div className="bg-imgenia-blue/5 border border-imgenia-blue/20 rounded-xl p-6 mb-10">
          <h2 className="!mt-0 text-imgenia-navy border-0 pb-0">Identificación del titular</h2>
          <dl className="grid gap-2 text-[15px]">
            <div>
              <dt className="font-semibold text-gray-900">Titular</dt>
              <dd>IMGENIA ARTIFICIAL INTELLIGENCE, S.L.</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">NIF</dt>
              <dd>B22497218</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Domicilio</dt>
              <dd>C/ de Villablanca, 85, 28032 Madrid (Madrid), España</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Email</dt>
              <dd>
                <a href="mailto:info@imgenia.es">info@imgenia.es</a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Registro Mercantil</dt>
              <dd>Registro Mercantil de Madrid, Hoja M-855779, Inscripción 1 (02/06/2025)</dd>
            </div>
          </dl>
        </div>

        <h2>1. Introducción</h2>
        <p>
          En IMGENIA ARTIFICIAL INTELLIGENCE, S.L. entendemos la seguridad de la información y la protección de datos como un pilar esencial de nuestro trabajo. Esta Política de Seguridad (versión pública) describe nuestro compromiso y las principales medidas organizativas y técnicas que aplicamos para proteger la información y los datos personales.
        </p>

        <h2>2. Ámbito de aplicación</h2>
        <p>
          Esta política aplica a los tratamientos de datos personales y a la información gestionada por IMGENIA ARTIFICIAL INTELLIGENCE, S.L. en el marco de sus servicios, comunicaciones y uso del sitio web.
        </p>

        <h2>3. Principios</h2>
        <ul>
          <li><strong>Confidencialidad:</strong> acceso únicamente por personal autorizado y para fines legítimos.</li>
          <li><strong>Integridad:</strong> mecanismos para evitar alteraciones no autorizadas y preservar la exactitud.</li>
          <li><strong>Disponibilidad:</strong> medidas para garantizar el acceso a la información cuando sea necesario.</li>
          <li><strong>Minimización y proporcionalidad:</strong> tratamos los datos necesarios para cada finalidad.</li>
          <li><strong>Privacidad desde el diseño y por defecto:</strong> incorporamos controles de protección desde el inicio.</li>
        </ul>

        <h2>4. Medidas organizativas</h2>
        <ul>
          <li>Control de accesos y gestión de permisos por roles (solo lo necesario).</li>
          <li>Compromisos de confidencialidad con personal y terceros que acceden a información.</li>
          <li>Formación y concienciación en materia de seguridad y protección de datos.</li>
          <li>Procedimiento de gestión de incidencias y brechas de seguridad (detección, análisis, contención, notificación y aprendizaje).</li>
          <li>Evaluación de proveedores y, cuando procede, firma de acuerdos de encargo del tratamiento.</li>
        </ul>

        <h2>5. Medidas técnicas</h2>
        <ul>
          <li>Uso de comunicaciones cifradas (por ejemplo, HTTPS/TLS) cuando aplica.</li>
          <li>Copias de seguridad y pruebas periódicas de recuperación.</li>
          <li>Registro y monitorización de accesos y eventos relevantes cuando procede.</li>
          <li>Actualización y mantenimiento de sistemas (parches de seguridad).</li>
          <li>Medidas de protección frente a malware y accesos no autorizados.</li>
        </ul>

        <h2>6. Conservación y eliminación</h2>
        <p>
          Conservamos la información durante el tiempo necesario para las finalidades descritas en nuestra{' '}
          <a href="/politica-privacidad">Política de Privacidad</a> y durante los plazos legales aplicables. Una vez finalizados, aplicamos medidas de eliminación o anonimización cuando corresponde.
        </p>

        <h2>7. Contacto</h2>
        <p>
          Para consultas relacionadas con seguridad o protección de datos, puede escribirnos a{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>.
        </p>
      </LegalPageLayout>
    </div>
  );
}
