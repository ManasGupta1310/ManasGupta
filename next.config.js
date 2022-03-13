const basePath = process.env.NODE_ENV === 'production' ? '/ManasGupta1310.github.io' : '';

module.exports = {
  /**
   * Tell Next.js where the `public` folder is.
   * Replace `nextjs-github-pages` with your Github repo project name.
   */
   images: {
    loader: 'imgix',
    path: '/',
  },
  basePath,
  assetPrefix: `${basePath}/`
};