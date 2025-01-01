import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import pluginVitest from "@vitest/eslint-plugin";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
  },

  {
    name: "app/files-to-ignore",
    ignores: ["**/dist/**", "**/dist-ssr/**", "**/coverage/**"],
  },

  ...pluginVue.configs["flat/recommended"],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ["src/**/__tests__/*"],
  },
  skipFormatting,

  {
    rules: {
      "no-console": "warn",
      "no-debugger": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "no-new-object": "error",
      "object-shorthand": "error",
      "no-array-constructor": "error",
      "prefer-destructuring": "error",
      "prefer-template": "error",
      "func-style": "error",
      "no-loop-func": "error",
      "prefer-rest-params": "error",
      "default-param-last": "error",
      "no-param-reassign": "error",
      "prefer-spread": "error",
      "prefer-arrow-callback": "error",
      "no-duplicate-imports": "error",
      "dot-notation": "error",
      "no-unneeded-ternary": "error",
      "no-warning-comments": "warn",
      "no-unused-vars": "off", // Handled by "@typescript-eslint/no-unused-vars"
    },
  },
  {
    rules: {
      "@typescript-eslint/ban-ts-comment": "warn",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
];
