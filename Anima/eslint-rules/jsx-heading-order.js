export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Check heading levels in JSX follow the correct order (h1→h2→h3…)",
    },
    messages: {
      skipLevel: "Heading hierarchy skipped: {{prev}} → {{current}}",
    },
    schema: [
      {
        type: "object",
        properties: {
          maxSkip: { type: "integer", minimum: 1 },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context) {
    let lastLevel = 0;
    const maxSkip = 0;

    return {
      JSXOpeningElement(node) {
        if (
          node.name.type === "JSXIdentifier" &&
          /^h[1-6]$/.test(node.name.name)
        ) {
          const current = parseInt(node.name.name[1]);
          if (lastLevel && current > lastLevel + maxSkip) {
            context.report({
              node,
              messageId: "skipLevel",
              data: {
                prev: `h${lastLevel}`,
                current: `h${current}`,
              },
            });
          }
          lastLevel = current;
        }
      },
    };
  },
};
