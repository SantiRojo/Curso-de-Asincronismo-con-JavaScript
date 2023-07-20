// Una función de Callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción

function sum(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(2, 2, sum));


setTimeout(function () {
  console.log('Hola JavaScript');
}, 5000);

function greeting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(greeting, 3000, 'Santi')