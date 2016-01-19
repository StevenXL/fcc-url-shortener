# URL Shortener Microservice
This is a small, full-stack JavaScript application that utilizes
[ExpressJS](http://expressjs.com/), [NodeJS](https://nodejs.org/en/),
[MongoDB](https://www.mongodb.org/) and
[ClementineJS](http://www.clementinejs.com/) to create a url shortening service.

## Installation
1. Clone the repository: `git clone
   https://github.com/StevenXL/fcc-url-shortener.git`.
2. Install Dependencies: `npm install`.
3. Start the Server: `node server.js`.

## Notes on MongoDB
This application is powered by MongoDB. In order to use the application, you
must have a mongod server running, and you must configure the application to use
that server. Configuration options can be found in `server.js`. Note that, in
order to deploy to Heroku, we are reading the URI of the mongd server from the
environment. Either change this in your `server.js` file or export the
appropriate environmental variable.

## Example Creation Usage
`https://morning-woodland-5743.herokuapp.com/new/http://www.google.com`

## Example Creation Output
{"original_url": "http://www.google.com","short_url": "https://morning-woodland-5743.herokuapp.com/1"}

## Example Usage
`https://morning-woodland-5743.herokuapp.com/1` will **redirect to** `www.google.com`.
