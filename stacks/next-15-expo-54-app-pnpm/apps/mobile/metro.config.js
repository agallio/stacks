// https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require('expo/metro-config')
const { withNativeWind } = require('nativewind/metro')

// Find the project and workspace directories
const projectRoot = __dirname
const config = getDefaultConfig(projectRoot, { isCSSEnabled: true })

module.exports = withNativeWind(config, {
  input: './global.css',
  inlineRem: 17,
})
