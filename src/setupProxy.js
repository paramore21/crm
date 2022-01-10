const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/edo',
    createProxyMiddleware({
      target: 'http://176.96.243.111:8081/api',
      changeOrigin: true,
    }),
  )
}
