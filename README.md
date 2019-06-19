# Big Human NextJS/React Starter Kit

## General

This stack uses [Flow](https://flow.org/)/[Glow](https://www.npmjs.com/package/glow) for static type checking, [ESLint](https://eslint.org/) for linting rules and standards, [Styled Components](https://github.com/styled-components/styled-components) for component styling and responsive design, [Redux](https://redux.js.org/) for application state management, and [Yarn](https://yarnpkg.com/en/) for dependencies.

## Development

```bash
yarn
yarn start
```

## Building

```bash
yarn
yarn build
```

## Running (Production)

```bash
yarn
yarn prod
```

### Pre-commit Rules

On every commit, yarn will automatically run the below pre-commit hooks. If these checks pass, your commit should be good to be raised as a PR.

```bash
 yarn lint:precommit
 yarn flow:precommit
```
