const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  images: {
    domains: ['i.dummyjson.com'],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
