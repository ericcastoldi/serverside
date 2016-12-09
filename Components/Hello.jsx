const React = require('react');

module.exports = React.createClass({
  clickHandler: function(){
      alert('Alert from the server');
  },

  render: function(){
    return (
      <div>
        <h1>Hello From React Server JSX!!! </h1>
        <p>Just amazing!</p>
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    );
  }
});
