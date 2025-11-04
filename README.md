# Readme

### Disclaimer:

This repository has the practice examples and notes of a Udemy course about Tailwind.
The following link brings you to the course page:
https://www.udemy.com/course/tailwind-from-scratch/

Course Credit: Brad Traversy
https://traversymedia.com

# Tailwind vs Bootstrap

- Tailwind is a newer framework gaining popularity
- Tailwind uses low-level classes for fast UI development while Bootstrap uses high-level pre-designed components
- Tailwind offers more flexibility and uniqueness while Bootstrap websites look very similar
- Both are customizable
- Tailwind requires more knowledge of CSS while Bootstrap is easier for beginners

## Tailwind responsive classes and state classes

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
