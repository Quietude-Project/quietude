const express = require('express');
const locationController = require('../controllers/locationController');
const router = express.Router();

router.get('/*', locationController.getLocations, (req, res) => {
  res.status(200).send(res.locals.locations);
});

module.exports = router;
