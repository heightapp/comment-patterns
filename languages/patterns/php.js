module.exports = {
  name: "PHP",
  nameMatchers: [".php", ".php3", ".php4", ".php5", ".fbp"],
  singleLineComment: require("./common/c-style.js").singleLine(),
  multiLineComment: [
    ...require("./common/c-style.js").multiLine(),
    {
      start: "<!--", // For HTML
      middle: "",
      end: "-->",
    },
  ],
};
