# Setting up the environment

This was for version 3 of Tailwind. Currently version 4 is out and might already there be higher versions.

```sh
npm init -y
npm install -D tailwindcss@3
npx tailwindcss init
```

With the config file created change it's configuration. This is an example:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a css input file somewhere in your code for example input.css and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

After execute the following command:

```sh
npx tailwindcss -i ./src/input.css -o ./src/tailwind.css --watch
```

Or add it to package.json.

# Webpack & PostCSS Environment

For cases where you have a more advance frontend applications and you will use multiple modules and javascript files. You need a build tool to build out the static assets for browser usage. For that you need a tool like Webpack.

In this course original github page theres a starter for this environment here: 
https://github.com/bradtraversy/tailwind-course-projects/tree/main/webpack-tailwind-starter
There's also a GIST with the step by step explaining how to setup this starter

# Webpack

Webpack is a module bundler tool. You can check more about this tool here: https://webpack.js.org/
With this you can import npm modules and webpack will convert it to static assets you can then deploy.

# PostCSS

PostCSS is a tool that will transform your styles from your Javascript plugins, including Tailwind, 