/** @type {import('next').NextConfig} */

const withSvgr = require("next-svgr");
const withPlugins = require("next-compose-plugins");
require("dotenv").config();
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

// WORDPRESS_DOMAIN_NAME can be either a string with single value, or string with comma separated values, i.e "domain-one.com, domain-two.com"
const wpDomains = process.env.WORDPRESS_DOMAIN_NAME;
const domains = wpDomains?.split(", ");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains,
    minimumCacheTTL: 63072000,
  },
};

module.exports = async (phase) =>
  withPlugins([withSvgr, withBundleAnalyzer], nextConfig)(phase, {
    undefined,
  });
