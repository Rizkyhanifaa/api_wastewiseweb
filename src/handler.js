const { getRecommendation } = require('./data/recommendations');

// Handler untuk mendapatkan rekomendasi berdasarkan jenis sampah spesifik
const getRecommendationHandler = (request, h) => {
  const { wasteType } = request.params; 

  const recommendation = getRecommendation(wasteType);

  return h.response({
    status: 'success',
    data: {
      wasteType: wasteType,
      recommendation: recommendation,
    },
  }).code(200);
};

module.exports = {
  getRecommendationHandler,
};