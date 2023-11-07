# Usar una imagen base de Node.js
FROM node:14

# Directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar el archivo package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de la aplicación
COPY . .

# Puerto en el que tu aplicación escuchará
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
