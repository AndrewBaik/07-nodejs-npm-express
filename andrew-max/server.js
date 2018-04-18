'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.get('/new', (request, response) => {
  response.sendFile('new.html', {root: './public'});
});


// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(),(request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
  response.status(201).json(request.body);
});

app.use((reqest, response) => {
  response.status(404).send('Sorry Dude, no data for you');
});

app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}!`);
});