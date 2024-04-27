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
        shadowColor: "#000",
      },
      fontSize: {
        small: "10px",
        normal: "15px",
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
