/** @type {import('next').NextConfig} */

const isServer = typeof window === 'undefined';

const nextConfig = {
  reactStrictMode: true
}

module.exports = nextConfig
