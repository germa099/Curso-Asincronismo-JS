import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api";

async function fetchData(url) {
  const response = await fetch(url);
  const jdata = await response.json();
  return jdata;
}

const fetchedData = async () => {
  try {
    const data = await fetchData(`${API}`);
    const urlcharacters = data.characters;
    const characters = await fetchData(urlcharacters);
    const rick = characters.results[0];
    const morty = characters.results[1];

    console.log(`Nombre: ${rick.name}`);
    console.log(`id: ${rick.id}`);
    console.log(`Status: ${rick.status}`);
    console.log(`Origen: ${rick.origin.name}`);
    console.log(`Location: ${rick.location.name}`);
    console.log(`Episode: ${rick.episode}`);
    console.log(`Nombre: ${morty.name}`);
    console.log(`id: ${morty.id}`);
    console.log(`Status: ${morty.status}`);
    console.log(`Origen: ${morty.origin.name}`);
    console.log(`Location: ${morty.location.name}`);
    console.log(`Episode: ${morty.episode}`);
  } catch (error) {
    console.error(error);
  }
};

fetchedData();
