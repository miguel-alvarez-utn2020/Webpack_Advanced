const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const PurgeCss = require("purgecss-webpack-plugin");
const glob = require("glob");

// Define la ruta base para PurgeCSS que se usará para eliminar CSS no utilizado
// purgePath.src apunta al directorio 'src' del proyecto usando path.join()
// __dirname es la ubicación actual del archivo webpack.config.js
const purgePath = {
  src: path.join(__dirname, "src"),
};

module.exports = {
  // Puntos de entrada de la aplicación - Define los archivos JavaScript principales
  entry: {
    index: "./src/index.js", // Entrada principal
    courses: "./src/pages/courses.js", // Página de cursos
  },
  // Configuración de salida - Donde se generarán los archivos compilados
  output: {
    filename: "[name].[contenthash].js", // Nombre del archivo con hash para cache busting
    path: path.resolve(__dirname, "dist"), // Carpeta de destino
    clean: true, // Limpia la carpeta dist antes de cada build
  },
  // Configuración del servidor de desarrollo
  devServer: {
    static: "./dist", // Sirve archivos desde esta carpeta
  },
  // Reglas para procesar diferentes tipos de archivos
  module: {
    rules: [
      {
        test: /\.css$/, // Para archivos CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"], // Procesa y extrae CSS
      },
      {
        test: /\.s[ac]ss$/, // Para archivos SASS/SCSS
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // Procesa SASS a CSS
      },
      {
        test: /\.(png|jpeg|jpg|gif)$/, // Para imágenes
        type: "asset/resource", // Las maneja como recursos
      },
    ],
  },
  // Plugins para extender la funcionalidad de webpack
  plugins: [
    new webpack.ProvidePlugin({
      mnt: "moment", // Hace disponible moment como 'mnt'
      $: "jquery", // Hace disponible jQuery como '$'
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Plantilla HTML para la página principal
      chunks: ["index"], // Usa el entry point 'index'
      filename: "index.html", // Nombre del archivo generado
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/courses.html", // Plantilla HTML para la página de cursos
      chunks: ["courses"], // Usa el entry point 'courses'
      filename: "courses.html", // Nombre del archivo generado
      base: "pages", // Base path para los recursos
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/images/*', // Copia imágenes
          to: path.resolve(__dirname, "dist"), // Al directorio dist
          context: "src", // Desde la carpeta src
        },
      ],
    }),
    new PurgeCss({
      paths: glob.sync(`${purgePath.src}/**/*`, { nodir: true }), // Busca archivos para purgar CSS
      safelist: ["dummy-css"], // CSS que no debe ser purgado
    }),
    // new BundleAnalyzerPlugin({}), // Comentado: Analizador de bundles
    new MiniCssExtractPlugin(), // Extrae CSS a archivos separados
  ],
  // Optimizaciones del bundle
  optimization: {
    splitChunks: {
      chunks: "all", // Divide el código en chunks para mejor caching
    },
  },
};
