module.exports = {
  name: "JavaScript",
  nameMatchers: [".js", ".mjs", ".cjs", ".jsx"],
  multiLineComment: require("./common/c-style.js").multiLine(),
  singleLineComment: require("./common/c-style.js").singleLine(),
};
