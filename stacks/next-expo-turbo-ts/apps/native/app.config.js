const lightSplash = {
  image: './assets/splash.png',
  resizeMode: 'contain',
  backgroundColor: '#ffffff',
}

const darkSplash = {
  image: './assets/splash.png',
  resizeMode: 'contain',
  backgroundColor: '#000000',
}

const sharedSplash = {
  splash: { ...lightSplash, dark: darkSplash },
}

export default {
  name: 'native',
  slug: 'native',
  scheme: 'native',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  platforms: ['ios', 'android'],
  assetBundlePatterns: ['**/*'],
  ios: {
    ...sharedSplash,
    supportsTablet: true,
    bundleIdentifier: 'xyz.agallio.stacksnative',
  },
  android: {
    ...sharedSplash,
    package: 'xyz.agallio.stacksnative',
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  plugins: ['expo-router'],
}
