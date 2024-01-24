const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // 스프링 부트 서버 주소
      changeOrigin: true,
    })
  );
};