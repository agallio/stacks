# Turborepo Expo + Next.js - @agallio/stacks

Expo + Next.js (TypeScript) boilerplate using Turborepo by [agallio](https://github.com/agallio)

## Prerequisites

1. `Node.js` LTS (> 18)
2. `yarn` >= v4 (berry)

## What's Inside?

- [Turborepo](https://turbo.build/)
- [Expo](https://expo.dev)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Next.js](https://github.com/vercel/next.js/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nativewind](https://www.nativewind.dev/)

This monorepo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/app`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Getting Started

**Use `yarn`!**

```bash
# install dependencies
$ yarn

# development
$ yarn web # for web (Next.js)
$ yarn android # for Android (Expo)
$ yarn ios # for iOS (Expo)

# production build
$ yarn build
```
