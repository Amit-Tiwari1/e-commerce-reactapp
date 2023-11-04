/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgcolor: "#DBDBDB",
        hbgcolor: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
      },
      fontFamily: {
        font: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
