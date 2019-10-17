# PostCSS SQRT [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS SQRT] lets you ... in CSS.

```pcss
.example { ... }

/* becomes */

.example { ... }
```

## Usage

Add [PostCSS SQRT] to your project:

```bash
npm install postcss-sqrt --save-dev
```

Use **PostCSS SQRT** to process your CSS:

```js
const postcssSqrt = require('postcss-sqrt');

postcssSqrt.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require('postcss');
const postcssSqrt = require('postcss-sqrt');

postcss([
  postcssSqrt(/* pluginOptions */)
]).process(YOUR_CSS /*, processOptions */);
```

**PostCSS SQRT** runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| --- | --- | --- | --- | --- | --- |

## Options

...

[cli-img]: https://img.shields.io/travis/limitlessloop/postcss-sqrt/master.svg
[cli-url]: https://travis-ci.org/limitlessloop/postcss-sqrt
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-sqrt.svg
[npm-url]: https://www.npmjs.com/package/postcss-sqrt

[PostCSS]: https://github.com/postcss/postcss
[PostCSS SQRT]: https://github.com/limitlessloop/postcss-sqrt
