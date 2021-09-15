let f = document.getElementById(`f`);
let c = document.getElementById(`c`);
let k = document.getElementById(`k`);

let inputF = document.getElementById(`inputF`);
let inputC = document.getElementById(`inputC`);
let inputK = document.getElementById(`inputK`);

f.addEventListener(`click`, () => {
    inputC.value = Math.round((inputF.value - 32) / 1.8);
    inputK.value = (inputF.value - 32) * 5/9 + 273.15;
});

c.addEventListener(`click`, () => {
    inputF.value = (inputC.value * 9/5) + 32;
    inputK.value = inputC.value * 1 + 273.15;           // jedino ovaj deo koda ne radi kako treba, spaja cifre umesto da ih preracuna
});

k.addEventListener(`click`, () => {
    inputC.value = inputK.value - 273.15;
    inputF.value = (inputK.value - 273.15) * 9/5 + 32;
});

let reset = document.getElementById(`reset`);

reset.addEventListener(`click`, ()=> {
    inputF.value = "";
    inputC.value = ``;
    inputK.value = ``;
});
