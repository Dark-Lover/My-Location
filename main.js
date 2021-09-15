// Ui elements
let longValue = document.querySelector(".longitude");
let latValue = document.querySelector(".latitude");
let btn = document.querySelector(".btn");
let adressName = document.querySelector(".name");
const apiUrl = "https://geocode.xyz/51.50354,-0.12768?geoit=json";

btn.addEventListener("click", (e) => {
  getAdress(longValue.value, latValue.value);
});

const getAdress = function (lan, lat) {
  const response = fetch(`https://geocode.xyz/${lan},${lat}?geoit=json`)
    .then((response) => {
      if (!response.ok) throw new Error(`${response.status}`);
      return response.json();
    })
    .then((data) => (adressName.textContent = data.country))
    .catch((err) => console.log(`Error: ${err.message}`));
};
