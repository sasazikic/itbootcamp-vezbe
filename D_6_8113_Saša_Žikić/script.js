console.log("Zdravo svete");

/* 1. Zadatak
Izvršiti konverziju temperature iz Farenhajta u Kelvine i obratno, ukoliko su date sledeće dve formule:

Celzijus = (Farenhajt - 32) * 5/9
Kelvin = Celzijus + 273.15

Temperaturu u Farenhajtima i Kelvinima zadati samostalno.
 */

/*  Prva verzija*/

let f = 115;

let c = (f - 32) * 5/9;
console.log("115 farenhajta je " + c + " celzijusa.")

let kel = c + 273.15;

console.log(c + " celzijusa je " + kel + " kelvina.");

console.log(kel + " kelvina = " + c + " celzijusa = " + f + " farenhajta")


// Druga verzija


/* 
let k = 350;

let c = k - 273.15;
console.log(c);

let f = c / (5/9) + 32;


console.log(f);
console.log(k + " kelvina = " + c + " celzijusa = " + f + " farenhajta")
*/

/* 2. Zadatak
Knjiga ima n poglavlja (broj n unosite sami). 
Čitalac je prvog dana pročitao a poglavlja, a drugog dana dva poglavlja više nego prvog dana.
Na osnovu dodeljenih vrednosti, u konzoli ispisati koliko poglavlja je preostalo čitaocu da pročita do kraja knjige. Pretpostaviti da su vrednosti promenljivih n i a ispravno unete.*/

let n = 20;
let a = 5;
let b = a + 2;
console.log("Knjiga ima " + n + " poglavlja.")
console.log("Prvog dana je citaoc procitao " + a + " poglavlja.")
console.log("Drugog dana je citaoc procitao " + b + " poglavlja.")

let preostalaPoglavlja = n - (a+b);

console.log("Citaocu je preostalo " + preostalaPoglavlja + " poglavlja da bi procitao celu knjigu.")

/* 3. Zadatak
Pera i Mika su kupili dva ista džempera. Pera je dao p dinara, Mika je dao m dinara i dobili su kusur od k dinara. Brojeve p, m i k odredite proizvoljno.
Na osnosvu unetih vrednosti, u konzoli ispisati koliki kusur treba da dobije Pera, a koliki kusur treba da dobije Mika, da bi jednako platili svako svoj džemper.*/

let p = 1700;
let m = 2000;
let k = 600;

let cenaDzempera = (p + m - k)/2;


console.log(`Mikin kusur je ` + (m - cenaDzempera) + " dinara.")
console.log("Perin kusu je " + (p - cenaDzempera) + " dinara.")



