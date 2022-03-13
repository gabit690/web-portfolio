module.exports = {
  plugins: [
    require('postcss-import'),
    require('@fullhuman/postcss-purgecss')({
      content: [
        './**/*.html'
      ]
    }),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default'
    })
  ]
}