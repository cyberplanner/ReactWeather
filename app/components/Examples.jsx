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
      <h1 className='text-center page-title'>Examples:</h1>
      <p>Here are a few example locations:</p>
      <ol>
        <li><Link to='/?location=London,UK'>London, UK</Link></li>
        <li><Link to='/?location=New York City'>New York City</Link></li>
        <li><Link to='/?location=Cairo, EG'>Cairo, EG</Link></li>
      </ol>
    </div>
  );
}
module.exports = Examples;
