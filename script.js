const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-={}[]|;:,.<>?';

const generatePassword = () => {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  let charSet = lowercaseLetters;
  if (includeUppercase) {
    charSet += uppercaseLetters;
  }
  if (includeNumbers) {
    charSet += numbers;
  }
  if (includeSymbols) {
    charSet += symbols;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    const randomChar = charSet[randomIndex];
    password += randomChar;
  }

  return password;
};

const displayPassword = () => {
  const password = generatePassword();
  const passwordInput = document.getElementById('password');
  passwordInput.value = password;
  passwordInput.classList.add('animated');
  setTimeout(() => {
    passwordInput.classList.remove('animated');
  }, 1000);
};

const matrixElement = document.getElementById('matrix');
const streams = [];

for (let i = 0; i < 30; i++) {
  const stream = document.createElement('div');
  stream.className = 'stream';
  for (let j = 0; j < 20; j++) {
    const symbol = document.createElement('span');
    symbol.innerText = Math.random() < 0.5 ? '0' : '1';
    stream.appendChild(symbol);
  }
  matrixElement.appendChild(stream);
  streams.push(stream);
}

setInterval(() => {
  for (const stream of streams) {
    const firstSymbol = stream.firstElementChild;
    const newSymbol = document.createElement('span');
    newSymbol.innerText = Math.random() < 0.5 ? '0' : '1';
    stream.appendChild(newSymbol);
    firstSymbol.remove();
  }
}, 100);

const generateButton = document.getElementById('generate');
generateButton.addEventListener('click', displayPassword);
// Initialising the canvas
var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d');

// Setting the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting up the letters
var letters = 'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
letters = letters.split('');

// Setting up the columns
var fontSize = 15
    columns = canvas.width / fontSize;

// Setting up the drops
var drops = [];
for (var i = 0; i < columns; i++) {
  drops[i] = 1;
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 20);