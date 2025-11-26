# Etapa 1: Build de Angular
FROM node:20 AS build

# Fix de SSL y DNS para evitar ECONNRESET
RUN npm config set strict-ssl false \
    && npm config set registry https://registry.npmjs.org/

# Instalar dependencias necesarias del sistema
RUN apt-get update && apt-get install -y \
    git \
    python3 \
    make \
    g++ \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Clonar el repo público
RUN git clone https://github.com/luisguillerm/Ingenieria404.git proyecto

WORKDIR /app/proyecto

# Instalar dependencias
RUN npm install --no-audit --no-fund --verbose

# Instalar Angular CLI dentro del contenedor
RUN npm install -g @angular/cli

# Compilar Angular para producción
RUN npm run build --prod


# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar la app compilada a la carpeta nginx
COPY --from=build /app/proyecto/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
