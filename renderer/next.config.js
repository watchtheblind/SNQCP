/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        defaultLoaders.babel,
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')

    return config
  },
}
