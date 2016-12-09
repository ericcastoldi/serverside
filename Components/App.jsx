const React = require('react');

module.exports = React.createClass({

  render: function(){
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <h1>{this.props.title}</h1>
          <div id="app">{this.props.children}</div>
          <script src='/application.js' />
        </body>
      </html>
    );
  }
});
