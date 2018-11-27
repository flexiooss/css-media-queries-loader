const {getOptions} = require('loader-utils')

module.exports = function (content) {
  const options = getOptions(this)
  Object.keys(options).forEach((k) => {
    if (new RegExp('.*\.' + k + '\.css$').test(this.resourcePath)) {
      console.log('css-media-queries-loader')
      console.log('wrap : ' + this.resourcePath)
      console.log('with mediaqueries: ' + k + ' : ' + options[k])
      content = `@media ${options[k]} { ${content} }`
    }
  })

  return content
}
