module.exports = {
    reactStrictMode: true,
    poweredByHeader: false,
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
    env: {},
    images: {
        domains: ['localhost'],
    },
    experimental: {
        outputStandalone: true,
    },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};
