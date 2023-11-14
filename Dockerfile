# Usa una versión específica de la imagen base de Node.js
FROM node:18.17.1

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia solo los archivos de configuración de npm para aprovechar la caché
COPY package*.json ./

# Instala las dependencias sin mostrar advertencias y limpia la caché de npm
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación (ajusta esto según la configuración de tu proyecto)
RUN ionic build

# Exponer el puerto en el que se ejecuta la aplicación (por defecto, 8100)
EXPOSE 8100

# Comando para iniciar la aplicación (ajusta esto según tu proyecto)
CMD ["ionic", "serve", "--host", "0.0.0.0"]
