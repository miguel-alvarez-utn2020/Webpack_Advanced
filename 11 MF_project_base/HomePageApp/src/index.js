// @babel/polyfill es una librería que proporciona polyfills para funcionalidades modernas de JavaScript
// Los polyfills permiten usar características nuevas de JavaScript en navegadores antiguos que no las soportan
// Por ejemplo: async/await, Promise, Array.includes(), etc.
// Esta importación es necesaria para que el código moderno funcione en todos los navegadores
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("app"));
