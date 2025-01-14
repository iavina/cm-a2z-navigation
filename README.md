# A2Z Navigation - Critical Mass

## To run locally

```bash
npx vite
```

## To build

```bash
npx vite build
```

GitHub Pages
[https://iavina.github.io/cm-a2z-navigation]

Vite built version deployed to surge.sh
[https://divergent-error.surge.sh/]

## Overview

- **app.js**: Entry point
  - Loads the json file and creates the navbar and the clock
- **navbar.js**:
  - Creates the navbar elements and sets up interactions
  - Creates a custom event called "section:changed" that any component
  in the app can subscribe to
- **world-map.js**:
  - Listens for "section:changed" to handle functionality

## To add more functionality

When a section is changed, a `section:chagned` event is fired. You can add a
in other components to interact with such events in this way:

```javascript
document.addEventListener("section:changed", event => {
  const city = event.detail;
});
```

The `detail` property contains all the relevant data for the selected section.

## Other comments

- Added more data in the JSON file:
  - `utc` to correctly display the time in a selected city
  - `position` a 0 to 100 value to pin the location of a city in the map
- All animation is handled by adding / removing classes
  - There are transition animations as well as keyframe animations
  - All animations are handled by transforms over other css properties
- The app would benefit with a different layout for mobile, but it is responsive;
interactive elements position themselves differently to stay in bounds.

## TODO

- There is some basic error handling and validation, but ideally we validate with
a more robust solution, like JSON schemas.
