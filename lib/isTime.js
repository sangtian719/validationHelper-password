const isTime = time => {
    let regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
    return regex.test(time);
}

module.exports = isTime;
