# Tailwind responsive classes and state classes

Tailwind has conditional class naming for breakpoints as well as states such as hover, focus, etc.

# Spacing

On chapter 3 there's a list of tailwind classes and their correspondent spacings if you want to know what the numbers in front of the class translate too

# Typography

## Setting up a custom font

To set up a custom font make sure you include the font in the project. For example if you wanted to include the font "Tapestry" you first download it or get the embeded link:
https://fonts.google.com/specimen/Tapestry

Example:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Tapestry&display=swap"
  rel="stylesheet"
/>
```

After that it's possible to add it to the Tailwind configuration like so:

```js
tailwind.config = {
  theme: {
    fontFamily: {
      serif: ["Tapestry"],
    },
  },
};
```

An example of this and other typography related classes are present in chapter 4.

# Interactivity

## Remove browser specific styling on an element

In some browsers, and sometimes based on the operating system, there are elements that the default styling changes. To remove the browser specific styling on an element use the tailwind class `appearance-none`. Check the example in chapter 10.

## Smooth scroll

Tailwind offers a class that allows you to set up the
