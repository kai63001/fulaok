/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  i18n: {
    locales: ["en", "th"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      "graph.facebook.com",
      "drive.google.com",
      "lh3.googleusercontent.com",
    ],
  },
});
