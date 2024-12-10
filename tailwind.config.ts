import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blanco: "#B6C9BB",
        rojo: "#D2935",
        verde: "#358600",
        verdeOscuro: "#093824",
        azul: "#1A1BA1",
        gris: "#747982",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
