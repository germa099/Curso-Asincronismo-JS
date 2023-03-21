const promise = new Promise(function (resulto, rechazado) {
  resulto("Buenisimo");
});

const cows = 15;
//* se utiliza resolve, reject como parte de una estandarización pero se pueden utilizar las palabras que unno decida
const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`we have ${cows} cows on the farm`);
  } else {
    reject("there's no cows to sattisfy the ask");
  }
});

countCows
  .then((result) => {
    console.log(result);
  })
  .catch((erro) => {
    console.log(erro);
  })
  .finally(() => console.log("finally"));
