var express = require('express');
var mongoose = require('mongoose');

mongoose.connect(' mongodb://127.0.0.1:27017/saampple', (err) => {
  console.log(err ? err : 'Connected');
});
var app = express();

app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
