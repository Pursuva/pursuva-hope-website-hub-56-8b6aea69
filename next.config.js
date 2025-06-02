/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Outputs a Single-Page Application (SPA).
    distDir: './dist', // Changes the build output directory to `./dist/`.
    reactStrictMode: true,
    typescript: {
        // !! WARN !!
        // Ignoring TypeScript errors during build
        // This is not recommended unless you're intentionally bypassing type checking
        ignoreBuildErrors: true,
    },
    eslint: {
        // Also ignore ESLint errors during build if needed
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig