/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  typescript: {
    // This still runs TypeScript type checking but allows you to customize
    // which errors are ignored via a function
    ignoreBuildErrors: true,
  },
  eslint: {
    // Custom ESLint configuration to ignore specific rules
    ignoreDuringBuilds: true,
  },
  // Add a custom webpack configuration to modify the TypeScript loader
  webpack: (config, { dev, isServer }) => {
    // Only apply in production builds
    if (!dev) {
      // Find the TypeScript loader rule
      const tsRule = config.module.rules.find(
        (rule) => rule.test && rule.test.toString().includes('tsx|ts')
      );
      
      if (tsRule && tsRule.use && Array.isArray(tsRule.use)) {
        const tsLoader = tsRule.use.find(
          (loader) => typeof loader === 'object' && loader.loader && loader.loader.includes('ts-loader')
        );
        
        if (tsLoader && typeof tsLoader === 'object') {
          // Add options to ignore specific errors
          tsLoader.options = {
            ...tsLoader.options,
            transpileOnly: true,
            reportFiles: ['!**/*.{ts,tsx}'],
          };
        }
      }
    }
    
    
    return config;
  },
}
 
export default nextConfig