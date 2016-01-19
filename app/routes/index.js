'use strict';

var UrlHandler = require(process.cwd() + '/app/controllers/urlHandler.server.js');

module.exports = function(app, db) {

  var urlHandler = new UrlHandler(db);

  app.route(/\/new\/.+/)
    .get(function(req, res) {
      if (validUrl(req)) {
        urlHandler.createUrl(req, res);
      } else {
        res.json({"error": "URL Invalid"});
      }
    });

  app.route("/:sequence").get(function(req, res) {
    var sequence = Number(req.params.sequence);

    if (sequence) {
      urlHandler.redirectToUrl(req, res);
    } else {
      res.json({"error": "Cannot find matching URL"});
    }
  });

  app.route("/").get(function(req, res) {
    res.sendFile(process.cwd() + '/public/index.html');
  });
};

function validUrl(req) {
  var url = extractUrl(req);
  var pattern = /https?:\/\/www\..+\.com/;
  return url.match(pattern);
}

function extractUrl(req) {
  return req.path.replace('/new/','');
}
