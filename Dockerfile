# ---------- Stage 1: builder ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Instalar dependencias (npm install para mayor compatibilidad con lock)
COPY package.json package-lock.json* ./
RUN npm install

# Copiar código y construir
COPY . .
RUN npm run build

# ---------- Stage 2: runner (nginx) ----------
FROM nginx:alpine AS runner

# Puerto por defecto para EasyPanel
ENV PORT=80
EXPOSE 80

# Copiar el build de Vite al directorio que sirve nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuración nginx para SPA (fallback a index.html en rutas del cliente)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx escucha en 0.0.0.0:80 por defecto; el proxy de EasyPanel enruta a este puerto
CMD ["nginx", "-g", "daemon off;"]
