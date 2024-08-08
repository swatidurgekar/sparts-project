import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  server: {
    proxy: {
      "/api": {
        target: "http://3.223.98.72:1337",
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
