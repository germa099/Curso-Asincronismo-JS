function saludo(nombre, apellido) {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve(`Hola querido ${nombre} ${apellido}`);
        }, 2000)
      : reject(new Error("algo malir sal"));
  });
}

const saludar = async () => {
  const elSaludo = await saludo("Germain", "Ramirez");
  console.log(elSaludo);
};

console.log("before");
saludar();
console.log("after");
