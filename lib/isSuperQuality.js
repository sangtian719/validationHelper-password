const assertNumber = require('./util/assertNumber');

const isSuperQuality = (password, minLength, maxLength) => {
    assertNumber(minLength,maxLength);
    let regex =  new RegExp (`(^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*?[#?!@$%^&*-]))^[0-9A-Za-z#?!@$%^&*-]{${minLength},${maxLength}}$`);
       return regex.test(password)
}

module.exports = isSuperQuality;
