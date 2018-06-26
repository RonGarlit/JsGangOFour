import express from 'express';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();

// In the app.js file, define the static folder paths so that it gets resolved in the node application
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use(express.static('public'))

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Node server running web application @ http://localhost:' + port);
    // open('http://localhost:' + port);
    open('http://localhost:' + port, 'firefox');
    // open('http://localhost:' + port, 'chrome');
  }
});

//hardcoded routes
// ========================================
// JavaScript exposed to all pages
/* app.get('/scripts.js', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/scripts.js'));
}); */

//Root - Home Page
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/home.html'));
});

app.get('/AbstractFactory', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/AbstractFactory.html'));
});

app.get('/Builder', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/Builder.html'));
});

app.get('/FactoryMethod', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/FactoryMethod.html'));
});




