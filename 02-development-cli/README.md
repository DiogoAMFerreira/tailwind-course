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