export default {
  meta: {
    type: "problem",
    docs: {
      description: "Limits the number of props per component",
    },
    messages: {
      tooManyProps:
        "Too many props defined ({{actual}}). Maximum allowed: {{max}}.",
    },
    schema: [
      {
        type: "object",
        properties: {
          max: { type: "number" },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const max = context.options[0]?.max ?? 3;

    function checkMembers(members, node) {
      const propCount = members.filter(
        (m) => m.type === "TSPropertySignature"
      ).length;

      if (propCount > max) {
        context.report({
          node,
          messageId: "tooManyProps",
          data: { actual: propCount, max },
        });
      }
    }

    return {
      TSInterfaceBody(node) {
        checkMembers(node.body, node);
      },
      TSTypeLiteral(node) {
        checkMembers(node.members, node);
      },
    };
  },
};
