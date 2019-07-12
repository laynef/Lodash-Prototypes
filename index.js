const _ = require('lodash');
const strings = require('./utils/strings');
const arrays = require('./utils/arrays');


strings.forEach(name => { 
    String.prototype[name] = function() {
        const args = Array.from(arguments);
        args.unshift(this);
        return _[name].call(this, args);
    }
});

arrays.forEach(name => { 
    Array.prototype[name] = function() {
        const args = Array.from(arguments);
        args.unshift(this);
        return _[name].call(this, args);
    }
});
