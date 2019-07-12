const _ = require('lodash');
const strings = require('./utils/strings');
const arrays = require('./utils/arrays');


strings.forEach(name => { 
    String.prototype[name] = function(...args) {
        return _[name](this, ...args);
    }
});

arrays.forEach(name => { 
    Array.prototype[name] = function(...args) {
        return _[name](this, ...args);
    }
});
