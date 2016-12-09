const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../Components/App.jsx');
const Hello = require('../Components/Hello.jsx');
const ReactRouter = require('react-router');
const RouterContext = ReactRouter.RouterContext;


router.get('*', (req, res) => {
  const props = { title: 'Server title from props!' }

  ReactRouter.match({
    routes: require('./Routes.jsx'),
    location: req.url
  }, (err, redirectLocation, renderProps) => {
      if(renderProps) {
        const html = ReactDOMServer.renderToString(
          <RouterContext
            {...renderProps}
            createElement={(Component, renderp) => {
              return <Component {...renderp} {...props} />
            }}
          />
        );

        res.send(html);
          // const html = ReactDOMServer.renderToString(React.createElement(App, props, Hello));
          // res.send(html);
      }
      else{
        res.status(404).send('Not found :(');
      }
  });

});

module.exports = router;
