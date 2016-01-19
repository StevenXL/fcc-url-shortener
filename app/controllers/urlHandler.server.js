'use strict';

function urlHandler(db) {
  var urls = db.collection('urls');
  var hostname = "https://morning-woodland-5743.herokuapp.com/";
  var sequence = 0;

  this.createUrl = function(req, res) {
    var original_url = req.path.replace('/new/', '');
    sequence++;

    urls.insertOne({"original_url": original_url, "sequence": sequence},
        function(err, data) {
          if (err) {
            throw err;
          }
          res.json({"original_url": original_url, "short_url": hostname + sequence});
        });
  };

  this.redirectToUrl = function(req, res) {
    var num = Number(req.params.sequence);

    urls.find({"sequence": num}).limit(1).toArray(function(err, doc) {
      if (err) {
        throw err;
      }

      if (doc.length === 0) {
        res.json({"error": "Unable to find original url."});
      } else {
        res.redirect(doc[0].original_url);
      }

    });
  }
}

module.exports = urlHandler;
