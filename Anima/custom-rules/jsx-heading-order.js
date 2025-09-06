export default {
  meta: {
    type: "problem",
    docs: {
      description:
        "Check heading levels in JSX follow the correct order (h1→h2→h3…). Warns if heading levels are skipped or start at a level > 1.",
    },
    messages: {
      skipLevel: "Heading hierarchy skipped: {{prev}} → {{current}}",
      noH1: "Heading '{{current}}' used without preceding lower level headings (e.g., missing h1 or h2).",
    },
    schema: [
      {
        type: "object",
        properties: {
          maxSkip: { type: "integer", minimum: 0 },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const headingLevels = [];
    const maxSkip = context.options[0]?.maxSkip ?? 1;

    return {
      JSXOpeningElement(node) {
        if (
          node.name.type === "JSXIdentifier" &&
          /^h[1-6]$/.test(node.name.name)
        ) {
          const level = parseInt(node.name.name[1]);
          headingLevels.push({ node, level });
        }
      },

      "Program:exit"() {
        let lastLevel = 0;
        const seenLevels = new Set();

        for (const { node, level } of headingLevels) {
          // Check for skipping levels
          if (lastLevel && level > lastLevel + maxSkip) {
            context.report({
              node,
              messageId: "skipLevel",
              data: {
                prev: `h${lastLevel}`,
                current: `h${level}`,
              },
            });
          }

          // Check for starting at e.g. h3 without h1/h2 before
          for (let i = 1; i < level; i++) {
            if (!seenLevels.has(i)) {
              context.report({
                node,
                messageId: "noH1",
                data: {
                  current: `h${level}`,
                },
              });
              break;
            }
          }

          seenLevels.add(level);
          lastLevel = level;
        }
      },
    };
  },
};
