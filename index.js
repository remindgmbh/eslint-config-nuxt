module.exports = {
    root: true,
    extends: [
        "@nuxt/eslint-config",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                argsIgnorePattern: "^_"
            }
        ],
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                semi: false,
            },
        ],
    },
};
