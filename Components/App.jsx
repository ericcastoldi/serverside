const React = require('react');

module.exports = React.createClass({

  render: function(){
    return (
      <html>
        <head>
          <title>Server Side Rendering!</title>
        </head>
        <body>
          <div id="app">{this.props.children}</div>
          <script src='/application.js' />
        </body>
      </html>
    );
  }
});
