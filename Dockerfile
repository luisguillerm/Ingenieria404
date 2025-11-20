# Etapa 1: Compilar la aplicación Angular
FROM node:20 as build

WORKDIR /app

# Clonar el repositorio 
RUN git clone https://github.com/luisguillerm/Ingenieria404.git .

# Instalar dependencias
RUN npm install

# Compilar la aplicación
RUN npm run build

# Etapa 2: Servidor nginx
FROM nginx:alpine

# Copiar los archivos compilados al servidor nginx
COPY --from=build /app/dist/* /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]