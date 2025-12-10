import js from "@eslint/js";
import globals from "globals";
// 🎯 CORRECTED: Removed the named import { rules }
import pluginVue from "eslint-plugin-vue"; 
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,vue}"], 
    // You only need to pass the plugin object, which is the default export
    plugins: { vue: pluginVue }, // 🎯 Note: Changed 'js' to 'vue' for the plugin name for clarity if you need Vue rules later
    extends: [js.configs.recommended], // 🎯 Note: Changed "js/recommended" to the object form
    languageOptions: { 
      globals: {...globals.browser, ...globals.node},
    }, 
    rules: {
      'no-unused-vars': 'warn', 
      'quotes': ['warn', 'single'],
      'semi': ['error', 'always'],

      // 🆕 NEW RECOMMENDED RULES
      //'indent': ['warn', 2, { 'SwitchCase': 1 }], // Enforce 2-space indentation
      'eqeqeq': ['error', 'always'],              // Enforce === and !==
      'curly': 'error',                           // Enforce curly braces around all blocks
      'brace-style': ['error', '1tbs'],           // Enforce one true brace style
      'comma-dangle': ['warn', 'always-multiline'],// Allow/enforce trailing commas
      'no-console': ['warn', { allow: ['warn', 'error'] }] // Disallow console.log
    }
  }, 
  
  // This is the core Vue configuration piece
  pluginVue.configs["flat/essential"],
]);