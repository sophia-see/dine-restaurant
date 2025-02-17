import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "xl-1440": "1440px",
      },
      colors: {
        "beaver": "hsl(27, 22%, 51%)",  //#9e7f66
        "cod-gray": "hsl(0, 0%, 7%)",   //#111111
        "cod-gray-75": "hsla(0, 0%, 7%, 75%)",   //#111111

        "mirage": "hsl(236, 30%, 13%)",   //#17192b
        "ebony-clay": "hsl(218, 21%, 18%)",   //#242b37
        "shuttle-gray": "hsl(217, 14%, 42%)",   //#5c6779
      },
      fontSize: {
        "heading-xl": ["80px", {
          fontWeight: "400",
          lineHeight: "80px",
          letterSpacing: "-1px",
        }],
        "heading-l": ["48px", {
          fontWeight: "700",
          lineHeight: "48px",
          letterSpacing: "-0.5px",
        }],
        "heading-m": ["20px", {
          fontWeight: "700",
          lineHeight: "24px",
          letterSpacing: "-0.25px",
        }],
        "heading-s": ["17px", {
          fontWeight: "600",
          lineHeight: "28px",
          letterSpacing: "2.5px",
        }],

        "body-1": ["20px", {
          fontWeight: "400",
          lineHeight: "30px",
          letterSpacing: "0px",
        }],
        "body-2": ["16px", {
          fontWeight: "400",
          lineHeight: "26px",
          letterSpacing: "0px",
        }],
      }
    },
  },
  plugins: [],
} satisfies Config;
