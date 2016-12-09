require('babel-register')({
  presets: ['react']
});

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(require('./routes/Index.jsx'));

app.listen(3000, () => {
  console.log('localhost:3000');
});
