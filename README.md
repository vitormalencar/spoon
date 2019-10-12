# Marley Spoon

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![CircleCI](https://circleci.com/gh/vitormalencar/spoon.svg?style=svg)](https://circleci.com/gh/vitormalencar/spoon)
[![Test Coverage](https://api.codeclimate.com/v1/badges/c458950fb7d58b60b179/test_coverage)](https://codeclimate.com/github/vitormalencar/spoon/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/c458950fb7d58b60b179/maintainability)](https://codeclimate.com/github/vitormalencar/spoon/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/vitormalencar/spoon/badge.svg)](https://snyk.io/test/github/vitormalencar/spoon)
[![dependencies Status](https://david-dm.org/vitormalencar/spoon/status.svg)](https://david-dm.org/vitormalencar/spoon)
[![devDependencies Status](https://david-dm.org/vitormalencar/spoon/dev-status.svg)](https://david-dm.org/vitormalencar/spoon?type=dev)

## Motivation

### Prettier + ESLint

Prettier solves the styling conflict problem, but there's more to linting than styling, and that's where eslint comes in. Long story short, prettier does styling, eslint does the rest. I choose to extend the standard (because I tend to favor standardjs) and react/recommended and prettier config.

### Hooks

hooks are just awesome, this new api is about to makes your component code way more organized and clean. State management and side effects go into hooks, UI goes into leaf components. It naturally leads to a more readable and easily testable codebase.

### styled-components

Styled Components help keep the concerns of styling and element architecture separated and make components more readable. Furthermore, when you have components that rely on JavaScript for their style, Styled Components gives control of those states back to CSS instead of using a multitude of conditional class names.

### Flow

Flow is a static type checker for javascript.
it helps you refactor safely, so you can focus on the changes you want to make, and stop worrying about what you might break.

## Stack

- React
- Redux
- Prettier
- Enzyme
- Styled-componnets
- Flow JS

## Development

### Commands

Any of the following commands can be run from the command line.

> If using [Yarn](https://yarnpkg.com/), all instances of `npm` can be replaced with `yarn`

#### build

```sh
npm run build
```

Compiles all files. Output is sent to the `dist` directory.

#### start

```sh
npm start
```

Runs your application (from the `dist` directory) in the browser.

#### TEST

```sh
npm run test
```

runs tests

## License

MIT made with ❤️ © [vitormalencar](https://github.com/vitormalencar)
