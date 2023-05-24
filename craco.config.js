/* eslint-disable unicorn/prefer-module */
const path = require('node:path')

module.exports = {
  jest: {
    configure: {
      moduleNameMapper: {
        '^@app(.*)$': '<rootDir>/src$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@pages(.*)$': '<rootDir>/src/pages$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@features(.*)$': '<rootDir>/src/features$1',
        '^@store(.*)$': '<rootDir>/src/store$1',
      },
    },
  },
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@app': path.resolve(__dirname, 'src/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@store': path.resolve(__dirname, 'src/store/'),
    },
  },
}
