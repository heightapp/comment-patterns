module.exports = {
  name: "TWIG",
  nameMatchers: [".twig"],
  singleLineComment: require("./common/c-style.js").singleLine(), // For scripts
  multiLineComment: [
    ...require("./common/c-style.js").multiLine(), // For scripts
    {
      start: "{#",
      middle: "",
      end: "#}",
    },
  ],
};
