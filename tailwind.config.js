/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      md: ["18px", "24px"],
      lg: ["20px", "24px"],
      otp: ["32px", "24px"],
      xl: ["40px", "24px"],
    },
    extend: {
      colors: {
        black: "#09090B",
        "blue-light": "#8098F9",
        "blue-dark": "#6172F3",
        "blue-royal": "#2D31A6",
        "blue-sky": "#E0EAFF",
        gray: "#71717A",
      },
      fontFamily: {
        inter: ["Inter"],
        montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
