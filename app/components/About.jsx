var React   = require('react');
var { Link }= require('react-router');
// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Comp</h3>
//     );
//   }
// });

// Stateless Comp

var About = (props)=> {
  return (
    <div className="row">
      <div className="columns medium-12 large-10 small-centered">
        <h1 className="text-center page-title">About:</h1>
        <h4>Weather REACT project</h4>
        <p>A simple app built with REACT and uses OpenWeatherMap's API to fetch and display weather.</p>
        <a href="https://github.com/cyberplanner/ReactWeather">Github Repo</a> - Find the source code in this repo.
        <div>
          <h4><strong>Some of the tools I used:</strong></h4>
          <ol>
            <li><a href="https://facebook.github.io/react/">React</a></li> - Facebook's JS framework
            <li><a href="http://openweathermap.org">Open Weather Map</a></li> - Open Weather Map Api
            <li><a href="http://openweathermap.org">SCSS</a></li> - This app's custom styles were coded usign SassyCss preprocessor
          </ol>
        </div>
      </div>
    </div>
  );
}
module.exports = About;
