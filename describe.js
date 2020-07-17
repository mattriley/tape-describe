const def = {
    decorate: require('tape-decorate'),
    separator: ': '
};

module.exports = ({ decorate = def.decorate, separator = def.separator }) => tape => (subject, cb) => {
    const decorator = test => (name, ...args) => test([subject, name].join(separator), ...args)
    const test = decorate(tape)(decorator);
    if (cb) cb(test);
    return test;
};
