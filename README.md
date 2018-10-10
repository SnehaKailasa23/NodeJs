# Affinix-Rest-API
Affinix Analytics Rest API

## Prerequisites

Install `node js` and `npm`. Currently install `node js v8.9.2` and `npm v5.5.1`

## Install package dependencies
Move to project root directory and run the following command
```
npm install
```
This command will install all the dependencies 


## Development environment variables

Create `.env` file in application root directory and copy the content from `.env.sample` file and update required details

## Development server

Run dev server
```
npm start
```
Run `npm start` for a dev server. Navigate to `http://127.0.0.1:4002/`. The app will automatically reload if you change any of the source files.

## Production server
Run following command on production server
```
npm run build-server
```
This command will build the application and generate files into `dist` directory
