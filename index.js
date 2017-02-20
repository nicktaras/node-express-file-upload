var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {

  var responseText = 'Hello World!<br>';

  var source = fs.createReadStream('/Users/nicktaras/Documents/GitHub/fileuploader/node-express-file-upload/uploaded/presentationB/akamai-logo.png');
  var dest   = fs.createWriteStream('/Users/nicktaras/Documents/GitHub/fileuploader/node-express-file-upload/uploaded/presentationA/akamai-logo.png');

  source.pipe(dest);
  source.on('end', function() {
    console.log('Copied file to new directory.');
  });
  source.on('error', function(err) {
    console.log('err', err);
  });

  res.send(responseText)

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});