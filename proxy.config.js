const proxyConfig = {
  '/api': {
    target: 'http://localhost:3000',
    secure: false,
    pathRewrite: {
      '^/api': ''
    }
  }
}

module.exports = proxyConfig;
