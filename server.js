require('babel-register')({
  presets: ['react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./Components/App.jsx');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  //const html = '<h1>Hello From Server</h1>';
  const html = ReactDOMServer.renderToString(React.createElement(App));
  res.send(html);
});


app.listen(3000, () => {
  console.log('localhost:3000');
});
