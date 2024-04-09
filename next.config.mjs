
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/loveletter',
        destination: 'https://loveletter-seven.vercel.app/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;