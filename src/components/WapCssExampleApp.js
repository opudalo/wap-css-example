var React = require('react/addons')

require('normalize.css')
require('../styles/main.css')
var style = require('../styles/test.css')

function cn(...cls) {
  return cls.join(' ')
}

let a = 0
var WapCssExampleApp = React.createClass({
  render: function() {
    return (
      <div className={cn(style.heading, style.borderedTop)}>
       <div className={cn(style.content, style.floatLeft)}>
         <h3 className={cn(style.title, style.accent)}>
           Top Stories on Medium
         </h3>
       </div>
       <div className={cn(style.content, style.floatRight)}>
          <a className={cn(style.link, style.darken)} href="/top-stories">See more</a>
       </div>
      </div>
    )
  }
})
React.render(<WapCssExampleApp />, document.getElementById('content'))

module.exports = WapCssExampleApp


