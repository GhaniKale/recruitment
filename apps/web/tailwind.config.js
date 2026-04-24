export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#137fec",
        "accent-gold": "#d4af37",
        "primary-light": "#e0f0ff", // Derived light shade
        "primary-dark": "#0c5bb0", // Derived dark shade
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
        "surface-light": "#ffffff",
        "surface-dark": "#1a2632",
        "neutral-50": "#f8fafc",
        "neutral-100": "#f1f5f9",
        "neutral-200": "#e2e8f0",
        "neutral-500": "#64748b",
        "neutral-700": "#334155",
        "neutral-900": "#0f172a",
        "success": "#10b981",
        "warning": "#f59e0b",
        "danger": "#ef4444",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
