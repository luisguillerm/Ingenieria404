# Mi Práctica Docker - Actividad 8

## Integrantes del equipo
- [Nombre 1]
- [Nombre 2]
- [Nombre 3]
- [Nombre 4]

## Descripción
Este proyecto contiene una aplicación Angular desplegada con Docker Compose y Nginx.

## Repositorio utilizado
[URL del repositorio de GitHub]

## Pasos para ejecutar

1. Clonar este repositorio
2. Construir la imagen: `docker-compose build`
3. Levantar el contenedor: `docker-compose up -d`
4. Acceder a: http://localhost:8080

## Pasos ejecutados

### 1. Creación de la estructura del proyecto
Se creó la carpeta del proyecto con los siguientes archivos:
- Dockerfile
- docker-compose.yml
- .dockerignore
- README.md

### 2. Configuración del Dockerfile
- Se utilizó compilación multi-stage
- Etapa 1: Clonación y compilación de la app Angular
- Etapa 2: Despliegue con Nginx

### 3. Construcción y ejecución
```bash
docker-compose build
docker-compose up -d
```

### 4. Guardado de la imagen
```bash
docker save mi-practica-docker_angular-app:latest -o angular-app.tar
```