module.exports = {
  theme: {
    screens: {
      print: { raw: "print" }
    },
    extend: {
      maxWidth: {
        letter: "8.5in"
      }
    }
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"]
  }
};
