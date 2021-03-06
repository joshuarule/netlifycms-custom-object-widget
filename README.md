# Netlify CMS Widget Starter

A boilerplate for creating Netlify CMS widgets.

Widgets are basically inputs for the Netlify CMS editor interface. It's a React component that receives user input and outputs a serialized value. Those are the only rules - the component can be extremely simple, like a text input, or extremely complicated, like a full blown markdown editor. They can make calls to external services, and generally do anything that JavaScript can do.

The starter currently provides a basic string widget, which you can customize, extend, or replace entirely with your own widget.

### Getting started

Clone or fork the repo, then install dependencies:

```shell
git clone https://github.com/netlify/netlify-cms-widget-starter.git

npm install
```

### Development

To run a copy of Netlify CMS with your widget loaded for development, use the start script:

```shell
npm start
```

Your widget source is in the `src` directory, where there are separate files for the `Control` and `Preview` components.

### Production & Publishing

You'll want to take a few steps before publishing a production built package to npm:

1. Customize `package.json` with details for your specific widget, e.g. name, description, author, version, etc.
2. For discoverability, ensure that your package name follows the pattern `netlify-cms-widget-<name>`.
3. Delete this `README.md`, rename `README_TEMPLATE.md` to `README.md`, and update the new file for your specific widget.
4. Rename the exports in `src/index.js`. For example, if your widget is `netlify-cms-widget-awesome`, you would do:
  ```js
  if (typeof window !== 'undefined') {
    window.AwesomeControl = Control
    window.AwesomePreview = Preview
  }

  export { Control as AwesomeControl, Preview as AwesomePreview }
  ```
5. Optional: customize the component and file names in `src`.
6. Create a production build, which will be output to `dist`:
  ```shell
  npm run build
  ```
7. Finally, if you're sure things are tested and working, publish:
  ```shell
  npm publish
  ```