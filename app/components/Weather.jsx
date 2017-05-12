var React          = require('react');
var WeatherForm    = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, (e) => { // e for errorMessage
      this.setState({
        isLoading: false,
        errorMessage:e.message
      });
    });
  },

  render: function() {
    var {isLoading, location, temp, errorMessage} = this.state;

    function renderWeather() {
      if (isLoading) {
        return <h4 className="text-center">Fetching weather...</h4>
      } else if (location && temp) {
        return <WeatherMessage location={location} temp={temp}/>;
      }
    }
    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        );
      }
    }
    return (
      <div className="row">
        <div className="columns medium-8 large-4 small-centered">
        </div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderWeather()}
        {renderError()}
      </div>
    );
  }

});

module.exports = Weather;
