module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        max: "1200",
        mid: "900px",
        min: "600px",
      },
      spacing: {
        108: "27rem",
        120: "30rem",
        132: "33rem",
        144: "36rem",
      },
      animation: {
        spin: "spin 12s linear infinite",
      },
      colors: {
        custom: {
          current:" rgb(30 64 175)",
          "orange-1": "rgb(255, 79, 0)",
          pink: "rgb(255, 117, 142)",
          purple: "rgb(229, 92, 255)",
          "blue-1": "rgb(130, 71, 245)",
          "blue-2": "rgb(0, 153, 255)",
          "blue-3": "rgb(10, 232, 240)",
          "green-1": "rgb(23, 232, 133)",
          "green-2": "rgb(204, 240, 0)",
          yellow: "rgb(248, 228, 54)",
          "orange-2": "rgb(255, 166, 0)",
          "gray-1": "rgb(235, 235, 224)",
          "purple-1": "rgb(213, 128, 255)",
        },
      },
      width: {
        '80px': '80px',
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
