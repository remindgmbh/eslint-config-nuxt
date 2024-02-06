module.exports = {
    extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
    root: true,
    rules: {
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            {
                argsIgnorePattern: '^_',
            },
        ],
        'array-callback-return': 'error',
        'default-param-last': 'off',
        eqeqeq: ['error', 'smart'],
        'no-array-constructor': 'error',
        'no-console': 'warn',
        'no-duplicate-imports': 'error',
        'no-multi-assign': 'error',
        'object-shorthand': ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                semi: false,
                singleQuote: true,
            },
        ],
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups: true,
            },
        ],
        'sort-keys': [
            'error',
            'asc',
            {
                allowLineSeparatedGroups: true,
                natural: true,
            },
        ],
        'vue/attributes-order': [
            'error',
            {
                alphabetical: true,
            },
        ],
        yoda: ['error', 'never'],
    },
}
