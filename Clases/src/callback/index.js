function sum(num1, num2) {
  return console.log(num1 + num2);
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

// console.log(calc(2, 2, sum));
setTimeout(calc, 2000, 2, 2, sum);

setTimeout(() => {
  console.log(`Hola, estuve esperando 2 segundos para salir`);
}, 2000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, `Germa`);
