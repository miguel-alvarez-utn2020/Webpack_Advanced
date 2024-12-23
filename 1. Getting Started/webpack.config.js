// Importamos el módulo 'path' de Node.js que nos ayuda a manejar rutas de archivos
const path = require('path');

// Exportamos la configuración de webpack como un objeto
module.exports = {
  // Define el punto de entrada de la aplicación
  // Este es el archivo principal desde donde webpack empezará a construir el bundle
  entry: "./src/index.js",

  // Define cómo y dónde se generará el archivo de salida
  output: {
    // El nombre del archivo bundle resultante
    filename: "bundle.js",
    // La ruta absoluta donde se guardará el bundle
    // __dirname es una variable global que contiene la ruta del directorio actual
    // path.resolve() combina los segmentos de ruta para crear una ruta absoluta
    path: path.resolve(__dirname,"dist")
  }
}