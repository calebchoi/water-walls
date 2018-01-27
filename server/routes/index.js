const router = require('express').Router();
const findWaterWall = require('../actions/findWaterWall.js');

router.get('/', (req, res) => {
  res.send(200);
});

router.post('/findWaterWall', findWaterWall.post);

module.exports = router;