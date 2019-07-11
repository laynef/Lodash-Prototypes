const _ = require('lodash');
const numbers = require('./utils/numbers');
const strings = require('./utils/strings');
const arrays = require('./utils/arrays');


numbers.forEach(name => { 
    Number.prototype[name] = function() {
        const args = arguments;
        args.unshift(this);
        return _[name].call(this, args);
    }
});

strings.forEach(name => { 
    String.prototype[name] = function() {
        const args = arguments;
        args.unshift(this);
        return _[name].call(this, args);
    }
});

arrays.forEach(name => { 
    Array.prototype[name] = function() {
        const args = arguments;
        args.unshift(this);
        return _[name].call(this, args);
    }
});
