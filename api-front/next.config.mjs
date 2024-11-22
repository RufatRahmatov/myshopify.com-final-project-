/** @type {import('next').NextConfig} */
const nextConfig = {

    i18n: {
        locales: ['en', 'az'],
        defaultLocale: 'en',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'maxmod-goggles.myshopify.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'another-domain.com',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
