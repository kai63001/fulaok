/** @type {import('next').NextConfig} */
const path = require('path')

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
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
      "i.imgur.com",
      "drive.google.com",
      "lh3.googleusercontent.com",
      "petmaya.com",
    ],
  },
});
