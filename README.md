## validationHelper-password [![npm](https://img.shields.io/npm/v/validationhelper-password.svg)](https://www.npmjs.com/package/validationhelper-password) [![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/sangtian719/validationHelper-password/blob/master/LICENSE)
a validation package for Node.js.
<br>
Main function is providing different level of password validation.

## Installation and Usage

### Install 
`npm install --save validationhelper-password`
<br>
### Usage 
```js
const validationHelper = require('validationhelper-password');
```

## Example 

```js
let value = 'abc';
console.log((validatorHelper.isEmpty(value)))//=>false;


let password = '111112A';
let min = 2;
let max = 10;
console.log(validatorHelper.passwordQuality.isLowQuality(password,min,max))//=>true;
```
## Function
All function are listed below:

Validation                              | Description
--------------------------------------- | --------------------------------------
***isEmpty(parameter)***  | check if the parameter is empty.
***isLowQuality(password, min, max)***  | check if the password contains at least one of number, uppercase letter or lowercase letter. (1a, 1A, aA)
***isHighQuality(password, min, max)***  | check if the password contains at least one number, one uppercase letter, one lowercase letter. (1aA)
***isSuperQuality(password, min, max)***  | check if the password contains at least one number, one uppercase letter, one lowercase letter and one symbol. (1aA#)
***isTime(time)***  | check if the time format is HH:mm. (23:00)
***isDate(date)***  | check if the date format is YYYY-MM-DD. (2018-10-20)


## Contributing

In general, this project follow the "fork-and-pull" Git workflow.

1. Fork the repo on GitHub
2. Clone the project to your own machine
3. Work on your fork
    1. Make your changes and additions
    2. Change or add tests if needed
    3. Add changes to README.md if needed
4. Commit changes to your own branch
5. Push your work back up to your fork
6. Submit a Pull request and waiting to be accepted

## License (MIT)
[License](https://github.com/sangtian719/validationHelper-password/blob/master/LICENSE)
