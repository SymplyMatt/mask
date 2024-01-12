/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#3490dc",
      },
      screens: {
        "sm-phone": "350px",
        phone: "450px",
        sm: "640px",
        "sm-tab": "700px",
        md: "1200px",
        mm: "900px",
        lg: "1500px",
        xl: "2000px",
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
      },
      colors: {
        fadedBlack: "#646668",
        greyBorder: "#EEF0F1",
        textColorDark: "#4E4E4E",
        darkModeColorLight: "#192734",
        darkModeColorThick: "#15202B",
        textGreyDark: "#959da5",
      },
      textColor: {
        thickGreen: "#188475",
      },
      spacing: {
        5: "5px",
        10: "10px",
        12: "12px",
        11: "11px",
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
        32: "32px",
        40: "40px",
        48: "48px",
        50: "50px",
        56: "56px",
        64: "64px",
        80: "80px",
        96: "96px",
        120: "120px",
        160: "160px",
        180: "180px",
        200: "200px",
        400: "400px",
      },
      minHeight: {
        50: "70px",
        70: "70px",
        100: "70px",
        200: "70px",
        500: "70px",
      },
      height: {
        80: "80px",
      },
    },
  },
  plugins: [],
};