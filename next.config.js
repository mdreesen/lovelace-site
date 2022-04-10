/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
}

module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(defaultConfig)
}

module.exports = nextConfig
