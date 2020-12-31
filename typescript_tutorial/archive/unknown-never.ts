let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
// userName = userInput;
// console.log(userName)

function generateError(message: string, code: number):never {
  throw { message: message, console, errorCode: code };
}

generateError('error', 500);
