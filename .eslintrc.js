module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'airbnb',
        'plugin:jsx-a11y/recommended', // 설치 한경우
        'plugin:import/errors', // 설치한 경우
        'plugin:import/warnings', // 설치한 경우
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'linebreak-style': 0,
        'import/prefer-default-export': 0,
        'import/extensions': 0,
        'no-use-before-define': 0,
        'import/no-unresolved': 0,
        'react/react-in-jsx-scope': 0,
        'import/no-extraneous-dependencies': 0, // 테스트 또는 개발환경을 구성하는 파일에서는 devDependency 사용을 허용
        'no-shadow': 0,
        'react/prop-types': 0,
        'react/jsx-filename-extension': [
          2,
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'jsx-a11y/no-noninteractive-element-interactions': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
      },
}
