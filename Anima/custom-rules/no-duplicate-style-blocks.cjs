const stylelint = require('stylelint');

const ruleName = 'custom/no-duplicate-style-blocks';
const messages = stylelint.utils.ruleMessages(ruleName, {
  duplicated: (selector1, selector2) =>
    `Style block for "${selector1}" is identical to "${selector2}"`,
});

module.exports = stylelint.createPlugin(ruleName, () => {
  return (root, result) => {
    const blockMap = new Map();

    root.walkRules(rule => {
      const decls = [];

      rule.walkDecls(decl => {
        decls.push(`${decl.prop.trim()}: ${decl.value.trim()}`);
      });

      const blockKey = decls.sort().join(';');

      if (blockMap.has(blockKey)) {
        const previous = blockMap.get(blockKey);
        stylelint.utils.report({
          message: messages.duplicated(rule.selector, previous.selector),
          node: rule,
          result,
          ruleName,
        });
      } else {
        blockMap.set(blockKey, { selector: rule.selector });
      }
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
