// Importa el módulo 'path' de Node.js para manejar rutas de archivos
const path = require("path");

// Exporta la configuración de webpack
module.exports = {
  // Punto de entrada de la aplicación
  entry: "./src/index.js",
  
  // Configuración de salida
  output: {
    // Nombre del archivo bundle resultante
    filename: "bundle.js",
    // Ruta absoluta donde se guardará el bundle
    path: path.resolve(__dirname, "dist"),
    // Patrón de nombre para los archivos de recursos (imágenes)
    assetModuleFilename: "images/[hash][ext]",
    // Limpia el directorio de salida antes de cada build
    clean: true,
  },

  // Configuración de módulos
  module: {
    // Reglas para procesar diferentes tipos de archivos
    rules: [
      {
        // Regla para archivos CSS
        test: /\.(css)$/,
        use: [
          { loader: "style-loader" }, // Inyecta los estilos en el DOM
          { loader: "css-loader", options: { modules: true } }, // Procesa CSS y habilita módulos CSS
        ],
      },
      {
        // Regla para archivos SASS/SCSS
        test: /.s[ac]ss$/,
        use: [
          { loader: "style-loader" }, // Inyecta los estilos en el DOM
          { loader: "css-loader", options: { modules: true } }, // Procesa CSS y habilita módulos CSS
          { loader: "sass-loader" }, // Compila SASS/SCSS a CSS
        ],
      },
      {
        // Regla para archivos de imagen
        test: /.(png|jpeg|gif|svg)$/,
        type: "asset/resource", // Procesa las imágenes como recursos
      },
    ],
  },
};