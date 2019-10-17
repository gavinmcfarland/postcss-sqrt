# PostCSS SQRT [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[PostCSS SQRT] lets you calculate the square root of something dynamically in CSS. Sometimes this is useful if your design relies on CSS variables which change dynamically, like changing variables at different breakpoints.

```pcss
:root {
	--number: 7200;
}

.example {
	width: calc(50% - (sqrt(var(--number)) * 1px));
}

/* becomes */

:root {
	--number: 7200;
}

.test {
	--guess01: calc((var(--number) + ( var(--number) / var(--number))) / 2);
	--guess02: calc((var(--guess01) + ( var(--number) / var(--guess01))) / 2);
	--guess03: calc((var(--guess02) + ( var(--number) / var(--guess02))) / 2);
	--guess04: calc((var(--guess03) + ( var(--number) / var(--guess03))) / 2);
	--guess05: calc((var(--guess04) + ( var(--number) / var(--guess04))) / 2);
	--guess06: calc((var(--guess05) + ( var(--number) / var(--guess05))) / 2);
	--guess07: calc((var(--guess06) + ( var(--number) / var(--guess06))) / 2);
	--guess08: calc((var(--guess07) + ( var(--number) / var(--guess07))) / 2);
	--guess09: calc((var(--guess08) + ( var(--number) / var(--guess08))) / 2);
	--guess10: calc((var(--guess09) + ( var(--number) / var(--guess09))) / 2);
	width: calc(50% - (var(--guess10) * 1px));
}
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
| ----------------------- | ------------------------------------- | ----------------------------- | ----------------------------------------------- | ----------------------- | ------------------------- |

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
