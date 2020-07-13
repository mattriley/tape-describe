module.exports = tape => (subject, callback) => {
    const testWith = func => (name, ...args) => func(`${subject}: ${name}`, ...args);
    const test = testWith(tape);
    const only = testWith(tape.only);
    const skip = testWith(tape.skip);
    Object.assign(test, tape, { only, skip });
    if (callback) callback(test);
    return test;
};
