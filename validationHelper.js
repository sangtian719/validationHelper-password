const isEmpty = require('./lib/isEmpty');
const isHighQuality = require('./lib/isHighQuality');
const isSuperQuality = require('./lib/isSuperQuality');
const isLowQuality = require('./lib/isLowQuality');
const isTime = require('./lib/isTime');
const isDate = require('./lib/isDate');
const version = '1.0.0'

const validationHelper = {
    version: version,
    isEmpty: isEmpty,
    passwordQuality: {
        isLowQuality: isLowQuality,
        isHighQuality: isHighQuality,
        isSuperQuality: isSuperQuality
    },
    isTime: isTime,
    isDate: isDate
}

module.exports = validationHelper