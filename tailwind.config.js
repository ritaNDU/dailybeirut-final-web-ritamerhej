/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000",
        secondary: "#121212",
        backgroundColor: "#fff",
        accentColor: "#fff",
        activeTabBackground: "#ababab",
        textColor: "#1A1C1A",
        focusColor: "#cdcdcd",
        errorColor: "#ff3333",
      },
      fontSize: {
        small: "10px",
        medium: "13px",
        normal: "16px",
        large: "22px",
        extraLarge: "30px",
      },
      backgroundImage: {
        "newspaper-background":
          'url("/src/assets/authenticationbackground.jpg")',
      },
    },
  },
  plugins: [],
};
