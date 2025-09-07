import js from "@eslint/js";
import globals from "globals";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export default [
    // Konfigurasi untuk mengabaikan direktori
    {
        ignores: [
            "bootstrap/",
            "dist/",
            "node_modules/",
            "public/",
            "storage/",
            "vendor/",
            "eslint.config.js",
        ],
    },

    // Aturan dasar dari ESLint
    js.configs.recommended,

    // Konfigurasi untuk file TypeScript & React (*.ts, *.tsx)
    {
        files: ["resources/js/**/*.{ts,tsx}"],
        languageOptions: {
            // Kita hapus bagian 'globals' dari sini
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: { jsx: true },
                ecmaVersion: "latest",
                sourceType: "module",
            },
            // globals: {
            //     ...globals.browser,
            //     ...globals.es2020,
            // },
        },
        plugins: {
            "@typescript-eslint": tsPlugin,
            "react-hooks": reactHooksPlugin,
            "simple-import-sort": simpleImportSortPlugin,
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,

            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        // 1. Paket yang berhubungan dengan React, selalu di paling atas.
                        ["^react", "^@?\\w"],

                        // 2. Impor dari Inertia.js
                        ["^@inertiajs/react"],

                        // 3. Impor dari alias internal ('@/').
                        ["^@/"],

                        // 4. Impor dari parent folder ('../'), lalu sibling folder ('./').
                        [
                            "^\\.\\.(?!/?$)",
                            "^\\.\\./?$",
                            "^\\./(?=.)",
                            "^\\.(?!/?$)",
                            "^\\./?$",
                        ],

                        // 5. Impor file CSS atau side-effect lainnya.
                        ["^.+\\.?(css)$"],
                    ],
                },
            ],
            "simple-import-sort/exports": "error",

            "@typescript-eslint/no-explicit-any": "off",
        },
    },
];
