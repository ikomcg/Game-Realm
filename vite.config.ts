import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   resolve: {
      alias: {
         "@page": path.resolve(__dirname, "./src/page"),
         "@component": path.resolve(__dirname, "./src/component"),
         "@context": path.resolve(__dirname, "./src/context"),
         "@utils": path.resolve(__dirname, "./src/utils"),
         "@helper": path.resolve(__dirname, "./src/helper"),
         "@hooks": path.resolve(__dirname, "./src/hooks"),
         "@src": path.resolve(__dirname, "./src"),
      },
   },
   server: {
      port: 3000,
   },
});
