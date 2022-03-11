# carbon-duplicate-css-repro

### Steps to reproduce css duplication

1. `npm i`
1. `npm run build`
1. Open `app.js`. This is the built application.
1. Search for `"a,abbr,acronym,address,applet,article,aside,audio,b` this is the css reset. You will see this duplicated in the scoped styles for each component.
