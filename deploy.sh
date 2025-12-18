#!/bin/bash
set -e # Activa la salida en caso de error

echo "Actualizando código..."
git pull origin master

echo "Parando contenedor..."
docker stop felixproject || true
docker rm felixproject || true

echo "Construyendo imagen..."
docker build -t felixproject .

echo "Arrancando contenedor..."
docker run -d \
  --name felixproject \
  -p 5000:5000 \
  felixproject

echo "Deploy completado"
