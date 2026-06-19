# vite_react_template

> [!WARNING]
> **Archived / deprecated.** New family apps are scaffolded from the
> [`claude-skills`](https://github.com/eetu/claude-skills) homebrew skills
> (`sibling-app` → `spa-frontend` + `rust-axum` + `halo-design` + `ts-style`),
> which are the maintained source of truth and cover the whole app (frontend +
> backend + design + container), not just the React shell here. For a new
> frontend: scaffold Svelte with `npx sv create` (the recommended default), or
> for React copy a current sibling app's `frontend/`. This template lags those
> conventions and is kept only for reference.

## Installation

```bash
yarn install
```

## Development

Start development server

```bash
yarn dev
```

## Testing

### vitest

Runnin tests

```bash
yarn test
```

### e2e tests

Running tests

```bash
# before first run
yarn playwright install

yarn test:e2e
```
