var React = require('react');

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
    <div>
      <h3>About:</h3>
      <p>Welcome to the about page!</p>
    </div>
  );
}
module.exports = About;
