export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs"], // only allow these
    ],
    "scope-empty": [2, "never"], // require a scope (b)
    "subject-empty": [2, "never"], // require subject (c)
    "header-max-length": [2, "always", 100], // optional, keep it clean
  },
};
