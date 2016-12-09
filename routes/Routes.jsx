const React = require('react');
const App = require('../Components/App.jsx');
const Hello = require('../Components/Hello.jsx');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;

module.exports = (
  <Router history={ReactRouter.browserHistory}>
    <Route component={App}>
      <Route path="/" component={Hello} />
    </Route>
  </Router>
);
