import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        star: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(20px)", opacity: 0 },
        },
      },
      animation: {
        star: "star 3s linear infinite",
      },
    },
  },
});
