const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // Set the publicPath to match GitHub Pages repository subdirectory
  // This is necessary because GitHub Pages serves content from username.github.io/networkTurismo/
  // For local development, you can use '/' and for production GitHub Pages use '/networkTurismo/'
  publicPath: process.env.NODE_ENV === 'production' ? '/networkTurismo/' : '/'
})
