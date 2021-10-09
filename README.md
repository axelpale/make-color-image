# web-app-template

This is a template for a [single-page web app](https://en.wikipedia.org/wiki/Single-page_application) built with [webpack](https://webpack.js.org/) and written in [ES6](https://en.wikipedia.org/wiki/ECMAScript) in [StandardJS](https://standardjs.com/) style. The template aims to follow common practices of [Node.js package ecosystem](https://www.npmjs.com/) both in code structure and documentation.

## Usage

Either create a new repository via GitHub's *Use this template* feature or copy the files to your existing repository. Write your HTML in `index.html` and your JavaScript under `src/` directory beginning from `src/index.js`. The build bundles your JS files into `dist/main.js`. The bundle is run when you open the `index.html`.

Install build dependencies:

    $ npm install

Validate your code:

    $ npm run lint

Build the app:

    $ npm run build

Open the app in your browser: [index.html](index.html)

## Production

Build is designed for rapid development. Consider following when in production:

- devtool: 'source-map'

## Contribute

Pull requests and [bug reports](https://github.com/axelpale/web-app-template/issues) are highly appreciated. Please test your contribution with the following scripts:

Run test suite:

    $ npm run test

Run only linter:

    $ npm run lint

## License

[MIT](LICENSE)
