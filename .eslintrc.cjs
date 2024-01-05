module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true,
  },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    include: ["src"],
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "jsx-a11y", "prettier"],
  overrides: [
    {
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      files: ["*.js", "*.cjs", "vite-env.d.ts"],
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
    // extensions: [".ts", ".tsx", ".js", ".jsx"],
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".ts", ".tsx"],
      },
    },
    rules: {
      "prettier/prettier": "error",
      "arrow-body-style": "off",
      "prefer-arrow-callback": "off",
      indent: ["error", 2],
      quotes: [
        "error",
        "double",
        {
          allowTemplateLiterals: true,
        },
      ],
      "object-literal-sort-keys": "error",
      "sort-keys": ["error", "asc"],
      semi: ["error", "always"],
      "react/react-in-jsx-scope": "off",
      "react/jsx-sort-props": [
        "error",
        {
          shorthandLast: true,
          reservedFirst: true,
        },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/ban-ts-comment": [
        "warn",
        {
          "ts-ignore": "allow-with-description",
          "ts-expect-error": "allow-with-description",
        },
      ],
    },
  },
};
