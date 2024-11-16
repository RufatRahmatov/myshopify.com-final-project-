/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'az'],
        defaultLocale: 'en',
    },
    images: {
        domains: [
            'localhost',
            "maxmod-goggles.myshopify.com", "another-domain.com"
        ],
    },
};

export default nextConfig;




