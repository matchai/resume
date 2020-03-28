const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    screens: {
      print: { raw: "print" },
      ...defaultTheme.screens,
    },
    extend: {
      maxWidth: {
        letter: "8.5in",
      },
      height: {
        letter: "11in",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [require("tailwindcss-multi-column")()],
};
