import fetch from "node-fetch";
const API = "https://pokeapi.co/api/v2";

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${API}/pokemon`)
//   .then((response) => response.json())
//   .then((i) => {
//     i.results[0].url;
//   })

//   .catch((er) => console.log(er));

fetchData(`${API}/pokemon`)
  .then((response) => response.json())
  .then((firstPokemons) => {
    console.log("AQUI ESTAN LO QUE APARECE EN /POKEMON");
    // console.log(firstPokemons);
    return fetchData(`${firstPokemons.results[0].url}`);
  })
  .then((response) => response.json())
  .then((i) => {
    console.log(i);
  })
  .catch((err) => console.log(err))
  .finally(() => console.log("finally"));
