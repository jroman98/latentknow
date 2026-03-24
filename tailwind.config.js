/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070B14",
        foreground: "#EAF2FF",
        accent: "#6EE7FF",
        surface: "#0E1424",
        border: "#1d283A",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-fira-code)", "Fira Code", "monospace"],
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "star-twinkle": {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
      animation: {
        orbit: "orbit 40s linear infinite",
        "orbit-slow": "orbit 60s linear infinite",
        "orbit-slow-reverse": "orbit 70s linear reverse infinite",
        "star-twinkle": "star-twinkle 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
