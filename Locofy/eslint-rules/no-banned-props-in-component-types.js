module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallows certain props in component type definitions",
    },
    messages: {
      forbiddenProp: "Component prop '{{name}}' is forbidden.",
    },
    schema: [
      {
        type: "object",
        properties: {
          bannedProps: {
            type: "array",
            items: { type: "string" },
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const bannedProps = context.options[0]?.bannedProps || [
      "className",
      "style",
    ];

    return {
      TSTypeLiteral(node) {
        for (const member of node.members) {
          if (
            member.type === "TSPropertySignature" &&
            member.key?.type === "Identifier" &&
            bannedProps.includes(member.key.name)
          ) {
            context.report({
              node: member,
              messageId: "forbiddenProp",
              data: { name: member.key.name },
            });
          }
        }
      },

      TSInterfaceBody(node) {
        for (const member of node.body) {
          if (
            member.type === "TSPropertySignature" &&
            member.key?.type === "Identifier" &&
            bannedProps.includes(member.key.name)
          ) {
            context.report({
              node: member,
              messageId: "forbiddenProp",
              data: { name: member.key.name },
            });
          }
        }
      },
    };
  },
};
