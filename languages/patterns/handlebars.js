module.exports = {
  name: "Handlebars",
  nameMatchers: [".handlebars", ".hbs"],
  singleLineComment: require("./common/c-style.js").singleLine(), // For scripts
  multiLineComment: [
    ...require("./common/c-style.js").multiLine(), // For scripts
    {
      start: "<!--",
      middle: "",
      end: "-->",
    },
    {
      start: "{{!--",
      middle: "",
      end: "--}}",
      apidoc: true,
    },
    {
      start: "{{!",
      middle: "",
      end: "}}",
    },
  ],
};
