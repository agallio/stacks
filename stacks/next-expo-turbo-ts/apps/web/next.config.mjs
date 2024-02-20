import { withExpo } from "@expo/next-adapter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: [
    "@repo/app",
    "nativewind",
    "react-native",
    "react-native-css-interop",
    "solito",
  ],
};

export default withExpo(nextConfig);
