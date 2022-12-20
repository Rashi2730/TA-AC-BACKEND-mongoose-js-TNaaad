var express = require('express');
var mongoose = require('mongoose');
const User = require('./models/user');
var Use = require('./models/user');

mongoose.connect('mongodb://127.0.0.1:27017/sampless', (err) => {
  console.log(err ? err : 'Connected');
});

var app = express();
app.use(express.json());

///Create User databse

app.post('/users', (req, res) => {
  // console.log(req.body);
  User.create(req.body, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

//find User

app.get('//:id', (req, res) => {
  var id = req.params.id;
  // User.find((err, user) => {
  //   console.log(err);
  //   res.json(user);
  // });
  // User.findOne(id, (err, user) => {
  //   console.log(err);
  //   res.json(user);
  // });
  User.findById(id, (err, user) => {
    console.log(err);
    res.json(user);
  });
});

//UpdateUser

app.put('/users/:id', (req, res) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    res.json(updatedUser);
  });
});

//deleteUser

app.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
    res.send(`${deletedUser.name} user deleted`);
  });
});

//error handlers

app.use((req, res, next) => {
  res.send('Page not found');
});


app.listen(3000, () => {
  console.log('Server listening to port 3k');
});
