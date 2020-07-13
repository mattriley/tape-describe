module.exports = (tape, separator=': ') => (subject, callback) => {
    const decorate = func => (name, ...args) => func([subject, name].join(separator), ...args);
    const test = decorate(tape);
    const only = decorate(tape.only);
    const skip = decorate(tape.skip);
    Object.assign(test, tape, { only, skip });
    if (callback) callback(test);
    return test;
};
