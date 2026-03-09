import Navigation from '../components/Navigation';
import LegalPageLayout from '../components/LegalPageLayout';

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <LegalPageLayout
        title="Política de privacidad"
        subtitle="Información sobre el tratamiento de sus datos personales"
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

        <h2>1. Responsable de protección de datos</h2>
        <p>
          El titular es el responsable de los datos personales que son recabados por la navegación y uso de esta web conforme a los requisitos establecidos por el Reglamento (UE) 2016/679 relativo a la protección de datos de las personas físicas, así como conforme a la Ley 34/2002 de 11 de julio de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).
        </p>
        <p>
          Al utilizar este sitio web entendemos que ha leído y comprendido la información que se expone en relación con el tratamiento de sus datos de carácter personal.
        </p>

        <h2>2. Política de protección de datos</h2>
        <p>
          El responsable aplica el principio de responsabilidad activa en el tratamiento de los datos de carácter personal, manteniendo una constante puesta al día y una promoción de la mejora continua del sistema de protección de datos conforme a los requisitos legales exigibles, garantizando en todo caso:
        </p>
        <ul>
          <li>el respeto a las libertades y los derechos fundamentales de las personas físicas</li>
          <li>que los datos son tratados de manera lícita, leal y transparente</li>
          <li>que los datos tratados son exactos, adecuados, pertinentes y limitados en relación con los fines para los que son recogidos</li>
          <li>que los fines para los que son recogidos son explícitos y legítimos y que no son tratados de manera incompatible con dichos fines</li>
        </ul>
        <p>
          La finalidad de este documento es informar a los usuarios sobre qué hacemos con sus datos personales, cómo se recaban, para qué se utilizan, los derechos que les asisten así como toda la información legal necesaria establecida por la normativa vigente.
        </p>

        <h2>3. Datos recabados, finalidad y licitud</h2>
        <p>
          Los datos de carácter personal tratados son los aportados por los usuarios a través de los formularios disponibles en este sitio web y son los mínimos exigibles para poder:
        </p>
        <ul>
          <li>enviarle información sobre nuestros productos y servicios</li>
          <li>atender consultas</li>
          <li>tramitar pedidos, así como elaborar las facturas correspondientes, informar sobre el estado de los pedidos, atender reclamaciones y cualquier otra gestión derivada de la prestación del servicio realizado a través de este sitio web</li>
        </ul>
        <p>
          Dichas finalidades están basadas en principios legales de tratamiento de los datos recogidos por la normativa vigente: para la ejecución de un contrato o la prestación de un servicio a los usuarios, para el cumplimiento de obligaciones legales, por el interés legítimo y con el consentimiento de los usuarios.
        </p>

        <h2>4. Formularios web</h2>
        <p>
          Los datos personales recabados a través del formulario web de contacto se usan para poder atender cualquier consulta que el usuario realice a través del mismo.
        </p>
        <p>
          Los datos personales recabados en el formulario de pedidos tienen la finalidad de tratar los datos necesarios para la correcta gestión de sus pedidos.
        </p>
        <p>
          El tratamiento de los datos está legitimado por el consentimiento que usted nos presta al aceptar expresamente las condiciones del tratamiento informadas a través de esta política de privacidad.
        </p>

        <h2>5. Destinatarios de los datos</h2>
        <p>
          Los datos de carácter personal obtenidos a través de los formularios web son registrados y conservados en soportes electrónicos controlados y supervisados por el responsable del tratamiento.
        </p>
        <p>
          Sus datos personales no serán comunicados a terceros, con la salvedad de que dicha comunicación de datos esté amparada en una obligación legal o cuando, para la correcta prestación del servicio o la ejecución del contrato, sea necesario comunicar sus datos a terceros para poder efectuar el pago (pasarelas de pago) o gestionar las entregas de los productos (transportistas), amparada dicha cesión en las necesidades del servicio.
        </p>
        <p>
          En relación con el pago mediante otras pasarelas de pago, recomendamos al usuario que lea la política de privacidad de cada una para entender cómo maneja la información personal. A título informativo:
        </p>
        <ul>
          <li>
            <strong>Redsys Servicios de Procesamiento, S.L.</strong> («Redsys»), con domicilio en Madrid, calle Francisco Sancha, número 12, y con C.I.F. B-85955367, que cumple íntegramente con la legislación vigente en materia de protección de datos de carácter personal y con los compromisos de confidencialidad propios de su actividad. Redsys ha adoptado las medidas técnicas necesarias para mantener el nivel de seguridad requerido. Puede ver su política de privacidad en:{' '}
            <a href="https://www.redsys.es/legal/20180223_politica_de_privacidad_web_publica_redsys.pdf" target="_blank" rel="noopener noreferrer">
              https://www.redsys.es/legal/20180223_politica_de_privacidad_web_publica_redsys.pdf
            </a>
          </li>
          <li>
            <strong>PayPal (Europe) S.à.r.l. et Cie, S.C.A.</strong> (R.C.S. Luxembourg B 118 349), cuya política de privacidad establece las medidas de seguridad adecuadas para el correcto tratamiento de los datos personales de los usuarios. Puede ver su política de privacidad en:{' '}
            <a href="https://www.paypal.com/es/webapps/mpp/ua/privacy-full?locale.x=es_ES" target="_blank" rel="noopener noreferrer">
              https://www.paypal.com/es/webapps/mpp/ua/privacy-full
            </a>
          </li>
        </ul>
        <p>
          Para los casos en los que la comunicación de datos a terceros no esté amparada en las bases legales establecidas en el apartado anterior, la comunicación de datos a otros destinatarios solo se realizará si el usuario ha dado su consentimiento expreso.
        </p>
        <p>
          Se mantienen unos criterios estrictos de selección de encargados de tratamiento y el compromiso contractual con cada uno de ellos para cumplir y hacer cumplir las obligaciones establecidas en materia de protección de datos.
        </p>

        <h2>6. Transferencias internacionales de datos</h2>
        <p>
          En el caso de que existan transferencias internacionales de datos, IMGENIA ARTIFICIAL INTELLIGENCE, S.L. garantizará que la transferencia de sus datos personales se realiza de conformidad con las leyes de privacidad aplicables y, en particular, que se apliquen las medidas contractuales, técnicas y organizativas necesarias, como las cláusulas contractuales estándar aprobadas por la Comisión Europea.
        </p>
        <p>
          Puede obtener más información sobre el tratamiento de los datos personales de nuestra organización solicitándola en el correo{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>.
        </p>

        <h2>7. Medidas técnicas y organizativas de protección de datos</h2>
        <p>
          Los soportes cuentan con las medidas técnicas y organizativas necesarias que garantizan la confidencialidad y la conservación de los datos personales obtenidos a través de la web.
        </p>
        <p>
          Los datos personales recabados desde la web son tratados mediante protocolo HTML con certificado SSL válido.
        </p>
        <p>
          El personal implicado en las operaciones de tratamiento de datos (acceso, edición, borrado, etc.) está capacitado para ello, formado y comprometido con esta política de protección de datos.
        </p>

        <h2>8. Conservación de los datos</h2>
        <p>
          Los datos de carácter personal obtenidos a través del formulario de contacto serán conservados el tiempo necesario para atender la solicitud o consulta realizada.
        </p>
        <p>
          Los datos de carácter personal obtenidos a través del formulario de pedidos serán conservados mientras exista una relación contractual y/o comercial con usted o mientras usted no ejerza su derecho de supresión, cancelación y/o limitación del tratamiento de sus datos.
        </p>
        <p>
          Vencida la relación contractual, mantendremos la información debidamente bloqueada, sin darle ningún uso, mientras pueda ser necesaria para el ejercicio o defensa de reclamaciones o pueda derivarse algún tipo de responsabilidad judicial, legal o contractual de su tratamiento que deba ser atendida y para lo cual sea necesaria su recuperación.
        </p>
        <p>
          En caso de que haya aceptado expresamente el envío de información comercial, conservaremos sus datos de contacto hasta que usted nos comunique su decisión de anular dichos envíos comerciales.
        </p>

        <h2>9. Información sobre decisiones automatizadas (incluida la elaboración de perfiles)</h2>
        <p>
          Normalmente no adoptamos decisiones automáticas, pero cuando lo hagamos dejaremos claro que se está adoptando ese tipo de decisión.
        </p>
        <p>
          No obstante, IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, recoge varios apartados dedicados a la personalización de servicios a fin de mostrar publicidad personalizada al ingresar en su sitio web y también para el envío de comunicaciones personalizadas.
        </p>
        <p>
          IMGENIA ARTIFICIAL INTELLIGENCE, S.L., con CIF/NIF B22497218, reconoce la posibilidad de la realización de perfiles para mejorar su oferta de productos o personalizar el envío de ofertas comerciales o dar un trato más personalizado al cliente.
        </p>

        <h2>10. Oposición a que los datos sean tratados con fines publicitarios</h2>
        <p>
          Si diste tu consentimiento para que utilizáramos tus datos con fines publicitarios y no deseas seguir recibiendo publicidad, puedes revocar el consentimiento prestado en cualquier momento mediante el envío de un correo electrónico al responsable en{' '}
          <a href="mailto:info@imgenia.es">info@imgenia.es</a>.
        </p>

        <h2>11. Cambios en la Política de Privacidad</h2>
        <p>
          Es posible que modifiquemos la información contenida en esta Política de Privacidad y Cookies cuando lo estimemos conveniente. En caso de que lo hagamos, te lo notificaremos por distintas vías a través de la plataforma (por ejemplo, a través de un banner, un pop-up o una notificación push), o incluso te lo comunicaremos a tu dirección de correo electrónico cuando el cambio en cuestión sea significativo para tu privacidad, de manera que puedas revisar los cambios, valorarlos y, en su caso, oponerte o darte de baja en algún servicio o funcionalidad.
        </p>
        <p>
          En cualquier caso, te sugerimos que revises esta Política de Privacidad y Cookies de vez en cuando por si hubiera cambios menores o introducimos alguna mejora interactiva.
        </p>
      </LegalPageLayout>
    </div>
  );
}
