module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Allows only one <h1> per file",
    },
    messages: {
      multipleH1:
        "Only one <h1> element is allowed per file, but {{count}} found.",
    },
    schema: [],
  },

  create(context) {
    let h1Count = 0;

    return {
      JSXOpeningElement(node) {
        if (node.name.type === "JSXIdentifier" && node.name.name === "h1") {
          h1Count++;
          if (h1Count > 1) {
            context.report({
              node,
              messageId: "multipleH1",
              data: { count: h1Count },
            });
          }
        }
      },
      "Program:exit"() {
        h1Count = 0; // Reset für nächste Datei
      },
    };
  },
};
