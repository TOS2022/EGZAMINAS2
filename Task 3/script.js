/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  fetch(ENDPOINT)
    .then((response) => response.json())
    .then((createCards) => {
      createCards.forEach((info) => {
        const login = info.login;
        const avatar = info.avatar_url;
        const img = document.createElement("img");
        img.classList.add("image");
        img.src = avatar;
        const listLogin = document.createElement("div");
        listLogin.classList.add("login");
        listLogin.innerHTML = login;

        document.getElementById("output").append(listLogin);
        document.getElementById("output").append(img);
      });
    });
  document.getElementById("message").style.visibility = "hidden";
});