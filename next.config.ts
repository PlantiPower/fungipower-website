const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/theroadto",
        destination: "/theroadto/index.html",
      },
      {
        source: "/theroadto/:path*",
        destination: "/theroadto/:path*",
      },
      {
        source: "/_next/:path*",
        destination: "/theroadto/_next/:path*",
      },
    ];
  },
};

export default nextConfig;
