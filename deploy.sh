#!/bin/bash
IMAGE_NAME="ctrl-dev-landing-page"
#? REPLACE WITH YOUR DOCKER USER
DOCKER_USER="username"
TAG="latest"

REMOTE_IMAGE="$DOCKER_USER/$IMAGE_NAME:$TAG"

echo "=== Limpiando dist local ==="
rm -rf dist

echo "=== Paso 1: Construir la imagen local ==="
docker build --no-cache -t $IMAGE_NAME .

echo "=== Paso 2: Etiquetar la imagen para Docker Hub ==="
docker tag $IMAGE_NAME $REMOTE_IMAGE

echo "=== Paso 3: Loguearse en Docker Hub ==="
docker login

echo "=== Paso 4: Pushear la imagen ==="
docker push $REMOTE_IMAGE

echo "=== Paso 5: Confirmar imagen en local y remota ==="
docker images | grep $IMAGE_NAME

echo "Imagen '$REMOTE_IMAGE' subida correctamente a Docker Hub"