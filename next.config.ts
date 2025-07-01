/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  basePath: isVercel ? '/sub-app' : '',
};

module.exports = nextConfig;
