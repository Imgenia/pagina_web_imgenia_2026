import Navigation from '../components/Navigation';
import LegalPageLayout from '../components/LegalPageLayout';

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LegalPageLayout
        title="Aviso legal"
        subtitle="Información general sobre el sitio web y condiciones de uso"
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

        <h2>1. Propiedad intelectual e industrial</h2>
        <p>
          El diseño del portal y sus códigos fuente, así como los logos, marcas y demás signos distintivos que aparecen en el mismo pertenecen a IMGENIA ARTIFICIAL INTELLIGENCE, S.L. y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.
        </p>

        <h2>2. Responsabilidad de los contenidos</h2>
        <p>
          IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde por la legalidad de otros sitios web de terceros que pudieran estar vinculados o enlazados desde este portal.
        </p>
        <p>
          IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, no será responsable del uso que terceros hagan de la información publicada en el portal, ni tampoco de los daños sufridos o pérdidas económicas que, de forma directa o indirecta, produzcan o puedan producir perjuicios económicos, materiales o sobre datos, provocados por el uso de dicha información.
        </p>

        <h2>3. Reproducción de contenidos</h2>
        <p>
          En virtud de lo dispuesto en la Ley de Propiedad Intelectual quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública de la totalidad o parte de los contenidos de esta página web, con fines comerciales en cualquier soporte y por cualquier medio técnico, sin la autorización de IMGENIA ARTIFICIAL INTELLIGENCE, S.L.
        </p>

        <h2>4. Ley aplicable</h2>
        <p>
          IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del sitio web y contenidos, o por el incumplimiento de las presentes condiciones.
        </p>
        <p>
          La relación entre el usuario y IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, se regirá por la normativa vigente y de aplicación en el territorio nacional. De surgir cualquier controversia en relación a la interpretación y/o a la aplicación de estas condiciones, las partes someterán los conflictos a la jurisdicción ordinaria, sometiéndose a los Jueces y Tribunales que correspondan conforme a Derecho.
        </p>
        <p>
          Así mismo le informamos que dispone de un procedimiento de resolución extrajudicial de controversias gratuito y accesible a todos los ciudadanos: la plataforma de resolución de litigios en línea de la Unión Europea, accesible a través del siguiente enlace:{' '}
          <a href="https://ec.europa.eu/consumers/odr/main/?event=main.home2.show" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/main/?event=main.home2.show
          </a>
        </p>

        <h2>5. Cookies</h2>
        <p>
          En el caso de emplear tecnología «cookie» en la web, dispone de un apartado concreto que le informa sobre su existencia así como de su política de uso. Consulte el apartado «<a href="/politica-cookies">Política de cookies</a>». En caso contrario, no se emplean cookies de navegación.
        </p>

        <h2>6. Datos personales de menores</h2>
        <p>
          Esta página web no está dirigida a usuarios menores de edad. Si usted es menor de edad, por favor no intente registrarse como usuario. Si descubrimos que por error hemos obtenido información personal de un menor, eliminaremos dicha información lo antes posible.
        </p>

        <h2>7. Ejercicio de los derechos de protección de datos</h2>
        <p>
          De acuerdo con los derechos que confiere la normativa vigente en materia de protección de datos de carácter personal, el usuario podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos dirigiendo su petición a la dirección postal indicada o al correo electrónico{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>.
        </p>
        <p>
          Para el ejercicio de estos derechos el solicitante deberá estar suficientemente identificado en la solicitud.
        </p>

        <h2>8. Reclamaciones</h2>
        <p>
          Para cualquier reclamación puede dirigirse al correo electrónico{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>. Igualmente podrá dirigirse a la Agencia Española de Protección de Datos:{' '}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
            https://www.aepd.es
          </a>
        </p>
      </LegalPageLayout>
    </div>
  );
}
