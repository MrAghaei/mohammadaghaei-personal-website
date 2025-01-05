import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./(components)/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainText: "#333A3F",
        darkModeBlack: "#121212",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      typography: {
        editor: {
          css: {
            h1: { fontSize: "2.25rem", fontWeight: "700" },
            h2: { fontSize: "1.875rem", fontWeight: "600" },
            h3: { fontSize: "1.5rem", fontWeight: "500" },
            h4: { fontSize: "1.25rem", fontWeight: "500" },
            h5: { fontSize: "1rem", fontWeight: "500" },
            h6: { fontSize: "0.875rem", fontWeight: "500" },
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
