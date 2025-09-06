// eslint-rules/count-html-tags.js

const tagCounts = {};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Counts the usage of all HTML tags in JSX code.",
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
