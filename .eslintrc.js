module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "legacyDecorators": true
    },
    "parser": "babel-eslint"
  },
  "extends": [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "plugin:vue/recommended",
    "standard",
    "plugin:security/recommended",
    "plugin:array-func/recommended"
  ],
  "plugins": ["vue", "no-loops", "no-use-extend-native", "security"],
  "rules": {
    "generator-star-spacing": "off",
    "camelcase": 0,
    "no-console": "off",
    "no-useless=catch": "off",
    "vue/no-parsing-error": ["error", {
      "x-invalid-end-tag": false
    }],
    "vue/order-in-components": [
      "error",
      {
        "order": [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "fetch",
          "asyncData",
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          "head",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/attributes-order": [
      "error",
      {
        "order": [
          "DEFINITION",
          "LIST_RENDERING",
          "CONDITIONALS",
          "RENDER_MODIFIERS",
          "GLOBAL",
          "UNIQUE",
          "TWO_WAY_BINDING",
          "OTHER_DIRECTIVES",
          "OTHER_ATTR",
          "EVENTS",
          "CONTENT"
        ],
        "alphabetical": true
      }
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        "singleline": "never",
        "multiline": "always"
      }
    ],
    "no-loops/no-loops": 2,
    "vue/html-self-closing": [
      "error",
      {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }
    ],
    "vue/max-attributes-per-line": [

      "error",
      {
        "singleline": 2,
        "multiline": {
          "max": 1,
          "allowFirstLine": false
        }
      }
    ],
    "vue/no-side-effects-in-computed-properties": 0,
    "object-curly-spacing": ["error", "always"]
  }
}
