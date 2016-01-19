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

**NOTES:** You must have **mongdb** server running for the application to
connect to. If necessary, you can change the settings in `server.js` to reflect
your set-up. Also note that, depending on how your system installed its
binaries, you might have to change the command from `node server.js` to `nodejs
server.js`.

## Example Creation Usage
`https://morning-woodland-5743.herokuapp.com/new/http://www.google.com`

## Example Creation Output
{"original_url": "http://www.google.com","short_url": "https://morning-woodland-5743.herokuapp.com/1"}

## Example Usage
`https://morning-woodland-5743.herokuapp.com/1` will **redirect to** `www.google.com`.
