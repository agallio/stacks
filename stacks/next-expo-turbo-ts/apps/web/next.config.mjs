import { withExpo } from "@expo/next-adapter";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["react-native", "nativewind", "react-native-css-interop"],
};

export default withExpo(nextConfig);
