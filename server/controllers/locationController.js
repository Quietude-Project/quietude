const axios = require('axios');

const locationController = {};

locationController.getLocations = (req, res, next) => {
  const { location, term } = req.query;
  console.log('HERE', req.query);

  const config = {
    headers: {
      Authorization:
        'Bearer 8fwPfH2T5X5aGSbIvH6X5dYXoap_eXBUPLUwz1VU9noHbGOIvFaOZo3Wur5Molt6Go5E4x1lResOtPVc0Eeb9Uu-QtCFoSHksDmUH7Z4zgshSC3fbeSEBm_zzSHHY3Yx',
    },
    params: {
      term: term,
      location: location,
    },
  };

  axios
    .get('https://api.yelp.com/v3/businesses/search', config)
    .then((response) => {
      // console.log('list of businesses is: ', response.data.businesses)
      res.locals.locations = response.data.businesses;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'locationController.getLocations',
        message: { err: 'locationController.getLocations Error' },
      });
    });
};

module.exports = locationController;
