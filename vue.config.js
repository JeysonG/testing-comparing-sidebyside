module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
      ? '/static/apps/q-side-by-side/'
      // ? '/testing-comparing-sidebyside-live/'
      : '/'
}