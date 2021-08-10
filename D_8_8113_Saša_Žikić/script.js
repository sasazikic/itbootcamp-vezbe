console.log("Zdravo svete");

/* Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.*/

let danUNedelji = new Date();
let sat = danUNedelji.getHours()
let dan = danUNedelji.getDay()
console.log(dan);
console.log(sat);

if( dan >= 1 && dan <= 5) {
    if( sat >= 9 && sat < 20) {
        console.log("Otvoreno")
    }
    else {
        console.log("Zatvoreno")
    }
} else if( dan == 0 ) {
    if( sat >= 10 && sat < 18) {
        console.log("Otvoreno")
    }
    else {
        console.log("Zatvoreno")
    }
} else if ( dan > 5 ) {
    if( sat >= 10 && sat < 18) {
        console.log("Otvoreno")
    }
    else {
        console.log("Zatvoreno")
    }
} else {
    console.log("Zatvoreno")
}

/* Zadatak 2*/


let pozitivniDanas = 8500;
let ukupnoTestiraniDanas = 28400;
let ukupnaPopulacija = 80000;

let procenatPozitivnihDanas = pozitivniDanas * 100 / ukupnoTestiraniDanas;
let procenatPozitivnihUkupno = pozitivniDanas * 100 / ukupnaPopulacija;

console.log(procenatPozitivnihDanas)
console.log(procenatPozitivnihUkupno);

if(procenatPozitivnihDanas > 30 ) {
    if (procenatPozitivnihUkupno > 10) {
        document.body.innerHTML = "<h1>VANREDNO STANJE</h1>"
    }
}


