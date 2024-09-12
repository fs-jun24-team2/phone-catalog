import js from "@eslint/js";
import globals from "globals";
import react from 'eslint-plugin-react';
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier'; 
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [
      js.configs.recommended,
      "plugin:react/recommended",
      "plugin:@typescript-eslint/recommended",
      'plugin:prettier/recommended',
       prettierConfig, 
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      globals: globals.browser,
    },
    settings: {
      "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {},
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint,
      prettier,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "react/react-in-jsx-scope": "off",
      'prettier/prettier': 'warn',
    },
  }
);
