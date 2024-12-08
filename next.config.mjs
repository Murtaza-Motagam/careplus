/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com', 'img.freepik.com', 'plus.unsplash.com', 'images.pexels.com'], // Add this line
    },
    publicRuntimeConfig: {
        NEXT_PUBLIC_FETCH_URL: process.env.NEXT_PUBLIC_FETCH_URL,
    }
};

export default nextConfig;
