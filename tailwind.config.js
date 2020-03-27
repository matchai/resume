const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    screens: {
      print: { raw: "print" }
    },
    extend: {
      maxWidth: {
        letter: "8.5in"
      },
      height: {
        letter: "11in"
      }
    }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"]
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const columnUtils = {
        ".col-count-1": {
          "column-count": "1"
        },
        ".col-count-2": {
          "column-count": "2"
        },
        ".col-count-3": {
          "column-count": "3"
        },
        ".col-gap-md": {
          "column-gap": "2.1875rem"
        },
        ".hyphens-manual": {
          hyphens: "manual"
        },
        ".break-after-col": {
          "break-after": "column"
        },
        ".break-inside-avoid": {
          "break-inside": "avoid"
        },
        ".break-after-avoid": {
          "break-after": "avoid"
        },
        ".break-before-avoid": {
          "break-after": "avoid"
        },
        ".col-fill-auto": {
          "column-fill": "auto"
        },
        ".col-fill-balance": {
          "column-fill": "balance"
        }
      };

      addUtilities(columnUtils, {
        variants: ["responsive"]
      });
    })
  ]
};
