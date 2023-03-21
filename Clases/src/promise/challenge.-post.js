import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/products";

// function postData(urlApi, data) {
//   const response = fetch(urlApi, {
//     method: "POST", //defautl = GET
//     mode: "cors",
//     credentials: "same-origin", //default
//     headers: {
//       "content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response;
// }

const data = {
  title: "New Product by Germa NUEVISIMO",
  price: 200000000,
  description: "a really expensive product.",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

// postData(`${API}`, data)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

function upDateData(urlApi, data) {
  const ans = fetch(urlApi, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin", //default
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return ans;
}

upDateData(`${API}`, data)
  .then((response) => response.json())
  .then((i) => console.log(i));
