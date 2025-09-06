module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [2, "always", ["feat", "fix", "chore", "docs"]],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
  },
};
