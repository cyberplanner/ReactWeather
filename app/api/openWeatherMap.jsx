var axios = require('axios');
var appid = "c6b75647f601daf8ceef5b2e7daf16ce";
const OPEN_WEATHER_MAP_URL  = "http://api.openweathermap.org/data/2.5/weather?appid=c6b75647f601daf8ceef5b2e7daf16ce&units=metric";

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl)
          // .then(function(res) {
          //   // debugger;
          //   if (res.data.cod && res.data.message) {
          //     throw new Error(res.data.message);
          //   } else {
          //     return res.data.main.temp;
          //   }
          // }, function(err) {
          //   throw new Error('Unable to fetch weather.');
          // });

          .then(function(response) {
                console.log(response.data);
                if(response.data.cod && response.data.message) {
                    throw new Error('Unable to fetch weather');
                } else {
                    return response.data.main.temp;
                }
            }).catch(function(error) {
                throw new Error(error.response.data.message);
                console.log(error.response.data.message);
            });
  }
};


// api.openweathermap.org/data/2.5/weather?q=London,uk&appid=c6b75647f601daf8ceef5b2e7daf16ce&units=metric
// c6b75647f601daf8ceef5b2e7daf16ce
