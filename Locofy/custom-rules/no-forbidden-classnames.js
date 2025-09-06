module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallows certain className values",
    },
    messages: {
      forbiddenClass: "className '{{classname}}' contains forbidden word '{{word}}'.",
    },
    schema: [
      {
        type: "object",
        properties: {
          forbidden: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const forbidden = context.options[0]?.forbidden ?? [];

    return {
      JSXAttribute(node) {
        if (node.name.name !== "className") return;

        const val = node.value;
        if (val?.type === "Literal" && typeof val.value === "string") {
          for (const word of forbidden) {
            if (val.value.includes(word)) {
              context.report({
                node,
                messageId: "forbiddenClass",
                data: { word, classname: val.value },
              });
            }
          }
        }
      },
    };
  },
};
