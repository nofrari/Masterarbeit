module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow redundant type suffixes in identifier names",
    },
    messages: {
      redundantSuffix:
        "Identifier '{{name}}' contains a redundant type suffix '{{suffix}}'. Consider renaming it.",
    },
    schema: [],
  },

  create(context) {
    const typeSuffixes = {
      string: ["string"],
      number: ["number"],
      boolean: ["boolean"],
      array: ["array", "list"],
      object: ["object"],
      date: ["date"],
      function: ["function", "fn", "callback"],
    };

    function getTypeName(typeAnnotation) {
      if (!typeAnnotation) return null;

      const node = typeAnnotation.typeAnnotation;

      switch (node.type) {
        case "TSStringKeyword":
          return "string";
        case "TSNumberKeyword":
          return "number";
        case "TSBooleanKeyword":
          return "boolean";
        case "TSArrayType":
          return "array";
        case "TSTypeReference":
          if (node.typeName?.name) {
            const typeName = node.typeName.name.toLowerCase();
            if (typeName === "date") return "date";
            if (typeName === "array") return "array";
            return typeName;
          }
          return "object";
        case "TSFunctionType":
          return "function";
        default:
          return null;
      }
    }

    function checkName(node, name, typeAnnotation) {
      const type = getTypeName(typeAnnotation);
      if (!type || !typeSuffixes[type]) return;

      const loweredName = name.toLowerCase();

      for (const suffix of typeSuffixes[type]) {
        if (loweredName.endsWith(suffix)) {
          context.report({
            node,
            messageId: "redundantSuffix",
            data: { name, suffix },
          });
        }
      }
    }

    return {
      VariableDeclarator(node) {
        if (node.id?.type === "Identifier" && node.id.typeAnnotation) {
          checkName(node.id, node.id.name, node.id.typeAnnotation);
        }
      },
      TSPropertySignature(node) {
        if (node.key?.type === "Identifier" && node.typeAnnotation) {
          checkName(node, node.key.name, node.typeAnnotation);
        }
      },
      PropertyDefinition(node) {
        if (node.key?.type === "Identifier" && node.typeAnnotation) {
          checkName(node, node.key.name, node.typeAnnotation);
        }
      },
      FunctionDeclaration(node) {
        for (const param of node.params) {
          if (param.type === "Identifier" && param.typeAnnotation) {
            checkName(param, param.name, param.typeAnnotation);
          }
        }
      },
    };
  },
};
