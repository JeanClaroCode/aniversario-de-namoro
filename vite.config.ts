import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/uma-homenagem-para-mari",
  plugins: [react()],
});
