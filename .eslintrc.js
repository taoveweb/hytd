module.exports = {
  root: true,
  extends: ['plugin:node/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020
  },
  rules: {
    'no-debugger': ['error'],
    'node/no-missing-import': [
      'error',
      {
        allowModules: ['types', 'estree', 'testUtils'],
        tryExtensions: ['.ts', '.js', '.jsx', '.tsx']
      }
    ],
    'node/no-missing-require': [
      'error',
      {
        // for try-catching yarn pnp
        allowModules: ['pnpapi'],
        tryExtensions: ['.ts', '.js', '.jsx', '.tsx']
      }
    ],
    'node/no-restricted-require': [
      'error',
      Object.keys(require('./packages/hytd/package.json').devDependencies).map(
        (d) => ({
          name: d,
          message:
            `devDependencies can only be imported using ESM syntax so ` +
            `that they are included in the rollup bundle. If you are trying to ` +
            `lazy load a dep, use (await import('dep')).default instead.`
        })
      )
    ],
    'node/no-extraneous-import': [
      'error',
      {
        allowModules: ['hytd', 'less', 'sass']
      }
    ],
    'node/no-extraneous-require': [
      'error',
      {
        allowModules: ['hytd']
      }
    ],
    'node/no-deprecated-api': 'off',
    'node/no-unpublished-import': 'off',
    'node/no-unpublished-require': 'off',
    'node/no-unsupported-features/es-syntax': 'off',
    'no-process-exit': 'off'
  },
  overrides: [
    {
      files: ['packages/hytd/src/node/**'],
      rules: {
        'no-console': ['error']
      }
    },
    {
      files: ['packages/playground/**'],
      rules: {
        'node/no-extraneous-import': 'off',
        'node/no-extraneous-require': 'off'
      }
    },
    {
      files: ['packages/create-app/template-*/**'],
      rules: {
        'node/no-missing-import': 'off'
      }
    }
  ]
};
