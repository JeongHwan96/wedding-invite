module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2020: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended" // ✅ Prettier 연동
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    // 환경별 콘솔 / 디버깅 경고
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",

    // ✅ Prettier 줄바꿈 관련 오류 방지 (CRLF ↔ LF)
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf"
      }
    ],

    // ✅ Vue 단일 단어 컴포넌트 이름 허용
    "vue/multi-word-component-names": "off"
  }
};
