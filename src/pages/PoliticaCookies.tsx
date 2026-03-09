import Navigation from '../components/Navigation';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LegalPageLayout
        title="Política de cookies"
        subtitle="Información sobre el uso de cookies en este sitio web"
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

        <h2>1. Objeto e información al usuario</h2>
        <p>
          En caso de que este sitio web utilice cookies, la normativa vigente obliga a informar al usuario de forma clara sobre los tipos de cookies que se utilizan, su finalidad, duración y demás datos de interés, así como a permitir que pueda dar o revocar su consentimiento antes de su utilización.
        </p>
        <p>
          Los tipos de cookies, su descripción, finalidad y duración dependen del desarrollo concreto de la web. Por ello, esta política de cookies adapta su contenido a las cookies que realmente son utilizadas en este sitio.
        </p>
        <p>
          Además de esta política de cookies, en la web se habilita un mensaje visible que solicita el consentimiento previo del usuario antes de usar las cookies o que permite configurarlas, de conformidad con la normativa aplicable.
        </p>

        <h2>2. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web pueden almacenar en su dispositivo (ordenador, tablet, móvil) cuando los visita. Permiten que el sitio recuerde acciones o preferencias durante un tiempo, de modo que no tenga que volver a indicarlas en cada visita.
        </p>

        <h2>3. Tipos de cookies que puede utilizar este sitio</h2>
        <p>
          Según la finalidad y el titular, este sitio puede hacer uso de las siguientes categorías de cookies:
        </p>
        <ul>
          <li>
            <strong>Cookies técnicas (esenciales):</strong> Son necesarias para la navegación y el buen funcionamiento de la página web, controlar el tráfico y la comunicación de datos, identificar la sesión y, en su caso, garantizar la seguridad de las operaciones. Sin ellas, algunas funciones básicas no podrían ofrecer correctamente.
          </li>
          <li>
            <strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar la medición y el análisis estadístico de la utilización que se hace de la web (páginas visitadas, tiempo de permanencia, etc.), con el fin de mejorar el funcionamiento y los contenidos del sitio.
          </li>
          <li>
            <strong>Cookies de preferencias o personalización:</strong> Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios (por ejemplo, el idioma, el número de resultados a mostrar o el aspecto del servicio en función del tipo de navegador).
          </li>
          <li>
            <strong>Cookies publicitarias o comportamentales:</strong> Permiten analizar los hábitos de navegación en internet para mostrar publicidad relacionada con el perfil de navegación del usuario, cuando este sitio utilice este tipo de cookies y el usuario haya dado su consentimiento.
          </li>
        </ul>
        <p>
          En todo caso, la instalación de cookies que requieran consentimiento no se llevará a cabo sin que el usuario haya aceptado previamente su uso mediante el aviso de cookies habilitado en la web.
        </p>

        <h2>4. Consentimiento y configuración</h2>
        <p>
          Al acceder a este sitio web, el usuario puede aceptar todas las cookies, rechazarlas o acceder a la configuración de cookies para elegir qué categorías desea permitir. Si no se selecciona ninguna opción, no se utilizarán cookies que requieran consentimiento y se volverá a solicitar la elección en futuros accesos cuando así corresponda.
        </p>
        <p>
          El usuario puede modificar en cualquier momento sus preferencias a través del aviso de cookies o mediante las opciones de configuración que se ofrezcan en la web. También puede configurar su navegador para bloquear o eliminar cookies; en ese caso, algunas funciones del sitio podrían no estar disponibles.
        </p>

        <h2>5. Cómo gestionar las cookies en su navegador</h2>
        <p>
          La mayoría de los navegadores permiten gestionar las cookies desde su configuración. Puede consultar la sección de ayuda o opciones de su navegador para saber cómo activar, bloquear o eliminar cookies. A título informativo, suele encontrarse en menús como «Privacidad», «Seguridad» o «Cookies».
        </p>
        <p>
          Tenga en cuenta que bloquear todas las cookies puede afectar al correcto funcionamiento de algunas partes de este sitio web.
        </p>

        <h2>6. Más información</h2>
        <p>
          Para más información sobre el tratamiento de sus datos personales en relación con la navegación y el uso de la web, puede consultar nuestra{' '}
          <a href="/politica-privacidad">Política de privacidad</a>.
        </p>
        <p>
          Para cualquier consulta sobre el uso de cookies en este sitio puede dirigirse a{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>.
        </p>
      </LegalPageLayout>
    </div>
  );
}
