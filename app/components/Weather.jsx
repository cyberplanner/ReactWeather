var React          = require('react');
var WeatherForm    = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {
    // var that = this;

    this.setState({
      isLoading: true
    });
    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (errorMessage) => {
      this.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function() {
    var {isLoading, location, temp} = this.state;
    function renderWeather() {
      if (isLoading) {
        return <h1>Fetching weather...</h1>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    return (
      <div>
        <h3>Weather Comp</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderWeather()}
      </div>
    );
  }
});

module.exports = Weather;
