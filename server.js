'use strict';

// dependencies
var express = require('express');
var mongo = require('mongodb').MongoClient;
var routes = require('./app/routes/index.js');
var url = process.env.MONGOLAB_URI
var app = express();

// settings
app.set('port', (process.env.PORT || 5000));

mongo.connect(url, function (err, db) {

   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB on port 27017.');
   }

   app.use('/public', express.static(process.cwd() + '/public'));
   app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

   routes(app, db);

   app.listen(app.get('port'), function() {
     console.log('Node app is running on port', app.get('port'));
   });
});
