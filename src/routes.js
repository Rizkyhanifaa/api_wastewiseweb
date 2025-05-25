const { addClassifyHandler } = require('./handler');

const routes = [
 {
   method: 'POST',
   path: '/classify',
   handler: addClassifyHandler,
   options: {
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
        multipart: true, 
        maxBytes: 5 * 1024 * 1024, // 5 MB max
      },
    },
 },
];
 
module.exports = routes;