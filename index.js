var swig = require('swig');
var config = require('./config/config');
var express = require('express');
var app = express();
var fs = require('fs');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

//var myLogger = function (req, res, next) { console.log('LOGGED'); next() };
//app.use(myLogger);

var appPath   = __dirname + '/app/';
var indexPath = appPath + '/index.html';

app.get('/', function (req, res) {

  var searchTemplatesDir = appPath + config.upload_dir + '/templates';
  var templateList = [];
  fs.readdir(searchTemplatesDir ,function(err, files){
    if (err) {
      return console.error(err);
    }
    files.forEach( function (file){
      templateList.push({ name: file, location: searchTemplatesDir + '/' + file});
    });
  });

  res.render(indexPath, { templateList: templateList });

});

app.use(express.static(__dirname + '/app')); // where files are stored - Must be defined after routes.
console.log("listening on port:", config.port);
app.listen(config.port);
