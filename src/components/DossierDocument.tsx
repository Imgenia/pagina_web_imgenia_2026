import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';

// Colores de marca IMGENIA
const colors = {
  blue: '#2b75be',
  navy: '#1e3a8a',
  pink: '#e33a92',
  gray: '#4b5563',
  grayLight: '#6b7280',
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  coverPage: {
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.navy,
    marginBottom: 12,
    textAlign: 'center',
  },
  coverSubtitle: {
    fontSize: 14,
    color: colors.gray,
    marginBottom: 24,
    textAlign: 'center',
  },
  coverBadge: {
    fontSize: 10,
    color: colors.blue,
    borderWidth: 1,
    borderColor: colors.blue,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.navy,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
    paddingBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 10,
    color: colors.grayLight,
    marginBottom: 12,
  },
  body: {
    color: colors.gray,
    lineHeight: 1.5,
    marginBottom: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  bullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.blue,
    marginRight: 8,
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.5,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.navy,
    marginBottom: 4,
  },
  cardText: {
    fontSize: 10,
    color: colors.gray,
    lineHeight: 1.4,
    marginBottom: 6,
  },
  twoCol: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  col: {
    flex: 1,
  },
  caseBlock: {
    marginBottom: 14,
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e7eb',
  },
  caseTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.navy,
    marginBottom: 2,
  },
  caseSector: {
    fontSize: 9,
    color: colors.grayLight,
    marginBottom: 4,
  },
  teamRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: colors.navy,
    width: 140,
  },
  teamRole: {
    fontSize: 10,
    color: colors.blue,
    flex: 1,
  },
  contactBox: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f3f4f6',
    borderRadius: 4,
  },
  contactLink: {
    fontSize: 11,
    color: colors.blue,
    textDecoration: 'none',
  },
});

