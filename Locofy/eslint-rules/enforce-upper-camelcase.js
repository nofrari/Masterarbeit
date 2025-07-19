function isUpperCamelCase(name) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforces UpperCamelCase for interface and type declarations, as well as component names.",
    },
    messages: {
      notUpperCamelCase: "'{{name}}' should be in UpperCamelCase.",
    },
    schema: [],
  },

  create(context) {
    function checkName(name, node) {
      if (!isUpperCamelCase(name)) {
        context.report({
          node,
          messageId: "notUpperCamelCase",
          data: { name },
        });
      }
    }

    return {
      TSInterfaceDeclaration(node) {
        if (node.id?.name) {
          checkName(node.id.name, node.id);
        }
      },
      TSTypeAliasDeclaration(node) {
        if (node.id?.name) {
          checkName(node.id.name, node.id);
        }
      },

      VariableDeclarator(node) {
        if (
          node.id?.type === "Identifier" &&
          node.init?.type === "ArrowFunctionExpression"
        ) {
          checkName(node.id.name, node.id);
        }
      },

      FunctionDeclaration(node) {
        if (
          node.id?.type === "Identifier" &&
          node.parent?.type === "ExportDefaultDeclaration"
        ) {
          checkName(node.id.name, node.id);
        }
      },
    };
  },
};
