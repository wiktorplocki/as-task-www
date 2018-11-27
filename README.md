# as-task-www
Frontend layer for the clients &amp; orders processing app

## Installation
````
yarn
yarn start
````

## Modules used
`React v16.6, React Router, Reactstrap, lodash`

## Design philosophy
The project is created with maximum component reusability in mind. That is why all three views use one table component, whose content changes to match the data set received from the backend.

## Known quirks
The data set for the total sum of orders view is generated in left-to-right order. That is, the last piece of data comes in first. This is handled on the frontend side, though it is considered irregular and should rather be handled by the backend itself.
The reason for this is to keep the data structure, as well, as the order of data in the tables, uniform across all the views.