export function DossierDocument() {
  return (
    <Document>
      {/* Portada */}
      <Page size="A4" style={styles.coverPage}>
        <View>
          <Text style={styles.coverTitle}>IMGENIA</Text>
          <Text style={styles.coverSubtitle}>Artificial Intelligence for Real Business</Text>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.coverBadge}>Dossier Corporativo 2026</Text>
          </View>
        </View>
      </Page>

      {/* Sobre IMGENIA */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Sobre IMGENIA</Text>
        <Text style={styles.sectionSubtitle}>
          Especialistas en Inteligencia Artificial aplicada a resultados de negocio.
        </Text>
        <View style={styles.twoCol}>
          <View style={styles.col}>
            <Text style={styles.cardTitle}>Enfoque Práctico</Text>
            <Text style={styles.cardText}>
              No hacemos IA por hacer IA. Resolvemos problemas de negocio reales con tecnología avanzada.
            </Text>
            <Text style={styles.cardTitle}>Tecnología Avanzada</Text>
            <Text style={styles.cardText}>
              Integramos los mejores LLMs del mercado con arquitectura robusta y escalable.
            </Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.cardTitle}>Seguridad Total</Text>
            <Text style={styles.cardText}>
              Cumplimiento normativo, anonimización automática y auditoría completa incluida.
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Qué Hacemos</Text>
        <Text style={styles.sectionSubtitle}>
          Transformamos procesos empresariales con IA de forma segura, escalable y medible.
        </Text>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Automatización Inteligente:</Text> Agentes de IA que trabajan 24/7 en tareas críticas: prospección, cualificación, seguimiento.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Integración sin Fricciones:</Text> Conectamos múltiples proveedores LLM con tu stack tecnológico actual sin vendor lock-in.
          </Text>
        </View>
        <View style={styles.bulletItem}>
          <View style={styles.bullet} />
          <Text style={styles.bulletText}>
            <Text style={{ fontWeight: 'bold' }}>Seguridad Empresarial:</Text> Anonimización, compliance y auditoría para que uses IA sin riesgos legales ni de privacidad.
          </Text>
        </View>
      </Page>

      {/* Líneas de negocio */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Líneas de Negocio</Text>
        <Text style={styles.sectionSubtitle}>
          Cuatro verticales especializadas que cubren todo el espectro de necesidades empresariales en IA.
        </Text>

        <Text style={styles.cardTitle}>SDR IA — Prospección Comercial Autónoma</Text>
        <Text style={styles.body}>
          Agente de ventas de IA que trabaja 24/7 identificando, cualificando y contactando prospectos. Multiplica tu pipeline sin aumentar headcount.
        </Text>

        <Text style={styles.cardTitle}>Integra — Gateway Multi-Proveedor LLM · RAG · Asistentes Técnicos</Text>
        <Text style={styles.body}>
          Plataforma unificada que conecta tu empresa con los mejores modelos del mercado (GPT, Claude, Gemini…) a través de un único gateway. Construye asistentes inteligentes con RAG sobre tu documentación interna.
        </Text>

        <Text style={styles.cardTitle}>A Medida — Soluciones IA Personalizadas</Text>
        <Text style={styles.body}>
          Desarrollo de sistemas de IA específicos para tu caso de uso. Desde la conceptualización hasta el despliegue en producción.
        </Text>

        <Text style={styles.cardTitle}>Seguridad — Compliance IA y Auditoría</Text>
        <Text style={styles.body}>
          Suite completa de herramientas para garantizar seguridad, privacidad y cumplimiento normativo en todos tus sistemas de IA.
        </Text>
      </Page>

      {/* Casos de éxito */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>Casos de Éxito</Text>
        <Text style={styles.sectionSubtitle}>
          Resultados reales en empresas reales. Transformaciones medibles desde el primer día.
        </Text>

        <View style={styles.caseBlock}>
          <Text style={styles.caseTitle}>NORCI Logística</Text>
          <Text style={styles.caseSector}>Logística ecommerce · MRW G3 — IAMAI MRW</Text>
          <Text style={styles.body}>
            Plataforma de IA que unifica y estructura los datos de G3 de MRW eliminando horas de reconciliación manual diaria. -80% tiempo de explotación, +3h/día liberadas por operador.
          </Text>
        </View>
        <View style={styles.caseBlock}>
          <Text style={styles.caseTitle}>INCOTRADING</Text>
          <Text style={styles.caseSector}>Distribución · Microsoft Navision — IAMAI Gestión de Pedidos</Text>
          <Text style={styles.body}>
            Sistema de nodos inteligentes que transforma la gestión de pedidos por email en un motor industrial automatizado con visión 360°. -75% tiempo de gestión, x3-4 capacidad de escala.
          </Text>
        </View>
        <View style={styles.caseBlock}>
          <Text style={styles.caseTitle}>Endesa · IAMAI Eólica</Text>
          <Text style={styles.caseSector}>Energía eólica · SCADA / ERP / CRM</Text>
          <Text style={styles.body}>
            Ecosistema de IAs distribuidas que conecta todos los sistemas de un parque eólico y permite consultar, analizar y actuar sobre datos complejos con voz o texto. Análisis en minutos, potencial multi-parque x10.
          </Text>
        </View>
        <View style={styles.caseBlock}>
          <Text style={styles.caseTitle}>Test My Bike · AJP · Otros</Text>
          <Text style={styles.body}>
            Más casos en automatización de soporte técnico, auditoría de agentes IA y soluciones sectoriales.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Reconocimientos</Text>
        <Text style={styles.body}>
          Premio a la Pyme más Innovadora — ASEYACOVI 2025. La Asociación de Empresarios y Autónomos de Colmenar Viejo reconoció a IMGENIA como la empresa más innovadora del tejido empresarial colmenareño. 609 invitados en la IX Gala Empresarial, 45º aniversario de ASEYACOVI.
        </Text>
      </Page>

      {/* Equipo y Contacto */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.sectionTitle}>El equipo</Text>
        <Text style={styles.sectionSubtitle}>
          Cuatro socios con visión compartida: construir tecnología de IA que genere impacto real en las empresas.
        </Text>

        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Arturo Mesa</Text>
          <Text style={styles.teamRole}>CEO y Fundador</Text>
        </View>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Ángel Gómez</Text>
          <Text style={styles.teamRole}>CTO y Fundador</Text>
        </View>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Antonio Marin Fuentes</Text>
          <Text style={styles.teamRole}>COO · Chief Operating Officer</Text>
        </View>
        <View style={styles.teamRow}>
          <Text style={styles.teamName}>Julio Gil</Text>
          <Text style={styles.teamRole}>Director de Investigación</Text>
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 24 }]}>Contacto</Text>
        <Text style={styles.body}>
          ¿Listo para transformar tu negocio con IA? Más de 50 empresas ya confían en IMGENIA para sus proyectos de Inteligencia Artificial.
        </Text>
        <View style={styles.contactBox}>
          <Text style={styles.body}>Email: </Text>
          <Link src="mailto:info@imgenia.es" style={styles.contactLink}>
            info@imgenia.es
          </Link>
          <Text style={[styles.body, { marginTop: 8 }]}>
            Dossier, demos y contacto comercial:
          </Text>
          <Link
            src="https://api.leadconnectorhq.com/widget/form/JbUsSJGFx3iRh4cYX3Bs"
            style={styles.contactLink}
          >
            Formulario IMGENIA (Lead Connector)
          </Link>
        </View>

        <View style={{ marginTop: 32, alignItems: 'center' }}>
          <Text style={{ fontSize: 10, color: colors.grayLight }}>
            IMGENIA · Artificial Intelligence for Real Business
          </Text>
          <Text style={{ fontSize: 9, color: colors.grayLight, marginTop: 4 }}>
            Dossier Corporativo 2026 · Documento generado desde imgenia.es
          </Text>
        </View>
      </Page>
    </Document>
  );
}
