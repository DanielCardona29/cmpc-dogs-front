# Guía para Ejecutar una Aplicación React

Esta guía te ayudará a ejecutar una aplicación React localmente. Asegúrate de que el servidor backend esté encendido y considera la posibilidad de cambiar el host del backend si es necesario.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes requisitos:

1. [Node.js](https://nodejs.org/): Asegúrate de tener Node.js instalado en tu sistema. Puedes verificar la instalación ejecutando `node -v` en la línea de comandos.

## Pasos para Ejecutar la Aplicación React

Sigue estos pasos para ejecutar la aplicación React:

1. **Clona el Repositorio:** Clona el repositorio de la aplicación desde GitHub utilizando el siguiente comando:

    ```bash
    git clone https://github.com/tu-usuario/tu-repositorio.git
    ```

   Reemplaza `tu-usuario` y `tu-repositorio` con la URL de tu repositorio.

2. **Accede al Directorio de la Aplicación:** Navega al directorio de la aplicación clonada utilizando el comando `cd`:

    ```bash
    cd tu-repositorio
    ```

3. **Instala las Dependencias:** Instala las dependencias del proyecto utilizando npm (Node Package Manager). Ejecuta el siguiente comando:

    ```bash
    npm install
    ```

4. **Configura el Host del Backend (Opcional):** Si necesitas cambiar el host del backend, dirígete al archivo `src/utils/constants.js` y ajusta la variable `BACKEND_HOST` según tus necesidades. Por ejemplo:

    ```javascript
    // src/utils/constants.js

    // Cambia esta URL al host de tu servidor backend
    export const BACKEND_HOST = 'http://mi-servidor-backend.com';
    ```

5. **Inicia la Aplicación:** Una vez que todas las dependencias estén instaladas y hayas configurado el host del backend (si es necesario), puedes iniciar la aplicación con el siguiente comando:

    ```bash
    npm start
    ```

   Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador web predeterminado.

6. **Verifica el Servidor Backend:** Asegúrate de que el servidor backend esté encendido y funcionando correctamente. La aplicación React depende de datos proporcionados por el servidor para funcionar correctamente.

7. **Accede a la Aplicación:** Abre tu navegador web y navega a la siguiente dirección:

    ```plaintext
    http://localhost:3000
    ```

   Aquí, podrás ver y utilizar la aplicación React. Asegúrate de que la aplicación pueda comunicarse con el servidor backend utilizando la URL configurada en `src/utils/constants.js`.

## Detener la Aplicación

Para detener la aplicación React, simplemente regresa a la línea de comandos donde ejecutaste `npm start` y presiona `Ctrl + C`. Confirmarás que deseas detener la aplicación y el servidor de desarrollo se cerrará.

¡Listo! Ahora deberías poder ejecutar tu aplicación React localmente con el servidor backend encendido y con la posibilidad de configurar el host del backend según tus necesidades.
