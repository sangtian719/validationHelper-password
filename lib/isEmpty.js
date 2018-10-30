//the empty validation can be used for whole server
const isEmpty = input =>
    input === undefined ||
    //check if input is undefined
    input === null ||
    //check if input is empty
    (typeof input === 'object' && Object.keys(input).length === 0)||
    (typeof input === 'string' && input.trim().length === 0);

module.exports = isEmpty;
