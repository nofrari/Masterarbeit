// eslint-rules/count-html-tags.js

const tagCounts = {};

export default {
  meta: {
    type: "problem",
    docs: {
      description: "Zählt die Verwendung aller HTML-Tags im JSX-Code.",
    },
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.type === "JSXIdentifier") {
          const tagName = node.name.name;

          // Nur native HTML-Tags (kleingeschrieben)
          if (tagName === tagName.toLowerCase()) {
            tagCounts[tagName] = (tagCounts[tagName] || 0) + 1;
          }
        }
      },

      'Program:exit'() {
        if (context.getFilename().includes("node_modules")) return;

        const filePath = context.getFilename();
        console.log(`\n[${filePath}] HTML-Tags:`);

        for (const [tag, count] of Object.entries(tagCounts)) {
          console.log(`- <${tag}>: ${count}`);
        }
      }
    };
  }
};
