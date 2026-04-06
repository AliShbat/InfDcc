/* @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/InfDcc",
  images: {
    unoptimized: true,
    remotePatterns:[{
      protocol: 'https',
      hostname:'news.dcc.sy',
    port: '',
        pathname: '/**',}
    ]
  },
};

module.exports = nextConfig;
/* export default nextConfig; */