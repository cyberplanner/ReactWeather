var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {location, temp} = this.props;
    return (
      <div>
        <h1>It's {temp} in {location}!</h1>
      </div>
    );
  }
});

module.exports = WeatherMessage;
