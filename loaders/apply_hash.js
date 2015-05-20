var wapCss = require('wap-css')


module.exports = function (content) {
  this.cacheable && this.cacheable()

  var style = wapCss(content)
  return style.css
}

