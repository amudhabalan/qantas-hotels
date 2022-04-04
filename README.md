# Qantas Hotels

- After cloning this repo, Please run `npm install` to install the dependencies
- Please run `npm start` to start the development server
- The list of hotels can be sorted by price

## Tech used

- React 18 is used (comes packaged with Create React App)
- Redux is used as the state store
- Uses styled components for styling
- Uses `useState` hook for component level state
- Uses `useEffect` hook for side effects
- Uses `useSelector` hook to read state from Redux store
- Uses `React Router` for routing

## Unit Tests

- Tests use Jest & React Testing Library that come packaged with Create React App
- Please run `npm test` to run the unit tests
- Some coverage has been given to Hotel & ResultsCount component to demonstrate the basics of testing

## ToDo
- Ratings component
- Breaking down the Hotel component in to more components , so they can tested individually
- Cleaning up the sorting functionality for initial load
- Tag on the property image
