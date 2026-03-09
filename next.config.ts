nano next.config.tsconst nextConfig = {
  async redirects() {
    return [
      {
        source: "/theroadto",
        destination: "/theroadto/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/theroadto",
        destination: "/theroadto/index.html",
        permanent: false,
      },
      {
        source: "/theroadto/",
        destination: "/theroadto/index.html",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
