const assertNumber = (min,max) => {
    min = parseInt(min);
    max = parseInt(max);
    if(isNaN(min))
    {
        throw Error('minLength must be a number')
    }
    else if(isNaN(max))
    {
        throw Error('maxLength must be a number');
    }
    else if(min >= max)
    {
        throw Error('maxLength must bigger than minLength');
    }
}

module.exports = assertNumber;
