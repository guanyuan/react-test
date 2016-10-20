import { expect } from 'chai';
import sinon from 'sinon';
var jsdom = require('jsdom').jsdom;

global.expect = expect;
global.sinon = sinon;


global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};