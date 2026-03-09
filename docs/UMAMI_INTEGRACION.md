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

## 3. Resumen de comprobaciones

- [ ] Umami desplegado y accesible en su URL.
- [ ] Base de datos PostgreSQL (`umami-db`) con `DATABASE_URL` y `HASH_SALT` configurados en el servicio Umami.
- [ ] Sitio creado en Umami y **Website ID** copiado.
- [ ] Variables `VITE_UMAMI_URL` y `VITE_UMAMI_WEBSITE_ID` configuradas en el **build** de la web (EasyPanel o `.env.local`).
- [ ] Tras redesplegar la web, visitar imgenia.es y comprobar en el panel de Umami que aparecen visitas y páginas.

## 4. Privacidad y cookies

Umami no usa cookies por defecto y está enfocado a privacidad. Aun así, si en tu política de cookies mencionas analytics, puedes indicar que usas Umami como herramienta de análisis sin cookies (o con las opciones que tengas activadas en Umami).
