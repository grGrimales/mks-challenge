/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com'
          },
          {
              protocol: 'https',
              hostname: 'teslo-shop-next-nu.vercel.app'
          },
          {
            protocol: 'https',
            hostname: 'mks-sistemas.nyc3.digitaloceanspaces.com'
          }
        ]
      }
};

export default nextConfig;
