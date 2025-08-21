export default {
  meta: {
    type: "problem",
    docs: {
      description: "Detects empty alt attributes on media elements unless marked as decorative",
    },
    messages: {
      emptyAlt:
        "`alt` is empty but element is not marked as decorative (e.g., role='presentation' or aria-hidden='true').",
    },
    schema: [],
  },

  create(context) {
    function isDecorative(attributes) {
      return attributes.some((attr) => {
        if (attr.type !== "JSXAttribute") return false;
        if (attr.name.name === "role" && attr.value?.value === "presentation") return true;
        if (attr.name.name === "aria-hidden" && attr.value?.value === "true") return true;
        return false;
      });
    }

    return {
      JSXOpeningElement(node) {
        const tag = node.name.type === "JSXIdentifier" ? node.name.name : null;
        const relevantTags = ["img", "area", "input", "object"];
        if (!tag || !relevantTags.includes(tag)) return;

        if (tag === "input") {
          const typeAttr = node.attributes.find(
            (attr) =>
              attr.type === "JSXAttribute" &&
              attr.name.name === "type" &&
              attr.value?.type === "Literal" &&
              attr.value.value === "image"
          );
          if (!typeAttr) return;
        }

        const altAttr = node.attributes.find(
          (attr) =>
            attr.type === "JSXAttribute" &&
            attr.name.name === "alt"
        );

        if (
          altAttr &&
          altAttr.value?.type === "Literal" &&
          altAttr.value.value === "" &&
          !isDecorative(node.attributes)
        ) {
          context.report({
            node: altAttr,
            messageId: "emptyAlt",
          });
        }
      },
    };
  },
};
