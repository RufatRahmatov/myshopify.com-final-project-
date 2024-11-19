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
                pathname: '/**', // Tüm alt yolları kapsar
            },
            {
                protocol: 'https',
                hostname: 'maxmod-goggles.myshopify.com',
                pathname: '/**', // Tüm alt yolları kapsar
            },
            {
                protocol: 'https',
                hostname: 'another-domain.com',
                pathname: '/**', // Tüm alt yolları kapsar
            },
        ],
    },
};

export default nextConfig;
