# App (Next.js + TS + Tailwind + shadcn/ui)

Minimal client-side auth demo with Login & Dashboard.

## Getting Started

```bash
pnpm i
pnpm dev
# http://localhost:3000
```

### Useful scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "prepare": "husky"
  }
}
```

---

## Tech Stack

- Next.js (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui
- Client-only auth state (localStorage)

---

## Commit Style (Conventional Commits + commitlint)

We use **Conventional Commits** enforced by **commitlint** (via Husky pre-commit hook).

### Install & Setup

```bash
pnpm add -D @commitlint/{config-conventional,cli} husky
pnpm exec husky init
```

Create `commitlint.config.ts` (or `.js`) in the repo root:

```ts
import type { UserConfig } from "@commitlint/types";

const config: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
    "scope-case": [2, "always", "kebab-case"],
    "subject-case": [0],
  },
};

export default config;
```

Add **commit-msg** hook:

```bash
pnpm exec husky set .husky/commit-msg 'pnpm commitlint --edit "$1"'
```

> Now any commit message will be validated automatically.

### Format

```
<type>(<scope>): <subject>
```

**Types**: `feat` | `fix` | `docs` | `style` | `refactor` | `perf` | `test` | `build` | `ci` | `chore` | `revert`

**Examples**

- `feat(auth): add login form with iran phone validation`
- `fix(dashboard): handle empty avatar fallback`
- `refactor(ui): extract button variants`
- `docs(readme): add commitlint instructions`

---

## Project Structure (short)

```
src/
  app/
    (auth)/login/page.tsx
    (auth)/layout.tsx
    dashboard/page.tsx
    layout.tsx
    globals.css
  components/
    ui/...
    auth/auth-gate.tsx
  lib/
    auth.ts
    validation.ts
  config/
    protected-routes.ts
  types/
    randomuser.ts
```

---

## Environment / Deployment

No env vars needed.  
Deploy on Vercel (Next.js preset). Build command: `pnpm build`, Output: `.next`.

---

## License

MIT
