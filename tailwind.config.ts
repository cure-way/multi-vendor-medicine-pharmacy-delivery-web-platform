import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    /* ============================================================
       CONTAINER CONFIGURATION (from Grid.png)
       Centered containers with responsive padding
       ============================================================ */
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "20px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
      },
    },

    /* ============================================================
       BREAKPOINTS / SCREENS (from Grid.png)
       Mobile (1/2/4 col) → Tablet (8 col) → Web (8/12 col)
       ============================================================ */
    screens: {
      xs: "320px", // Mobile small
      sm: "480px", // Mobile medium (2 columns)
      md: "768px", // Tablet (8 columns)
      lg: "1024px", // Desktop small (8 columns)
      xl: "1280px", // Desktop large (12 columns)
      "2xl": "1536px", // Extra large screens
    },

    extend: {
      /* ============================================================
         SPACING SCALE (from Spacing.png)
         Custom pixel values: 2, 4, 8, 12, 20, 24, 32, 40, 48, 56, 64, 80
         ============================================================ */
      spacing: {
        "0.5": "2px",
        "1": "4px",
        "2": "8px",
        "3": "12px",
        "4": "16px",
        "5": "20px",
        "6": "24px",
        "7": "28px",
        "8": "32px",
        "9": "36px",
        "10": "40px",
        "11": "44px",
        "12": "48px",
        "13": "52px",
        "14": "56px",
        "15": "60px",
        "16": "64px",
        "18": "72px",
        "20": "80px",
        "24": "96px",
        "28": "112px",
        "32": "128px",
        "36": "144px",
        "40": "160px",
        "44": "176px",
        "48": "192px",
        "52": "208px",
        "56": "224px",
        "60": "240px",
        "64": "256px",
        "72": "288px",
        "80": "320px",
        "96": "384px",
      },

      /* ============================================================
         FONT SIZE SCALE (from Typography.png)
         Type@36, @30, @25, @21, @17, @14, @12, @10, @8
         ============================================================ */
      fontSize: {
        "t-8": ["0.5rem", { lineHeight: "0.75rem", fontWeight: "400" }],
        "t-10": ["0.625rem", { lineHeight: "0.875rem", fontWeight: "400" }],
        "t-12": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
        "t-14": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        "t-17": ["1.0625rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "t-21": ["1.3125rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "t-25": ["1.5625rem", { lineHeight: "2rem", fontWeight: "400" }],
        "t-30": ["1.875rem", { lineHeight: "2.375rem", fontWeight: "400" }],
        "t-36": ["2.25rem", { lineHeight: "2.75rem", fontWeight: "400" }],
      },

      /* ============================================================
         FONT WEIGHT
         ============================================================ */
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },

      /* ============================================================
         BORDER RADIUS (from Buttons.png & Inputs.png)
         ============================================================ */
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
        "3xl": "24px",
        full: "9999px",
      },

      /* ============================================================
         BOX SHADOWS (from UI components)
         ============================================================ */
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT:
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        card: "0 2px 8px 0 rgb(0 0 0 / 0.08)",
        "input-focus": "0 0 0 3px hsl(228 54% 44% / 0.15)",
        none: "0 0 #0000",
      },

      /* ============================================================
         Z-INDEX SCALE
         ============================================================ */
      zIndex: {
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        modal: "1040",
        popover: "1050",
        tooltip: "1060",
      },

      /* ============================================================
         MAX WIDTH (legacy + new)
         ============================================================ */
      maxWidth: {
        "138.75": "555px", // 138.75 * 4px = 555px (legacy)
        container: "1440px",
        content: "1200px",
        form: "480px",
        card: "400px",
      },

      /* ============================================================
         HEIGHT (legacy)
         ============================================================ */
      height: {
        "15.25": "61px", // 15.25 * 4px = 61px (legacy)
      },

      /* ============================================================
         MIN HEIGHT (legacy)
         ============================================================ */
      minHeight: {
        "15.25": "61px",
      },

      /* ============================================================
         MIN WIDTH (legacy)
         ============================================================ */
      minWidth: {
        "25": "100px",
        "30": "120px",
        "45": "180px",
      },

      /* ============================================================
         ANIMATION DURATIONS
         ============================================================ */
      transitionDuration: {
        fast: "150ms",
        normal: "200ms",
        slow: "300ms",
      },

      /* ============================================================
         KEYFRAMES & ANIMATIONS
         ============================================================ */
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-in-from-top": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out",
        "fade-out": "fade-out 200ms ease-in",
        "slide-in-from-top": "slide-in-from-top 200ms ease-out",
        "slide-in-from-bottom": "slide-in-from-bottom 200ms ease-out",
        "slide-in-from-left": "slide-in-from-left 200ms ease-out",
        "slide-in-from-right": "slide-in-from-right 200ms ease-out",
        "scale-in": "scale-in 200ms ease-out",
        spin: "spin 1s linear infinite",
      },
    },
  },
};

export default config;
