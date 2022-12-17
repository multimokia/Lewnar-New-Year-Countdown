# Lewnar new year countdown
- A simple browser capture page for OBS, built in React for counting down the time until New Year's Day, built for @lunulae

## How to run
- Have nodejs 18 installed
- Run `npm i` while in this directory
- `npm run dev` will launch the site to `http://localhost:5173`

## How to integrate with OBS
- Once the server is running
- Simply add a new Browser Source to your OBS window
- Point the URL to `http://localhost:5173` and the timers should appear

## What if I want to add more timers?
- Easy! Simply edit `App.tsx` in your favourite code editor
- Add items to the `TIMEZONES` array
- The format is: `{ timezone: "<JAVASCRIPT_ACCEPTABLE_TIMEZONE>", dispName: "<LABEL FOR THE TIMER (just text)>" },`
- Save the file, and the server should update automatically
