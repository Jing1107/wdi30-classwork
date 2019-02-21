const express = require('express'); // node.js
const ejs = require('ejs');
const _= require('underscore');
const axios = require('axios');
//import React from 'react'; // es2017 // babel_webpack => native

const app = express();
app.use(express.static('public'));
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  const brothers = 'Groucho Max Frocho Zeppo Gummo'.split(' ');
  const randomBrother = _(brothers).sample();
  res.render('home.ejs', {randomBrother: randomBrother}); //instance variable
});

app.get('/hello/:name', (req, res) => {
  res.send('Hello', {name: req.params.name});
});

app.get('/calculator/:x/:y/:operator', (req, res) => {
  let answer;
  if (req.params.operator === '+') {
    answer = Number(req.params.x) + Number(req.params.y);
  } else if (req.params.operator === '-') {
    answer = Number(req.params.x) - Number(req.params.y);
  }

  res.render('calculator.ejs', {answer: answer});
});

app.get('/about', (req, res) => {
  res.send('Goodbye cruel world');
})

app.get('/info', (req, res) => {
  res.json({
    name: 'Groucho',
    hair: 'brown',
    luckyNumber: Math.random()
  });
});

// You can use a regular expression instead of a string for a path.
// I'm
app.get(/[0-9]/, (req, res) => {
  res.send('you asked for a number');
  console.log(req);
});

app.get('/trivia', (req,res) => {
  //fetch some trivia from an API
  axios.get('http://numbersapi.com/random/trivia').then((response) => {
    //display that trivia with a view
    res.render('trivia.ejs', {trivia: response.data});
  });
});

app.listen(3000, () => console.log('Now serving! http://localhost:3000/'));
