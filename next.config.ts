import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: process.env.ALLOWED_ORIGINS?.split(",") || [],
};

export default nextConfig;
