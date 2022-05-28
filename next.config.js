/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backend_url: "http://localhost:4500/"
  }
}

module.exports = nextConfig
