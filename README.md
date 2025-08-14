# sporty-ui

A modern UI component library for the Sporty project.

## Features

- Reusable React components
- Reusable hooks

## Setup

clone the repo and install dependencies

```bash
npm install
```

## Running locally

```jsx
npm run dev
```

## Documentation

- I implemented the Leagues page using reusable hooks and composable components for better maintainability and scalability.

- When a league entity in the table is clicked, the app navigates to the Badge route, passing the entity’s ID as part of the URL path.

- The Badge page then retrieves this ID and uses a custom hook to fetch the badge image URL.

- To optimize performance, the badge URL is cached in localStorage, reducing redundant API calls.

- For filtering i have used useMemo :) to avoid recalculation if the depency is not changed

- Select component for leagues shows only available sports that is dynamic

- For styling simplicity and quick setup, I used Picocss via CDN.