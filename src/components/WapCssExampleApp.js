var React = require('react/addons')

require('normalize.css')
require('../styles/common.css')
var logo = require('../styles/logo.css')
var button = require('../styles/button.css')
var header = require('../styles/header.css')
var quote = require('../styles/quote.css')

function cn(...cls) {
  return cls.join(' ')
}

let a = 0
var WapCssExampleApp = React.createClass({
  render: function() {
    return (
      <div className={header.header}>
        <span className={logo.logo}>
          <img src="https://d2tehwsfkzo713.cloudfront.net/static/987e6b6ade/logo@2x.png" alt="Grammarly Logo" width="171" height="40"/>
        </span>

        <h1 className={header.headline}>Better Writing Made Easy</h1>
        <h3 className={header.description}>Grammarly makes you a&nbsp;better writer by&nbsp;finding and correcting <br/> up&nbsp;to&nbsp;10× more mistakes than your word processor.</h3>

        <div className={header.buttonWrap}>
          <div className={button.button}>
            <span className={button.text}>Get Grammarly</span>
            <span className={button.subtext}>Its free</span>
          </div>
        </div>

        <div className={header.quoteWrap}>
          <h2 className={quote.text}>
          —&nbsp;Grammarly quickly and easily makes your writing better.
          </h2>

          <div className={quote.logo}>
            <img alt="Grammar Check Review - Forbes" src="https://dvwdov0lm6yox.cloudfront.net/static/8140e7c29e/forbes-logo@2x.png" width="71" height="17"/>
          </div>
        </div>
      </div>
    )
  }
})
React.render(<WapCssExampleApp />, document.getElementById('content'))

module.exports = WapCssExampleApp

