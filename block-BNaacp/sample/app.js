var express = require('express');
var mongoose = require('mongoose');
const User = require('./models/user');
var Use = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/sampless', (err) => {
  console.log(err ? err : 'Connected');
});

var app = express();
app.use(express.json());

app.post('/users', (req, res) => {
  // console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/users', (req, res) => {
  User.find({ _id: '63a0d56b366062c14f28929c' }, (err, user) => {
    console.log(err);
    res.json(user);
  });
});
app.get('/usersFindOne', (req, res) => {
  User.findOne({ _id: '63a0d58b366062c14f28929e' }, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/users/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

app.get('/users/:id',(req,res) => {
  User.update()
});

app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
