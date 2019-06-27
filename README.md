# Plutone

Plutone is a group project that...

> “The internet can seem like a mall at times, we need more spaces like parks and oceans”. – Ruth John

## Style Guide

### Branch Naming

Type of issue/shortened name of project-no of issue/short desc
e.g bug/plu-#1-fixButton

## Folder Structure

```
├── public
└── src
    ├── components
    ├── helpers
    ├── images
    └── scss
        └── base
```

## Usage

3. **helpers**

These are the helper functions that help randomise the text and background that is then imported into QuoteBox.js.

4. **scss**

index.scss in scss folder should be imported to components for base styling

We are using [css modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and [css-bem](https://css-tricks.com/bem-101/) method however the project is not currently big enough to exhibit full bem structure.

The base folder contains all our base stylings

5. **images**

Here you will find the svg image that overlays the gradient background

6. **eslint and prettier**

For cleaner code I have configured these based on Airbnb eslint styling to insure my code stays clean
and readable. [eslint](https://www.npmjs.com/package/eslint-config-airbnb)

### Tech Stack

**Please check the package json for more specific dependencies**

## Contributing

We'll be happy to hear your feedback and if you have any quotes you would like to add to the app
feel free to message us

### Contributors

## License
