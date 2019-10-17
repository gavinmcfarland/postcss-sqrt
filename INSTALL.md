# Installing PostCSS SQRT

[PostCSS SQRT] runs in all Node environments, with special instructions for:

| [Node](#node) | [PostCSS CLI](#postcss-cli) | [Webpack](#webpack) | [Create React App](#create-react-app) | [Gulp](#gulp) | [Grunt](#grunt) |
| --- | --- | --- | --- | --- | --- |

## Node

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

## PostCSS CLI

Add [PostCSS CLI] to your project:

```bash
npm install postcss-cli --save-dev
```

Use **PostCSS SQRT** in your `postcss.config.js` configuration file:

```js
const postcssSqrt = require('postcss-sqrt');

module.exports = {
  plugins: [
    postcssSqrt(/* pluginOptions */)
  ]
}
```

## Webpack

Add [PostCSS Loader] to your project:

```bash
npm install postcss-loader --save-dev
```

Use **PostCSS SQRT** in your Webpack configuration:

```js
const postcssSqrt = require('postcss-sqrt');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          { loader: 'postcss-loader', options: {
            ident: 'postcss',
            plugins: () => [
              postcssSqrt(/* pluginOptions */)
            ]
          } }
        ]
      }
    ]
  }
}
```

## Create React App

Add [React App Rewired] and [React App Rewire PostCSS] to your project:

```bash
npm install react-app-rewired react-app-rewire-postcss --save-dev
```

Use **React App Rewire PostCSS** and **PostCSS SQRT** in your
`config-overrides.js` file:

```js
const reactAppRewirePostcss = require('react-app-rewire-postcss');
const postcssSqrt = require('postcss-sqrt');

module.exports = config => reactAppRewirePostcss(config, {
  plugins: () => [
    postcssSqrt(/* pluginOptions */)
  ]
});
```

## Gulp

Add [Gulp PostCSS] to your project:

```bash
npm install gulp-postcss --save-dev
```

Use **PostCSS SQRT** in your Gulpfile:

```js
const postcss = require('gulp-postcss');
const postcssSqrt = require('postcss-sqrt');

gulp.task('css', () => gulp.src('./src/*.css').pipe(
  postcss([
    postcssSqrt(/* pluginOptions */)
  ])
).pipe(
  gulp.dest('.')
));
```

## Grunt

Add [Grunt PostCSS] to your project:

```bash
npm install grunt-postcss --save-dev
```

Use **PostCSS SQRT** in your Gruntfile:

```js
const postcssSqrt = require('postcss-sqrt');

grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
       postcssSqrt(/* pluginOptions */)
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[PostCSS]: https://github.com/postcss/postcss
[PostCSS CLI]: https://github.com/postcss/postcss-cli
[PostCSS Loader]: https://github.com/postcss/postcss-loader
[PostCSS SQRT]: https://github.com/limitlessloop/postcss-sqrt
[React App Rewire PostCSS]: https://github.com/csstools/react-app-rewire-postcss
[React App Rewired]: https://github.com/timarney/react-app-rewired
