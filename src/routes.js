const { getRecommendationHandler } = require('./handler');

const routes = [
  {
    method: 'GET', 
    path: '/recommendations/{wasteType}', 
    handler: getRecommendationHandler,
  },
];

module.exports = routes;