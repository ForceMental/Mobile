# Usar una imagen base con Node.js
FROM node:18.17.1

# Crear un directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Compilar la aplicación (esto puede variar según la configuración de tu proyecto)
RUN ionic build

# Exponer el puerto en el que se ejecuta la aplicación (por defecto, 8100)
EXPOSE 8100

# Comando para iniciar la aplicación (puede variar según tu proyecto)
CMD ["ionic", "serve", "--host", "0.0.0.0"]
