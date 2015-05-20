'use strict';

describe('WapCssExampleApp', function () {
  var React = require('react/addons');
  var WapCssExampleApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    WapCssExampleApp = require('components/WapCssExampleApp.js');
    component = React.createElement(WapCssExampleApp);
  });

  it('should create a new instance of WapCssExampleApp', function () {
    expect(component).toBeDefined();
  });
});
