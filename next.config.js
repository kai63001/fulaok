/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
};
