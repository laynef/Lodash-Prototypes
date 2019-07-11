const _ = require('lodash');
const numbers = require('./utils/numbers');


numbers.forEach(name => { 
    Number.prototype[name] = function() {
        const args = arguments;
        args.unshift(this);
        return _[name].call(this, args);
    }
});

