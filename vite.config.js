import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [ react(), tailwindcss(),
 ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/common/components": path.resolve(__dirname, "src/common/components"),
      "@/common/utils": path.resolve(__dirname, "src/common/utils"),
      "@/common/hooks": path.resolve(__dirname, "src/common/hooks"),
      "@/features": path.resolve(__dirname, "src/features"),
      "@/infrastructure": path.resolve(__dirname, "src/infrastructure"),
    },
  },
})
