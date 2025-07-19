function isLowerCamelCase(name) {
  return /^[a-z][a-zA-Z0-9]*$/.test(name);
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Enforces lowerCamelCase for variables and props.",
    },
    messages: {
      notCamelCase: "'{{name}}' should be in lowerCamelCase.",
    },
    schema: [],
  },

  create(context) {
    function reportIfInvalid(name, node) {
      if (name && !isLowerCamelCase(name)) {
        context.report({
          node,
          messageId: "notCamelCase",
          data: { name },
        });
      }
    }

    return {
      VariableDeclarator(node) {
        if (
          node.id.type === "Identifier" &&
          node.init &&
          node.init.type !== "ArrowFunctionExpression" && // keine Komponente
          node.init.type !== "ClassExpression"
        ) {
          reportIfInvalid(node.id.name, node.id);
        }
      },

      Property(node) {
        if (
          node.key &&
          node.key.type === "Identifier" &&
          node.value.type !== "FunctionExpression" &&
          node.value.type !== "ArrowFunctionExpression"
        ) {
          reportIfInvalid(node.key.name, node.key);
        }
      },
    };
  },
};
