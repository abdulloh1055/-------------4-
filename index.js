let sanagich = 0;
let i = 0;

let input =  document.querySelector("input");
let start =  document.querySelector(".boshlash");
let finish =  document.querySelector(".javob");
let p =  document.querySelector("p");

let savollar = ["2 + 2 = ?", "25 - 7 = ?", "9 / 3 = ?", "30 + 20 = ?"];
let javoblar = ["4", "18", "3", "50"];

start.addEventListener("click", (event) => {
    event.preventDefault();

    p.textContent = (savollar[0]);
});

finish.addEventListener("click", (event) => {
    event.preventDefault();

    if (input.value === javoblar[i]) {
        sanagich = sanagich + 1;
    }

    i = i + 1;

    if (i === 4) {
        p.textContent = `Siz ${sanagich} savolga t'gri javob bergingiz,              = {4  sanagich} savolga notogri javob bergingiz` ;
        input.value = "";
        return;
    }

    p.textContent = savollar[i];

    input.value = "";
});