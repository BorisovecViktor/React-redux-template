/* eslint-disable unicorn/prefer-module */
const restrictedGlobals = require('confusing-browser-globals')

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  plugins: [
    'testing-library',
    'fp',
    'promise',
    // https://github.com/emotion-js/emotion/tree/main/packages/eslint-plugin
    '@emotion',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:all',
    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules
    'plugin:jsx-a11y/recommended',
    // https://github.com/yannickcr/eslint-plugin-react/tree/master
    'plugin:react/all',
    'plugin:react/jsx-runtime',
    // https://github.com/prettier/eslint-plugin-prettier
    'plugin:prettier/recommended',
    // https://github.com/SonarSource/eslint-plugin-sonarjs
    'plugin:sonarjs/recommended',
    // https://github.com/sindresorhus/eslint-plugin-unicorn
    'plugin:unicorn/recommended',
    // https://github.com/nodesecurity/eslint-plugin-security
    'plugin:security/recommended',
    // https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks
    'plugin:react-hooks/recommended',
    // https://github.com/azeemba/eslint-plugin-json
    'plugin:json/recommended',
    // https://github.com/ota-meshi/eslint-plugin-regexp
    'plugin:regexp/all',
    // https://github.com/jfmengels/eslint-plugin-fp
    'plugin:fp/recommended',
    // https://github.com/mysticatea/eslint-plugin-eslint-comments
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // @ESLint
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'max-lines': 'off',
    'one-var': 'off',
    'no-ternary': 'off',
    'id-length': 'off',
    'max-lines-per-function': 'off',
    'consistent-return': 'off',
    'no-magic-numbers': 'off',
    'no-undefined': 'off',
    'no-erroring-comments': 'off',
    'no-warning-comments': 'off',
    'max-statements': 'off',
    'capitalized-comments': 'off',
    'no-inline-comments': 'off',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'dot-notation': 'off',
    'func-names': 'off',
    'prefer-destructuring': 'off',
    'no-console': 'off',
    camelcase: 'off',
    'multiline-comment-style': 'off',
    'no-void': 'off',
    complexity: 'off',
    // Custom
    'no-restricted-globals': ['error', ...restrictedGlobals],

    // @Emotion
    '@emotion/import-from-emotion': 'error',
    '@emotion/no-vanilla': 'error',
    '@emotion/syntax-preference': ['error', 'object'],
    '@emotion/styled-import': 'error',
    '@emotion/jsx-import': 'error',
    '@emotion/pkg-renaming': 'error',

    // @React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // @Comments
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/disable-enable-pair': 'off',

    // @Regexp
    'regexp/strict': 'off',
    'regexp/prefer-w': 'off',
    'prefer-named-capture-group': 'off',
    'require-unicode-regexp': 'off',
    'regexp/prefer-named-capture-group': 'off',
    'regexp/prefer-plus-quantifier': 'off',
    'regexp/no-contradiction-with-assertion': 'off',
    'regexp/no-dupe-characters-character-class': 'off',
    'regexp/order-in-character-class': 'off',
    'regexp/no-obscure-range': 'off',
    'regexp/prefer-d': 'off',
    'regexp/sort-character-class-elements': 'off',
    'regexp/sort-alternatives': 'off',
    'regexp/no-useless-character-class': 'off',
    'regexp/require-unicode-regexp': 'off',
    'regexp/use-ignore-case': 'off',
    'regexp/prefer-regexp-exec': 'off',
    'regexp/prefer-regexp-test': 'off',

    // @jsx-a11y
    'jsx-a11y/tabindex-no-positive': 'off',

    // @React
    'react/prop-types': 'off',
    'react/display-name': 'off',
    // Consider enabling
    'react/function-component-definition': 'off',
    'react/forbid-component-props': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-max-depth': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-leaked-render': 'off',
    'react/jsx-no-literals': 'off',
    // Consider enabling
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-multi-comp': 'off',
    'react/no-array-index-key': 'off',
    // Consider enabling
    'react/no-unstable-nested-components': 'off',

    // @Unicorn
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['^setupTests.ts$', '^\\[.+\\].tsx$'],
      },
    ],
    'unicorn/custom-error-definition': 'error',
    'unicorn/import-index': 'error',
    'unicorn/no-keyword-prefix': ['error', { disallowedPrefixes: [] }],
    // Conflicts with prettier
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/no-unused-properties': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-object-has-own': 'error',
    'unicorn/prefer-string-replace-all': 'off',
    'unicorn/prefer-add-event-listener': 'off',
    'unicorn/prefer-dom-node-text-content': 'off',
    'unicorn/prefer-string-slice': 'off',
    'unicorn/no-useless-spread': 'off',
    'unicorn/prefer-export-from': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/consistent-destructuring': 'off',
    // Not allowed in create-react-app
    'unicorn/prefer-top-level-await': 'off',
    'unicorn/string-content': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/better-regex': 'off',
    'unicorn/prefer-regexp-test': 'off',
    // We need nulls
    'unicorn/no-null': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        replacements: {
          req: false,
          res: false,
          ctx: false,
          prop: false,
          props: false,
          args: false,
          ref: false,
          idx: false,
          param: false,
          params: false,
          str: false,
          env: false,
          err: false,
        },
      },
    ],

    // This is the only option in sonarjs disabled by default.
    'sonarjs/elseif-without-else': 'error',
    // Say "yes" to long functions.
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'off',
    'sonarjs/no-identical-expressions': 'off',

    // @Security
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-new-buffer': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    // Has thrown false positives
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-non-literal-regexp': 'off',
    'security/detect-non-literal-require': 'error',
    // How to deal with it?
    'security/detect-object-injection': 'off',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',
    'security/detect-unsafe-regex': 'off',

    // @FP
    'fp/no-arguments': 'error',
    'fp/no-class': 'error',
    'fp/no-delete': 'error',
    'fp/no-events': 'error',
    'fp/no-get-set': 'error',
    'fp/no-let': 'error',
    'fp/no-loops': 'off',

    'fp/no-mutating-assign': 'error',
    'fp/no-mutating-methods': [
      'off',
      {
        allowedObjects: ['history', 'form'],
      },
    ],
    // Temporary disabled
    'fp/no-mutation': ['off', { commonjs: true }],
    // I'm not ready for this.
    'fp/no-nil': 'off',
    'fp/no-proxy': 'error',
    'fp/no-rest-parameters': 'off',
    'fp/no-this': 'error',
    // Some libs depend on throwing errors, unfortunately.
    'fp/no-throw': 'off',
    // It's just impossible in React app.
    'fp/no-unused-expression': 'off',
    'fp/no-valueof-field': 'error',

    // @Promise
    'promise/param-names': 'error',
    'promise/no-return-wrap': 'error',
    'promise/always-return': 'error',
    'promise/catch-or-return': 'error',
    'promise/prefer-await-to-callbacks': 'off',
    'promise/prefer-await-to-then': 'off',
    'promise/no-callback-in-promise': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-nesting': 'error',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',

    // @Prettier
    'prettier/prettier': [
      'off',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        endOfLine: 'auto',
        proseWrap: 'preserve',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      env: {
        jest: true,
        'jest/globals': true,
      },
      extends: [
        // https://github.com/jest-community/eslint-plugin-jest
        'plugin:jest/all',
        // https://github.com/testing-library/eslint-plugin-jest-dom
        'plugin:jest-dom/all',
        // https://github.com/testing-library/eslint-plugin-testing-library
        'plugin:testing-library/react',
      ],
      rules: {
        // Set all testing-library rules to error.
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-container': 'error',
        'testing-library/no-debugging-utils': 'error',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-node-access': 'error',
        'testing-library/no-promise-in-fire-event': 'error',
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/prefer-find-by': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/render-result-naming-convention': 'error',
        'testing-library/await-fire-event': 'error',
        'testing-library/consistent-data-testid': [
          'error',
          { testIdPattern: 'data-testid' },
        ],
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-render-in-setup': 'error',
        'testing-library/no-unnecessary-act': 'error',
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-query-by-disappearance': 'error',
        'testing-library/prefer-user-event': 'error',
        'testing-library/prefer-wait-for': 'error',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        // Typescript-eslint specific options
        errorOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // Make sure to disable the ESLint rule here.
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        'default-case': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        'no-dupe-class-members': 'off',
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        'no-undef': 'off',

        // Disabling
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        // Consider enabling
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/object-curly-spacing': 'off',
        '@typescript-eslint/no-type-alias': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/no-extra-parens': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        // Enable, but how it works?
        '@typescript-eslint/prefer-readonly-parameter-types': 'off',
        // Enable to Array<>
        '@typescript-eslint/array-type': 'off',
        '@typescript-eslint/no-magic-numbers': 'off',
        // Enable
        '@typescript-eslint/no-unsafe-argument': 'off',
        // Enable
        '@typescript-eslint/no-explicit-any': 'warn',
        // Enable
        '@typescript-eslint/no-unnecessary-type-assertion': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-throw-literal': 'off',
        // Enable
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        // Allow underscored
        '@typescript-eslint/no-unused-vars': 'off',
        // Consider enabling
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        // Consider enabling
        '@typescript-eslint/no-unsafe-return': 'off',
        // Enable
        '@typescript-eslint/no-unsafe-assignment': 'off',
        // Enable
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
        // Enable
        '@typescript-eslint/no-unsafe-call': 'off',
        // Disabling all other rules that require type checking
        '@typescript-eslint/await-thenable': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-for-in-array': 'off',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/prefer-regexp-exec': 'off',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/unbound-method': 'off',
      },
    },
  ],
}

/* eslint-enable unicorn/prefer-module */
