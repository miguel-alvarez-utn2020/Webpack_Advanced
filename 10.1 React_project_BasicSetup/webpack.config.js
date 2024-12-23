const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const EsLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  // Modo de desarrollo para mejor debugging
  mode: "development",
  // Punto de entrada de la aplicación
  entry: path.resolve(__dirname, "src/index.js"),
  // Configuración de salida - donde se generará el bundle
  output: {
    filename: "[name].bundle.js", // Nombre del archivo de salida
    path: path.resolve(__dirname, "dist"), // Carpeta de destino
  },
  // Plugins utilizados en el build
  plugins: [
    new EsLintPlugin(), // Plugin para análisis de código con ESLint
    new HtmlWebpackPlugin({ // Plugin para generar el HTML
      template: "./src/index.html", // Plantilla HTML base
      filename: "index.html", // Nombre del archivo generado
    }),
    new MiniCssExtractPlugin(), // Plugin para extraer CSS a archivos separados
  ],
  // Configuración del servidor de desarrollo
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"), // Directorio a servir
    },
    port: 9000, // Puerto del servidor
    open: true, // Abre el navegador automáticamente
    historyApiFallback: true, // Soporte para rutas en SPA
  },
  // Reglas de procesamiento de módulos
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Procesa archivos JS y JSX
        include: path.resolve(__dirname, "src"), // Solo incluye /src
        exclude: path.resolve(__dirname, "node_modules"), // Excluye node_modules
        use: [
          {
            loader: "babel-loader", // Transpila código moderno a ES5
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults", // Navegadores objetivo
                  },
                ],
                "@babel/preset-react", // Soporte para React
              ],
            },
          },
          {
            loader: "eslint-loader", // Analiza código con ESLint
            options: {
              fix: true, // Corrige errores automáticamente si es posible
            },
          },
        ],
      },
      {
        test: /\.css$/, // Procesa archivos CSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS a archivos separados
          "css-loader", // Interpreta @import y url()
          {
            loader: "postcss-loader", // Procesa CSS con PostCSS
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]], // Añade prefijos vendor automáticamente
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/, // Procesa archivos SASS/SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrae CSS a archivos separados
          "css-loader", // Interpreta @import y url()
          {
            loader: "postcss-loader", // Procesa CSS con PostCSS
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env", {}]], // Añade prefijos vendor automáticamente
              },
            },
          },
          "sass-loader", // Compila SASS a CSS
        ],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/, // Procesa imágenes
        type: "asset/resource", // Las trata como recursos estáticos
      },
    ],
  },
  // Optimización del bundle
  optimization: {
    splitChunks: {
      chunks: "all", // Divide el código en chunks para mejor caching
    },
  },
};
