
var test = 'imastring'

//var isString = v => {[Symbol.toPrimitive](v) == 'string'}

//console.log(isString(test))





const is = {
  [Symbol.toPrimitive](v) {
      switch(v){
        case v == 'number': return 42;
        case v == 'string': return 43;
        default: return 'unknown'
    
      }

    //return null;
  }
};

//console.log(+is);

Symbol.prototype.toString = function() {
  return ('SYMBOL');
}

var symbol1 = Symbol('foo');

//console.log(symbol1.toString());



const React = require('react');
const { renderToString } = require('react-dom/server');

// Dynamically created. Does not need to be predefined by React
const { div, h1 } = requireApi();
console.log(renderToString(div({
  children: h1({
    children: 'Some output'
  })
})));
//=> <div data-reactroot="" [...]><h1>Some output</h1></div>

function requireApi () {
  return new Proxy({}, {
    get (target, property) {
      return function (...args) {
        return React.createElement(property, ...args);
      };
    }
  });
}
