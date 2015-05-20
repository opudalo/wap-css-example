var wapCss = require('wap-css')


module.exports = function (content) {
  this.cacheable && this.cacheable()

  var style = wapCss(content)
  this.values = style.transformations
  return 'module.exports = ' + JSON.stringify(style.transformations)
}
