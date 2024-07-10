const { createProxyMiddleware } = require('http-proxy-middleware');
const { APIHelper } = require('../util/helpers');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: APIHelper.baseUrl,
      changeOrigin: true,
    })
  );
};