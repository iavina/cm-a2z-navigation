# A2Z Navigation - Critical Mass

## To Run

```bash
npx vite
```

## Overview

- **app.js**: Entry point
  - Loads the json file and creates the navbar and the clock
- **navbar.js**:
  - Creates the navbar elements and sets up interactions
  - Creates a custom event called "section:changed" that any component
  in the app can subscribe to
- **world-map.js**:
  - Listens for "section:changed" to handle functionality

## Notes

- The "section:changed" event carries the city's data in its detail property
- Added more data in the JSON file:
  - `utc` to correctly display the time in a selected city
  - `position` a 0 to 100 value to pin the location of a city in the map
- All animation in handled adding / removing classes
  - There are transition animations as well as keyframe animations
  - All animations are handled by transforms over other css properties
- The app is somewhat responsive in the sense that it won't break when resized,
but smaller devices would benefit from a different layout
