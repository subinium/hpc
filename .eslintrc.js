module.exports = {
    "env": {
        "browser": true,
        "jest/globals": true
    },
    "parserOptions": {
        "ecmaVersion": 10,
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "react-hooks",
        "prettier",
        "jest",
        "simple-import-sort"
    ],
    "extends": [
        "airbnb",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:jest/recommended"
    ],
    "settings": {
        "import/extensions": [".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "node": {
                "extensions": [".ts", ".tsx"]
            }
        }
    },
    "rules": {
        "prettier/prettier": ["error", {
            "singleQuote": true,
            "tabWidth": 4
        }],
        "import/extensions": 0,
        "import/no-unresolved": 0,
        "simple-import-sort/imports": [
            "error",
            {
                "groups": [
                    [
                        "^react"
                    ],
                    // Side effect imports.
                    [
                        "^\\u0000"
                    ],
                    // Packages.
                    // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
                    [
                        "^@?\\w"
                    ],
                    ["^@material-ui"],
                    ["^@nooxit"],
                    ["^@nooxit-app"],
                    // Absolute imports and other imports such as Vue-style `@/foo`.
                    // Anything that does not start with a dot.
                    [
                        "^[^.]"
                    ],
                    // Relative imports.
                    // Anything that starts with a dot.
                    [
                        "^\\."
                    ]
                ]
            }
        ],
        "no-use-before-define": "off",
        "no-useless-constructor": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
        "react/jsx-indent": [1, 4],
        "react/jsx-indent-props": [1, 4],
        "@typescript-eslint/no-useless-constructor": "error",
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-use-before-define": ["error"],
        "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    }
}

// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true
//     },
//     "extends": [
//         "standard-with-typescript",
//         "plugin:react/recommended"
//     ],
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "plugins": [
//         "react"
//     ],
//     "rules": {
//     }
// }
