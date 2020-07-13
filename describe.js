const decorate = require('./decorate');

module.exports = (tape, separator=': ') => (subject, callback) => {
    const decorator = test => (name, ...args) => test([subject, name].join(separator), ...args)
    const test = decorate(tape, decorator);
    if (callback) callback(test);
    return test;
};
