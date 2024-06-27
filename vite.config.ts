import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ajuste a base URL para /
  plugins: [react()],
});