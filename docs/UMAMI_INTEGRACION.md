# Integración de Umami en la web IMGENIA

**Dominio Umami:** `https://web-imgenia-umami.i7rmns.easypanel.host`

---

## Dónde poner cada variable en EasyPanel

Hay dos sitios distintos:

| Dónde | Variables | Para qué |
|-------|-----------|----------|
| **Servicio «umami»** (la app de analytics) | `DATABASE_URL`, `DATABASE_TYPE`, `HASH_SALT` | Que Umami se conecte a PostgreSQL. |
| **Servicio de la web** (el que construye y sirve imgenia.es) | `VITE_UMAMI_URL`, `VITE_UMAMI_WEBSITE_ID` | Que la web cargue el script de tracking. |

Las variables del **servicio Umami** ya las tienes. Las de la **web** hay que añadirlas en el servicio que hace el build (Dockerfile) de la página y volver a desplegar.

---

## 1. En el panel de Umami (ya desplegado en el VPS)

1. **Accede a tu instancia de Umami**  
   Abre en el navegador la URL pública de Umami (ej. `https://analytics.imgenia.es` o el dominio que hayas asignado al servicio `umami` en EasyPanel).

2. **Inicio de sesión**  
   La primera vez tendrás que crear la cuenta de administrador (revisa la documentación de la imagen Docker de Umami si usas la oficial).

3. **Añadir un sitio (Website)**  
   - En el panel, ve a **Settings** → **Websites** (o **Añadir sitio**).  
   - Crea un nuevo sitio, por ejemplo: **IMGENIA Web**.  
   - Dominio: `imgenia.es` (o `*.imgenia.es` si lo permite).  
   - **Guarda** y copia el **Website ID** (un UUID tipo `a1b2c3d4-e5f6-7890-abcd-ef1234567890`).  
   Este ID lo necesitas para el siguiente paso.

## 2. En la aplicación web (este proyecto)

El script de Umami se carga solo si defines estas **variables de entorno** en el **build** de la web (no en el contenedor de Umami).

### Variables de entorno para el build de la web

En EasyPanel, en el **proyecto/servicio que despliega la web** (el que construye con el Dockerfile de Vite), añade estas dos variables (Build / Variables de entorno):

| Variable | Valor |
|----------|--------|
| `VITE_UMAMI_URL` | `https://web-imgenia-umami.i7rmns.easypanel.host` |
| `VITE_UMAMI_WEBSITE_ID` | `9ac65e6b-926d-46bd-bc02-f2d149448605` |

- En Vite las variables que empiezan por `VITE_` se embeben en el build.  
- Si **no** defines estas variables, el script de Umami **no** se inyecta (no habrá tracking y no dará error).

### Desarrollo local

Para probar en local, crea un `.env.local` en la raíz del proyecto:

```env
VITE_UMAMI_URL=https://web-imgenia-umami.i7rmns.easypanel.host
VITE_UMAMI_WEBSITE_ID=9ac65e6b-926d-46bd-bc02-f2d149448605
```

No subas `.env.local` a Git (debe estar en `.gitignore`).

## 3. Cómo comprobar que Umami está funcionando

### A) Servidor Umami (lo que ves en el terminal)

- **✓** Si en el log aparece `✓ Database connection successful` y `✓ Ready in ...ms`, Umami está corriendo.
- Si al arrancar sale *"Can't reach database server"* y luego al reintentar sí conecta, suele ser que la base de datos tarda un poco en estar lista. En ese caso conviene que el servicio `umami-db` arranque antes que `umami` (en EasyPanel puedes definir dependencias entre servicios si está disponible).

### B) Panel de Umami

1. Abre **https://web-imgenia-umami.i7rmns.easypanel.host** en el navegador.
2. Inicia sesión (si es la primera vez, crea el usuario admin según la documentación de la imagen Umami).
3. Comprueba que ves el dashboard y que el sitio con ID `9ac65e6b-926d-46bd-bc02-f2d149448605` está creado.

### C) Que la web envíe datos (imgenia.es)

1. **Redespliega la web** después de guardar `VITE_UMAMI_URL` y `VITE_UMAMI_WEBSITE_ID` en EasyPanel. Las variables `VITE_*` se embeben en el **build**; si no redespliegas, la web antigua no llevará el script.
2. Abre **https://imgenia.es** en una pestaña (mejor en modo incógnito o sin extensiones que bloqueen).
3. Abre las **DevTools** (F12) → pestaña **Red / Network**. Recarga la página.
4. Filtra por "umami" o "script.js". Deberías ver una petición a `https://web-imgenia-umami.i7rmns.easypanel.host/script.js` y, al navegar, peticiones al endpoint de recogida de Umami (por ejemplo `/api/send` o similar). Si aparecen, el script se está cargando y enviando datos.
5. Vuelve al **panel de Umami**, espera 1–2 minutos y refresca. Deberían aparecer visitas y páginas para imgenia.es.

Si no ves peticiones a Umami en la pestaña Red, la web se desplegó sin las variables o con valores incorrectos: revisa que las env estén en el **servicio que construye la web** y vuelve a desplegar.

## 4. Resumen de comprobaciones

- [ ] Umami desplegado y accesible en su URL.
- [ ] Base de datos PostgreSQL (`umami-db`) con `DATABASE_URL` y `HASH_SALT` configurados en el servicio Umami.
- [ ] Sitio creado en Umami y **Website ID** copiado.
- [ ] Variables `VITE_UMAMI_URL` y `VITE_UMAMI_WEBSITE_ID` configuradas en el **build** de la web (EasyPanel).
- [ ] **Redespliegue de la web** después de añadir las variables.
- [ ] En imgenia.es, pestaña Red: peticiones a `web-imgenia-umami.../script.js` y al API de Umami.
- [ ] En el panel de Umami, visitas y páginas de imgenia.es a los 1–2 minutos.

## 4. Privacidad y cookies

Umami no usa cookies por defecto y está enfocado a privacidad. Aun así, si en tu política de cookies mencionas analytics, puedes indicar que usas Umami como herramienta de análisis sin cookies (o con las opciones que tengas activadas en Umami).
