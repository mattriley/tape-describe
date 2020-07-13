module.exports = (tape, decorator) => {
    const test = decorator(tape);
    const only = decorator(tape.only);
    const skip = decorator(tape.skip);
    return Object.assign(test, tape, { only, skip });
}
