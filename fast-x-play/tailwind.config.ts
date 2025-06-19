import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        gaming: {
          orange: "#FF6B00", // Main orange accent
          neon: "#00F0FF", // Neon blue for contrast accents
          purple: "#8A2BE2", // Purple for additional accents
          dark: "#121212", // Dark mode background
          glow: {
            orange: "rgba(255, 107, 0, 0.3)",
            blue: "rgba(0, 240, 255, 0.3)",
            purple: "rgba(138, 43, 226, 0.3)",
          }
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow-orange": {
          "0%, 100%": { 
            boxShadow: "0 0 10px 3px rgba(255, 107, 0, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 20px 5px rgba(255, 107, 0, 0.5)" 
          },
        },
        "pulse-glow-blue": {
          "0%, 100%": { 
            boxShadow: "0 0 10px 3px rgba(0, 240, 255, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 20px 5px rgba(0, 240, 255, 0.5)" 
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-horizontal": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "orbit": {
          "0%": { 
            transform: "rotate(0deg) translateX(50px) rotate(0deg)" 
          },
          "100%": { 
            transform: "rotate(360deg) translateX(50px) rotate(-360deg)" 
          }
        },
        "ripple": {
          "0%": { 
            transform: "scale(0.95)",
            opacity: "1"
          },
          "100%": { 
            transform: "scale(1.5)",
            opacity: "0"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow-orange": "pulse-glow-orange 2s infinite",
        "pulse-glow-blue": "pulse-glow-blue 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "float-delayed": "float 3s ease-in-out 1s infinite",
        "float-horizontal": "float-horizontal 5s ease-in-out infinite",
        "spin-slow": "spin-slow 15s linear infinite",
        "spin-slower": "spin-slow 25s linear infinite",
        "orbit": "orbit 15s linear infinite",
        "ripple": "ripple 2s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config; 