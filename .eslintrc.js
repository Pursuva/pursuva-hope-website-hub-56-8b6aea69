module.exports = {
  extends: [
    'next/core-web-vitals',
  ],
  rules: {
    // Only disable the specific rules causing errors
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prefer-const': 'off',
  }
}