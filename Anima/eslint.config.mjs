import parser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import stylistic from '@stylistic/eslint-plugin'
import noForbiddenClassnames from "./eslint-rules/no-forbidden-classnames.js";
import noBannedPropsInComponentTypes from "./eslint-rules/no-banned-props-in-component-types.js";
import limitNumberOfProps from "./eslint-rules/limit-number-of-props.js";
import jsxHeadingOrder from "./eslint-rules/jsx-heading-order.js";
import onlyOneH1 from "./eslint-rules/only-one-h1.js";
import enforceLowerCamelcase from "./eslint-rules/enforce-lower-camelcase.js";
import enforceUpperCamelcase from "./eslint-rules/enforce-upper-camelcase.js";
import noRedundantTypeSuffix from "./eslint-rules/no-redundant-type-suffix.js";
import checkEmptyAltTag from "./eslint-rules/check-empty-alt.js";
import noDuplicateStyleBlocks from "./eslint-rules/no-duplicate-style-blocks.cjs";
import countHTMLTags from "./eslint-rules/count-html-tags.js";

import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "**/*.stories.ts",
      "**/*.stories.tsx",
      ".storybook/**",
      "vite.config.ts",
      "eslint.config.mjs",
    ],
  },
  {
    languageOptions: {
      parser,
      parserOptions: {
        project: "./tsconfig.app.json",
        tsconfigRootDir: process.cwd(),
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "jsx-a11y": jsxA11y,
      "@stylistic": stylistic,
      custom: {
        rules: {
          "no-forbidden-classnames": noForbiddenClassnames,
          "no-banned-props-in-component-types": noBannedPropsInComponentTypes,
          "limit-number-of-props": limitNumberOfProps,
          "jsx-heading-order": jsxHeadingOrder,
          "only-one-h1": onlyOneH1,
          "enforce-lower-camelcase": enforceLowerCamelcase,
          "enforce-upper-camelcase": enforceUpperCamelcase,
          "no-redundant-type-suffix": noRedundantTypeSuffix,
          "check-empty-alt": checkEmptyAltTag,
          "no-duplicate-style-blocks": noDuplicateStyleBlocks,
          "count-html-tags": countHTMLTags,
        },
      },
    },
    rules: {
      // "max-lines": ["error", 300],
      // "id-length": ["error", { min: 2, max: 10 }],
      // "max-len": ["error", { code: 80 }],
      "@stylistic/max-len": ["error", { code: 80 }],

      // "@typescript-eslint/no-explicit-any": "error",
      // "@typescript-eslint/explicit-module-boundary-types": "error",
      // "@typescript-eslint/explicit-function-return-type": "error",

      // "jsx-a11y/alt-text": "error",
      // "jsx-a11y/anchor-is-valid": "error",
      // "jsx-a11y/lang": "error",
      // "jsx-a11y/label-has-associated-control": "error",
      // "jsx-a11y/img-redundant-alt": "error",

      // "react/jsx-max-depth": ["error", { max: 4 }],
      // "react/jsx-handler-names": "error",
      // "react/boolean-prop-naming": [
      //   "error",
      //   {
      //     "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+",
      //     "propTypeNames": ["bool"],
      //     "validateNested": true,
      //     "message": "Boolean props should be named like isX or hasY"
      //   }
      // ],

      // Bezieht sich nicht auf Descriptive Terminology 
      // "react/jsx-pascal-case": "error",

    // "custom/no-forbidden-classnames": [
    //   "error",
    //   {
    //     forbidden: [
    //       "a",
    //       "body",
    //       "button",
    //       "div",
    //       "form",
    //       "footer",
    //       "h1",
    //       "h2",
    //       "h3",
    //       "h4",
    //       "h5",
    //       "h6",
    //       "header",
    //       "i",
    //       "iframe",
    //       "img",
    //       "input",
    //       "label",
    //       "li",
    //       "main",
    //       "ol",
    //       "p",
    //       "section",
    //       "span",
    //       "strong",
    //       "table",
    //       "td",
    //       "textarea",
    //       "th",
    //       "tr",
    //       "ul",
    //     ],
    //   },
    // ],
    // "custom/no-redundant-type-suffix": "error",
      //Diese Regel ist eigenltich unnötig, da sie in keiner Metrik widergespiegelt wird.
      // "custom/no-banned-props-in-component-types": [
      //   "error",
      //   { bannedProps: ["className", "style"] },
      // ],

      // "custom/limit-number-of-props": ["error", { max: 3 }],
      // "custom/jsx-heading-order": ["error", { maxSkip: 1 }],
      // "custom/only-one-h1": "error",
      // "custom/no-duplicate-style-blocks": "error",
      // "custom/count-html-tags": "warn",

      // Bezieht sich nicht auf Descriptive Terminology
      // "custom/enforce-lower-camelcase": "error",
      // "custom/enforce-upper-camelcase": "error",

      // "custom/check-empty-alt": "error",

      // "jsx-a11y/interactive-supports-focus": "error",
      // "jsx-a11y/no-noninteractive-tabindex": "error",
      // "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
      // "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      // "jsx-a11y/no-noninteractive-element-interactions": "error",
      // "jsx-a11y/no-static-element-interactions": "error"
    },
  },
]);
