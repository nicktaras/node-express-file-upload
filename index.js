var swig = require('swig');
var config = require('./config/config');
var express = require('express');
var app = express();
var fs = require('fs');

app.engine('html', swig.renderFile);
app.set('view engine', 'html');

var myLogger = function (req, res, next) { console.log('LOGGED'); next() };
app.use(myLogger);

var indexPath = "/Users/nicktaras/Documents/GitHub/fileuploader/node-express-file-upload/app/index.html";

app.get('/', function (req, res) {

  var searchTemplatesDir = 'app/uploaded/templates/';
  var templateList = [];
  fs.readdir(searchTemplatesDir ,function(err, files){
    if (err) {
      return console.error(err);
    }
    files.forEach( function (file){
      templateList.push({ name: file, location: "/uploaded/templates/" + file});
    });
  });

  res.render(indexPath, { templateList: templateList });
  //res.send('Hello World!');
});

app.use(express.static(__dirname + '/app')); // where files are stored - Must be defined after routes.
app.listen(3000);
