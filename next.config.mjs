/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  eslint: {
    dirs: ['.'],
  },
  output: 'export',
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '/profile', // 加上去在，dev開發模式會有問題
  // assetPrefix: '/profile', // 加上去在，dev開發模式會有問題
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
};

export default nextConfig;
