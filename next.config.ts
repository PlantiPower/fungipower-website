const nextConfig: any = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      /*
      {
        source: '/:lang/theroadto',
        destination: '/theroadto/index.html',
      },
      {
        source: '/theroadto',
        destination: '/theroadto/index.html',
      },
      {
        source: '/:lang/theroadto/_next/:path*',
        destination: '/theroadto/_next/:path*',
      },
      {
        source: '/theroadto/_next/:path*',
        destination: '/theroadto/_next/:path*',
      }
      */
    ]
  },
};
export default nextConfig;
