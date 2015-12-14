var express = require('express');
var app = express();
var path = require('path');

console.log(__dirname );
app.use(express.static(__dirname ));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.listen(1337, '10.30.0.74');
console.log('Server running at http://10.30.0.74:1337/');