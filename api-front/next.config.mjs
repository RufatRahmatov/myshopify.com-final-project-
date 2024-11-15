/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ['en', 'az'],
        defaultLocale: 'en',
    },
    images: {
        domains: [
            'localhost',
        ],
    },
};

export default nextConfig;




