# ===== stage 1: build =====
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build -- --configuration=production

# ===== stage 2: nginx =====
FROM nginx:1.25-alpine

# limpiamos html viejo
RUN rm -rf /usr/share/nginx/html/*

# metemos el build de Angular
COPY --from=build /app/dist/inicio/browser/ /usr/share/nginx/html

# 👇 en vez de tocar /etc/nginx/nginx.conf, solo metemos un sitio
COPY rently.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
