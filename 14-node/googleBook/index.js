const express = require('express');
// const body-parser = require('body-parser')
const ejs = require('ejs');
const axios = require('axios');

const app = express();
app.use(express.static('public'));
app.set('view-engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home.ejs')
});


app.get('/google/', (req,res) => {
  //fetch some trivia from an API
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${req.query.title}`).then((response) => {
  //   //display that trivia with a view
    res.render('google.ejs', {url: response.data.items[0].volumeInfo["imageLinks"]["thumbnail"]});
  });
});

app.listen(3000, () => console.log('Now serving! http://localhost:3000/'));
