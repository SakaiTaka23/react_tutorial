"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// userName = userInput;
// console.log(userName)
function generateError(message, code) {
    throw { message: message, console: console, errorCode: code };
}
generateError('error', 500);
