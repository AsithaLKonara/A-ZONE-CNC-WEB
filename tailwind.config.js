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
        background: "var(--background)",
        "background-secondary": "var(--background-secondary)",
        foreground: "var(--foreground)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-purple": "var(--accent-purple)",
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)"],
        poppins: ["var(--font-poppins)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
