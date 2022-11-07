/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kilograms = document.getElementById("search");
  const pounds = kilogramsToPounds(kilograms.value);
  const grams = kilogramsToGrams(kilograms.value);
  const ounce = kilogramsToOunce(kilograms.value);

  const output = document.getElementById("output");
  output.textContent = `SVARAI:  ${pounds} [lb]; GRAMAI:  ${grams} [g]; UNCIJOS:  ${ounce} [oz];`;
});

function kilogramsToPounds(kilograms) {
  return Number(kilograms) * 2.2046;
}

function kilogramsToGrams(kilograms) {
  return Number(kilograms) / 0.001;
}

function kilogramsToOunce(kilograms) {
  return Number(kilograms) * 35.274;
}