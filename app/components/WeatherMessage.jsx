var React = require('react');

// var WeatherMessage = React.createClass({
//   render: function() {
//     var {location, temp} = this.props;
//     return (
//       <div>
//         <h1>It's {temp} in {location}!</h1>
//       </div>
//     );
//   }
// });
//////////////////// to:
// var WeatherMessage = (props) => {
//   return (
//     <div>
//       <h1>It's {props.temp} in {props.location}!</h1>
//     </div>
//   );
// }

///////////////////// OR:

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h1>It's {temp} in {location}!</h1>
    </div>
  );
}
module.exports = WeatherMessage;
