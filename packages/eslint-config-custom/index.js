module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jsdoc', 'json'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:svelte/recommended',
    'turbo',
    'prettier'
  ],
  ignorePatterns: ['*.cjs'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  settings: {
    'svelte3/typescript': () => require('typescript'),
    jsdoc: {
      mode: 'typescript',
      ignorePrivate: true,
      ignoreInternal: true,
      tagNamePreference: {
        hidden: 'internal'
      },
      overrideReplacesDocs: true
    }
  },
  overrides: [
    { files: ['*.svelte'], processor: 'svelte3/svelte3' },
    {
      files: ['*.ts', '*.js', '*.cjs'],
      rules: {
        'jsdoc/check-param-names': 2,
        'jsdoc/check-syntax': 2,
        'jsdoc/check-tag-names': [
          'error',
          {
            definedTags: ['internal', 'typeparam', 'noInheritDoc']
          }
        ],
        'jsdoc/check-types': 2,
        'jsdoc/implements-on-classes': 2,
        'jsdoc/newline-after-description': 1,
        'jsdoc/no-types': 2,
        'jsdoc/no-undefined-types': 2,
        'jsdoc/require-description': [
          'warn',
          {
            exemptedBy: ['internal'],
            contexts: [
              'ArrowFunctionExpression',
              'FunctionDeclaration',
              'FunctionExpression'
            ]
          }
        ],
        'jsdoc/require-hyphen-before-param-description': 0,
        'jsdoc/require-jsdoc': ['warn'],
        'jsdoc/require-param-description': 1,
        'jsdoc/require-returns-check': 2,
        'jsdoc/require-returns-description': 1,
        'jsdoc/valid-types': 2
      }
    }
  ],
  rules: {
    'json/*': [
      'error',
      {
        allowComments: true
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['info', 'warn', 'error']
      }
    ],
    'no-alert': 'error',
    'no-restricted-imports': [
      'error',
      {
        patterns: ['rxjs/Rx']
      }
    ],
    'default-param-last': ['off'],
    'no-shadow': ['off'],
    semi: ['off'],
    '@typescript-eslint/semi': ['error', 'never'],
    'svelte3/semi': ['error', 'never'],
    '@typescript-eslint/no-extra-semi': ['off'],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-dynamic-delete': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-implied-eval': 'error',
    '@typescript-eslint/no-throw-literal': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'none'
        }
      }
    ],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'no-public'
      }
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions']
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['off']
  }
}
