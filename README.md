# Plutone

Plutone is an experiment that aims to bring audio and visuals together, creating an interactive soundscape experience through the browser.

The musical planet Plutone has been split into mutliple pieces and has been spread throughout space. Bring all of the pieces back together to return Plutone to its former glory.

> “The internet can seem like a mall at times, we need more spaces like parks and oceans”. – Ruth John

## Usage

As this was an experiment please feel free to use view code in order to see how all these
element work together. For example how to play multiple tracks in Tone.JS using react.
If you have any questions we will try to get back to you as soon as possible.

## Style Guide

### Branch Naming

Type of issue/shortened name of project-no of issue/short desc
e.g bug/plu-#1-fixButton

## Folder Structure

```
src
├── Pages
│   ├── Home
│   │   └── Images
│   └── Plutone
├── Reference
├── Sounds
├── Components
│   ├── Loading
│   ├── Moon
│   └── Shard
├── helpers
└── scss
    └── base
```

1. **Pages**

#### Home

These are the two pages the landing page and the plutone page where the planet lives.
The Home page loads one sound on load.

#### Plutone

These where Plutone lives. From this page we create components from the amount of sound and effects
objects we have.

2. **Reference**

At first we tried the animation Konva in vanilla javascript which is the code you see here. We then grabbed
this and brought it over to React.JS! Please feel free to try this code in vanilla javascript if you prefer.

3. **Sounds**

These are the sound source files for the track. They were made using Ableton, sourcing library sounds from the Ableton and Native Instruments Library, our own sound samples and also external libraries.

4. **Components**

#### Loading

This is the code for the loading screen at the start. If your internet is fast it will buffer all the tracks quite quickly and you may only catch a glimpse at it.

#### Moon

This is were we render the Moon components

#### Shard

This is where we render the pieces of the planet including the centre.

5. **Helpers**

#### moons.js & shapes.js

These contain the SVG file data that we use to draw Konva.

#### moving-moons.js & moving-shapes.js

These are the functions that give the moons and shapes their slow floating effect. We then import then into their corresponding components.

6. **scss**

index.scss in scss folder should be imported to components for base styling

We are using [css modules](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) and [css-bem](https://css-tricks.com/bem-101/) method however the project is not currently big enough to exhibit full bem structure.

The base folder contains all our base stylings

7. **eslint and prettier**

For cleaner code I have configured these based on Airbnb eslint styling to insure my code stays clean
and readable. [eslint](https://www.npmjs.com/package/eslint-config-airbnb)

### Tech Stack

| Client Side | Server side            |
| ----------- | ---------------------- |
| HTML5       | Current no server side |
| SCSS        |
| prop-types  |
| tone        |
| Konva       |
| uuid        |
| react-konva |
| PropTypes   |
| Prettier    |
| SCSS        |
| Node-sass   |
| Prettier    |
| Eslint      |
| Lint staged |
| Now.zeit    |
| Jest        |
| JS ES6      |

**Please check the package json for more specific dependencies**

## Contributing

We'll be happy to hear your feedback and if you have any quotes you would like to add to the app
feel free to message us

### Contributors

## License
