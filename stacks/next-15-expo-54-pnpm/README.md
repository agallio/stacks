# Expo 54 + Next.js 15 (Turborepo with pnpm) - @agallio/stacks

Expo + Next.js (TypeScript) boilerplate using Turborepo by [agallio](https://github.com/agallio)

## Prerequisites

1. `Node.js` LTS (> 20)
2. `pnpm` >= 10.22.0

## What's Inside?

- [Turborepo](https://turbo.build/)
- [Expo](https://expo.dev)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [Next.js](https://github.com/vercel/next.js/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nativewind](https://www.nativewind.dev/)

This monorepo includes the following packages/apps:

### Apps and Packages

- `mobile`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `@repo/app`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `mobile` applications
- `@repo/tailwind-config`: Shared `tailwind.config.js` used throughout the monorepo
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Getting Started

**Use `pnpm`!**

```bash
# install dependencies
$ pnpm

# development
$ pnpm dev # for web (Next.js)
$ pnpm android # for Android (Expo)
$ pnpm ios # for iOS (Expo)

# production build
$ pnpm build
```
