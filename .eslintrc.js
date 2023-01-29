module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:@next/next/recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "@typescript-eslint/eslint-plugin",
    "react-hooks",
    "unused-imports",
    "eslint-plugin-import",
  ],
  rules: {
    // semi: "off",
    "@typescript-eslint/no-shadow": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/semi": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "arrow-body-style": "off",
    "react/jsx-fragments": "off",
    "react/no-array-index-key": "off",
    "import/namespace": "off",
    "import/no-cycle": [1, { maxDepth: 1 }],
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "no-return-await": "off",
    "@typescript-eslint/return-await": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // we need to find a way to fix the absolute imports.

    "react/jsx-props-no-spreading": "off",
    // "require-default-props": "off",
    // TODO: upgrade to latest eslint tooling
    "react/prop-types": "off",
    // Need to find a better way to handle this
    "import/prefer-default-export": 0,
    "import/no-unresolved": 0,

    // suppress errors for missing 'import React' in files
    // "react/react-in-jsx-scope": "off",
    // allow jsx syntax in js files (for next.js project)
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ], //should add ".ts" if typescript project

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
