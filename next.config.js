/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path:"",
    domains: [
      "media-exp1.licdn.com",
    ],
  },
  basePath: "/resume",
  assetPrefix: "/resume",
}

module.exports = nextConfig
