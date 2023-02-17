const axios = require('axios');

const locationController = {};

locationController.getLocations = (req, res, next) => {
  const { location } = req.query;
  // console.log('HERE', req.query)
  
  const config = {
    headers: {
      Authorization:
        "Bearer /* Yelp API Key */",
    },
    params: {
      term: "coffee",
      location: location
    },
  };

  axios.get('https://api.yelp.com/v3/businesses/search', config)
    .then(response => {
      // console.log('list of businesses is: ', response.data.businesses)
      res.locals.locations = response.data.businesses;
      return next();
    })
    .catch(err => {
      return next({
        log: 'locationController.getLocations',
        message: { err: 'locationController.getLocations Error' }
      })
    })
};

module.exports = locationController;
