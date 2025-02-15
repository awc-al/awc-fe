import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    output: 'export', // Enables static export
    images: {
        unoptimized: true, // Required if using Next.js Image component
    },
    trailingSlash: true, // Adds trailing slashes to URLs
};

export default nextConfig;