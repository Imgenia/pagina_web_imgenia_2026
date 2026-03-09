# Desplegar página web Imgenia en EasyPanel (Hostinger VPS)

**Objetivo:** Desplegar este proyecto (Vite + React, solo frontend) en EasyPanel desde el repositorio GitHub, usando el Dockerfile incluido.

**Contexto:** EasyPanel construye la imagen Docker desde el Dockerfile y sirve la app en el puerto 80. Este proyecto es una SPA estática: se hace build con Vite y se sirve con nginx.

---

## 1. Configuración en EasyPanel

| Concepto | Valor |
|----------|--------|
| **Repositorio** | `https://github.com/Imgenia/pagina_web_imgenia_2026` |
| **Ruta de compilación (Build path)** | `.` (raíz del repo) |
| **Dockerfile** | `Dockerfile` (en la raíz) |
| **Puerto del contenedor** | `80` |
| **Dominio** | El que asignes en EasyPanel (p. ej. `imgenia.easypanel.host` o tu dominio propio) |

No hace falta definir variables de entorno para el frontend estático (no hay API ni `NEXT_PUBLIC_*` en este proyecto). Si más adelante añades una API externa y variables de build, configúralas en EasyPanel como **Build args**.

---

## 2. Estructura del Dockerfile (resumen)

- **Stage 1 (builder):** Imagen `node:20-alpine`. Instala dependencias, copia el código y ejecuta `npm run build`. La salida queda en `dist/`.
- **Stage 2 (runner):** Imagen `nginx:alpine`. Copia el contenido de `dist/` a `/usr/share/nginx/html` y usa `nginx.conf` para servir la SPA (fallback a `index.html` en todas las rutas).
- **Puerto:** nginx escucha en `0.0.0.0:80`. El proxy de EasyPanel enruta el tráfico HTTP/HTTPS a ese puerto.

---

## 3. Archivos relevantes

| Archivo | Uso |
|---------|-----|
| `Dockerfile` | Multi-stage: builder (Vite build) + runner (nginx sirviendo `dist/`). |
| `nginx.conf` | Configuración nginx: raíz, `try_files` para SPA, gzip y cache de assets. |
| `.dockerignore` | Excluye `node_modules`, `dist`, `.git`, `.env`, etc. del contexto de build. |

---

## 4. Checklist antes de desplegar

- [ ] Repo en GitHub actualizado (incluye `Dockerfile`, `nginx.conf`, `.dockerignore`).
- [ ] En EasyPanel: aplicación nueva desde Git, repo `Imgenia/pagina_web_imgenia_2026`.
- [ ] Build path = `.` (raíz).
- [ ] Puerto del contenedor = **80**.
- [ ] Dominio asignado al servicio (opcional; sin dominio EasyPanel suele dar una URL tipo `*.easypanel.host`).

---

## 5. Errores frecuentes

| Síntoma | Causa habitual | Solución |
|--------|----------------|----------|
| Build: `Cannot find module` | Dependencia o lock desactualizado. | Revisar `package.json`; en el Dockerfile se usa `npm install` para tolerar diferencias de lock. |
| 404 al recargar una ruta (p. ej. `/contacto`) | nginx no devuelve `index.html` para rutas del router. | El `nginx.conf` incluye `try_files $uri $uri/ /index.html`. Asegurarse de que se copia en el Dockerfile. |
| 502 Bad Gateway | Contenedor no escucha en 80 o no arranca. | nginx por defecto escucha en 80; comprobar en EasyPanel que el puerto del servicio es 80. |

---

## 6. Comandos útiles (local)

Para probar la imagen en local:

```bash
docker build -t pagina-imgenia .
docker run -p 8080:80 pagina-imgenia
```

Abrir `http://localhost:8080`. Si funciona, el mismo build debería funcionar en EasyPanel.
