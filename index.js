const http = require ('http');
const port = 3000;
const express = require('express');
const router = express.Router();
const path = require('path');
const app = express();
const nlp = require('compromise');
nlp.extend(require('compromise-sentences'))

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

// https://www.youtube.com/watch?v=YJMPO7F-kIM&ab_channel=DevSage