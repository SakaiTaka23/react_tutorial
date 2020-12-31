const userName = 'Maxmax';

console.log(userName);

const button = document.querySelector('button')!;

function clickHandler(message: string) {
  console.log('clicked' + message);
}

// button.addEventListener('click',clickHandler('btn'))
button.addEventListener('click', clickHandler.bind(null, 'you'));
