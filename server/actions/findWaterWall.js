const findMaxTrappedWater = require('../logic/findMaxTrappedWater');
const findWaterCount = require('../logic/findWaterCount');

module.exports = {
  post: (req, res) => {
    const height = req.body.height;
    const result = {
      maxTrappedWater: findMaxTrappedWater(height),
      waterCount: findWaterCount(height)
    };
    res.send(JSON.stringify(result));
  }
}