var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <div>
//         <h3>Examples Comp</h3>
//       </div>
//     );
//   }
// });

var Examples = (probs) => {
  return (
    <div>
      <h1 className="text-center">Examples:</h1>
      <p>Here are a few example locations:</p>
      <ol>
        <li><link to="/?location=London,UK">London, UK</link></li>
        <li><link to="/?location=New York City">New York City</link></li>
        <li><link to="/?location=Cairo, EG">Cairo, EG</link></li>
      </ol>
    </div>
  );
}
module.exports = Examples;
