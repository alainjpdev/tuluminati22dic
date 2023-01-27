const path = require('path')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  cssModules: true,
})
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

const nextConfig = {
  images: {
    domains: ['https://res.cloudinary.com', 'res.cloudinary.com'],
  },
}
module.exports = {
  images: {
    domains: ['https://res.cloudinary.com', 'res.cloudinary.com'],
  },
}
module.export = nextConfig
