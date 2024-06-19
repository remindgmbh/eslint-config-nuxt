import { createConfigForNuxt as _createConfigForNuxt } from '@nuxt/eslint-config/flat'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export function createConfigForNuxt(options, ...userConfigs) {
    return _createConfigForNuxt(options, ...userConfigs)
        .append(eslintPluginPrettierRecommended)
        .append({
            rules: {
                '@typescript-eslint/default-param-last': 'error',
                '@typescript-eslint/no-explicit-any': 'off',
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
                'prefer-template': ['error'],
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
                'vue/block-lang': ['error', { script: { lang: 'ts' } }],
                'vue/block-order': [
                    'error',
                    { order: ['template', 'script', 'style'] },
                ],
                'vue/component-name-in-template-casing': [
                    'error',
                    'PascalCase',
                    {
                        registeredComponentsOnly: false,
                    },
                ],
                'vue/define-emits-declaration': ['error', 'type-literal'],
                'vue/define-macros-order': ['error'],
                'vue/eqeqeq': ['error', 'smart'],
                'vue/html-self-closing': [
                    'error',
                    {
                        html: {
                            component: 'always',
                            normal: 'never',
                            void: 'always',
                        },
                        math: 'never',
                        svg: 'never',
                    },
                ],
                'vue/no-static-inline-styles': ['error'],
                'vue/no-unused-emit-declarations': ['error'],
                'vue/no-unused-properties': ['error'],
                'vue/no-unused-refs': ['error'],
                'vue/padding-line-between-blocks': ['error'],
                'vue/prefer-template': ['error'],
                'vue/require-macro-variable-name': ['error'],
                'vue/require-typed-ref': ['error'],
                yoda: ['error', 'never'],
            },
        })
}
