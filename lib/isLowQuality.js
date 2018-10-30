const assertNumber = require('./util/assertNumber');

const isLowQuality = (password, minLength, maxLength) => {
    assertNumber(minLength,maxLength);
    let regex =  new RegExp (`((?=.*[0-9])(?=.*[a-z])|(?=.*[0-9])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z]))^[0-9A-Za-z]{${minLength},${maxLength}}$`);
       return regex.test(password)
}

module.exports = isLowQuality;
