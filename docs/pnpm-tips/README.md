# Using pnpm with Corepack

This project uses **pnpm** as its package manager and enforces a specific version using the `packageManager` field in `package.json`.

## Quick Start (For Team Members)

We recommend using Node.js's built-in **Corepack** feature to automatically handle pnpm installation and versioning.

### 1. Enable Corepack (One-time setup)

If you are using Node.js v16.13 or newer, Corepack is included by default. Enable it by running:

```bash
corepack enable
```

### 2. Install Dependencies

Just run `pnpm install` in the project root:

```bash
pnpm install
```

When you run this command:

1.  Corepack checks the `"packageManager"` field in `package.json`.
2.  It automatically downloads the correct version of pnpm (e.g., `10.28.2`) if not already present.
3.  It then proceeds to install the project dependencies into `node_modules`.

**Benefits**:

- **Consistency**: Everyone on the team uses the exact same version of pnpm.
- **Convenience**: No need to manually install or upgrade pnpm globally.
