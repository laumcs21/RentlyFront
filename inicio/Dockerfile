# ===== stage 1: build =====
FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./

# ✅ Instalar Angular CLI primero
RUN npm install -g @angular/cli@18
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build -- --configuration=production

# ===== stage 2: nginx =====
FROM nginx:1.25-alpine

RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/inicio/browser/ /usr/share/nginx/html
COPY rently.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]