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
  plugins: [
    require("tailwindcss-multi-column")(),
    plugin(function ({ addUtilities }) {
      const columnUtils = {
        ".hyphens-manual": {
          hyphens: "manual",
        },
        ".break-after-col": {
          "break-after": "column",
        },
        ".break-inside-avoid": {
          "break-inside": "avoid",
        },
        ".break-after-avoid": {
          "break-after": "avoid",
        },
        ".break-before-avoid": {
          "break-after": "avoid",
        },
      };

      addUtilities(columnUtils, {
        variants: ["responsive"],
      });
    }),
  ],
};
