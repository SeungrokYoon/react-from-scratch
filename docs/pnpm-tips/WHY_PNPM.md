# Why pnpm? (Comparison with npm, Yarn, Yarn PnP)

This document outlines the reasons for choosing **pnpm** and migrating away from Yarn Berry (PnP), with a comparison of major package managers.

## Summary of Decision

We migrated from **Yarn Berry (PnP)** to **pnpm** primarily because **Project Storybook deprecated support for Yarn PnP**. Additionally, pnpm offers superior disk space efficiency and installation speed while maintaining a standard `node_modules` structure compatible with most tools.

---

## Comparison of Package Managers

| Feature                     | **npm**                      | **Yarn Classic (v1)**        | **Yarn Berry (PnP)**            | **pnpm**                            |
| :-------------------------- | :--------------------------- | :--------------------------- | :------------------------------ | :---------------------------------- |
| **node_modules Structure**  | Flat (hoisted)               | Flat (hoisted)               | **None** (Virtual FS)           | **Content-addressable** (Symlinked) |
| **Disk Space Efficiency**   | Low (Duplicated per project) | Low (Duplicated per project) | High (Zero-install possible)    | **Very High** (Global store)        |
| **Installation Speed**      | Moderate                     | Fast                         | Very Fast                       | **Very Fast**                       |
| **Phantom Dependencies**    | Problematic (Hoisting risks) | Problematic (Hoisting risks) | Solved (Strict)                 | **Solved** (Non-flat structure)     |
| **Ecosystem Compatibility** | Excellent                    | Excellent                    | **Poor** (Requires custom SDKs) | Excellent                           |

### Detailed Analysis

#### 1. npm & Yarn Classic (v1)

- **Pros**: Universal compatibility.
- **Cons**: "Phantom dependencies" (accessing packages not in package.json), slow installs on large monorepos, and massive disk usage due to duplicating dependencies for every project.

#### 2. Yarn Berry (Plug'n'Play / PnP)

- **Pros**: Eliminates `node_modules`, extremely fast installs, "Zero-install" capability.
- **Cons**:
  - **Compatibility Issues**: Many tools (React Native, Flow, some IDE extensions) struggle with the virtual file system.
  - **Critical Blocker**: **Storybook** has deprecated/dropped support for PnP, making it difficult to maintain UI component documentation.

#### 3. pnpm (Performant npm)

- **Pros**:
  - **Efficient Storage**: Uses a content-addressable global store. If you have 100 projects using React v18, pnpm saves it only **once** on your disk.
  - **Strictness**: Solves phantom dependencies by using a symlinked `node_modules` structure that prevents accessing unlisted dependencies.
  - **Compatibility**: Creates a real `node_modules` folder, so tools that expect files to exist on disk (like Storybook) work seamlessly.
- **Why we chose it**: It gives us the speed and strictness of Yarn PnP without the compatibility headaches.

## Conclusion

**pnpm** is the "sweet spot" that provides the performance benefits of modern package managers while maintaining excellent compatibility with the broader ecosystem, including Storybook.
