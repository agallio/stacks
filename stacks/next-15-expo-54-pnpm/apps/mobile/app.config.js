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
  name: 'Stacks Mobile',
  slug: 'stacksmobile',
  scheme: 'stacksmobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  platforms: ['ios', 'android'],
  assetBundlePatterns: ['**/*'],
  newArchEnabled: true,
  ios: {
    ...sharedSplash,
    supportsTablet: true,
    bundleIdentifier: 'xyz.agallio.stacksmobile',
    icon: {
      dark: './assets/adaptive-icon.png',
      light: './assets/adaptive-icon.png',
      tinted: './assets/adaptive-icon.png',
    },
  },
  android: {
    ...sharedSplash,
    package: 'xyz.agallio.stacksmobile',
    versionCode: 1,
    edgeToEdgeEnabled: true,
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  plugins: ['expo-router'],
  experiments: {
    reactCompiler: true,
  },
}
