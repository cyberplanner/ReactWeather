var express = require('express'); // require express
var app     = express();          // create an app
const PORT    = process.env.PORT || 4000; // set the port
app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
app.use(express.static('public'));// Share a directory

// listen to port 3000
app.listen(PORT, function() {
  // and log a msg to the console
  console.log('express server is up on port '+ PORT);
});
