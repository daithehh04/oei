/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "demo1.okhub.tech",
            },
        ],
    },
};

module.exports = nextConfig;
