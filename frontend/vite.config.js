import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite konfigürasyonu
export default defineConfig(() => {
  return {
    server: {
      host: true,
    },
    plugins: [react(), tailwindcss()],
  };
});
