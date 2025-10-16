import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Cambia el valor de base por el nombre de tu repositorio de GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/bienvenido/", // <--- Pon aquí el nombre EXACTO de tu repo
});