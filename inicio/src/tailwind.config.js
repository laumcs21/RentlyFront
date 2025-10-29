/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  // Mantén JIT por defecto (v3+)
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1440px" }
    },
    extend: {
      fontFamily: {
        // Usa estas familias cuando quieras en nuevas pantallas
        sans: ["Inter", "system-ui", "ui-sans-serif", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui"],
      },
      colors: {
        // Paleta base Rently (azul primario + naranja CTA)
        rly: {
          // Semánticos (recomendado usarlos)
          primary:   "#155E75",  // azul 700 aprox.
          primaryFg: "#FFFFFF",
          accent:    "#FF6A00",  // naranja 500
          accentFg:  "#FFFFFF",
          surface:   "#F3F5F7",
          border:    "#E6E7E9",
          muted:     "#7D828A",

          // Escala azul (para variaciones)
          blue: {
            50:"#F0F9FF", 100:"#E0F2FE", 200:"#BAE6FD", 300:"#7DD3FC",
            400:"#38BDF8", 500:"#0EA5E9", 600:"#0284C7", 700:"#0369A1",
            800:"#075985", 900:"#0C4A6E"
          },
          // Escala naranja (CTA)
          orange: {
            50:"#FFF4EB", 100:"#FFE6D6", 200:"#FFD0B0", 300:"#FFB685",
            400:"#FF8F40", 500:"#FF6A00", 600:"#E85F00", 700:"#C94F00",
            800:"#9F3F00", 900:"#7A3100"
          },
          // Grises suaves para fondos
          gray: {
            50:"#F7F8FA", 100:"#F3F5F7", 200:"#E6E7E9", 300:"#D2D5DA",
            400:"#A8ADB6", 500:"#7D828A", 600:"#5A5F67", 700:"#3F434A",
            800:"#2B2F35", 900:"#1C1F24"
          }
        },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,.06)",
      },
    },
  },
  safelist: [
    // Por si generas clases dinámicamente (chips, badges, etc.)
    { pattern: /bg-rly-(blue|orange)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /text-rly-(blue|orange)-(50|100|200|300|400|500|600|700|800|900)/ },
    { pattern: /(bg|text|border)-rly-(primary|accent|surface|border|muted)/ },
    { pattern: /(from|to)-rly-(blue|orange)-(400|500|600|700)/ },
  ],
  plugins: [],
};
