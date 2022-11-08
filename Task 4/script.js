/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then((response) => response.json())
  .then((carsObject) => {
    createCarList(carsObject);
  });

function createCarList(carsObject) {
  let container = document.getElementById("output");
  carsObject.forEach((cars) => {
    let contentDiv = document.createElement("div");
    contentDiv.classList.add("myStyle");
    container.append(contentDiv);

    let brand = document.createElement("h3");
    brand.classList.add("brandName");
    brand.innerText = `Cars: ${cars.brand}`;
    contentDiv.appendChild(brand);

    let models = document.createElement("p");
    models.innerText = `Models: ${cars.models.join(", ")}`;
    contentDiv.appendChild(models);

    console.log(cars);
  });
}
/*BŪTINA įsijunkti LIVE-SERVER ADDON mes kitaip mes errorą jei iš *.html failo atidarinėjama.*/