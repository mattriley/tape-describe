module.exports = tape => (subject, callback) => {
    const testWith = func => (name, ...args) => func(`${subject}: ${name}`, ...args);
    const test = Object.assign(testWith(tape), tape, {
        only: testWith(tape.only),
        skip: testWith(tape.skip)
    });
    if (callback) callback(test);
    return test;
};
