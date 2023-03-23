const API = "https://rickandmortyapi.com/api";
const boton = document.querySelector("#btn");
boton.addEventListener("click", next);
const boton2 = document.querySelector("#btn2");
const img = document.querySelector("#img");

const pets = ["luka", "yiyi", "avi", "piña", "vaca"];

function* idsGenerator() {
  let id = 1;
  for (let pet of pets) {
    yield `El id de ${pet} es: ${id}`;
    id++;
  }
}

const ids = idsGenerator();
function next() {
  console.log(ids.next().value);
}
/////////////////////////////////
async function fetchData(url) {
  const response = await fetch(url);
  const jdata = await response.json();
  return jdata;
}

async function* fetchedData() {
  try {
    const data = await fetchData(`${API}`);
    const urlCharacters = data.characters;
    const characters = await fetchData(urlCharacters);
    const charesult = characters.results;
    for (let cu of charesult) {
      yield cu;
    }
  } catch {
    console.log("malir sal");
  }
}

const rminfo = fetchedData();

const next2 = async () => {
  do {
    const n1 = await rminfo.next();
    img.setAttribute("src", n1.value.image);
  } while (n1.done != true);
  console.log("se acabo");
};

boton2.addEventListener("click", next2);
