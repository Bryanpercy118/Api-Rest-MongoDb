### API REST con Node.js y MongoDB

¡Bienvenido a la API REST con Node.js y MongoDB! Esta API ha sido diseñada siguiendo los principios SOLID y una estructuración de carpetas para asegurar la responsabilidad única de cada archivo.

---

### Endpoints

A continuación, se presentan los endpoints disponibles:

- **POST /api/users**: Crea un nuevo usuario.
- **GET /api/users**: Obtiene todos los usuarios.
- **GET /api/users/:id**: Obtiene un usuario por su ID.
- **PUT /api/users/:id**: Actualiza un usuario existente.
- **DELETE /api/users/:id**: Elimina un usuario por su ID.

---

### Instalación

Para instalar la API, asegúrate de tener Node.js y MongoDB instalados en tu sistema. Luego, sigue estos pasos:

1. Clona este repositorio en tu máquina local.

2. Navega hasta el directorio del proyecto en tu terminal.

3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install express dotenv mongoose
   ```

4. Crea un archivo `.env` en el directorio raíz y configura las variables de entorno necesarias (por ejemplo, la URL de conexión a MongoDB y el puerto).

5. Inicia la API ejecutando el siguiente comando:

   ```
   node app.js
   ```

¡Y eso es todo! La API estará funcionando en el puerto especificado.

---

### Variables de Entorno

Asegúrate de configurar las siguientes variables de entorno en tu archivo `.env`:

- `PORT`: Puerto en el que se ejecutará el servidor.
- `MONGODB_URI`: URL de conexión a la base de datos MongoDB.

---

¡Disfruta utilizando la API! Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en contacto conmigo. ¡Gracias por mirar este repositorio!
