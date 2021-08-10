/*  Formirati objekat dan koji sadrži:
Datum (string u formatu YYYY/MM/DD),
Kiša (true/false),
Sunce (true/false),
Oblačno (true/false),
Vrednosti temperature (Niz temperatura tog dana)
*/


let dan1 = {
    datum: `2021/05/15`,
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [10, 12, 15, 15, 15, 15, 16]
};

let dan2 = {
    datum: `2021/05/25`,
    kisa: true,
    sunce: true,
    oblacno: true,
    temperature: [13, 15, 16, 19, 25, 20, 16, 15, 20, 20]
};

let dan3 = {
    datum: `2021/05/30`,
    kisa: true,
    sunce: false,
    oblacno: false,
    temperature: [17, 20, 24, 27, 16, 26, 15, 15, 15, 12]
};

let dani= [dan1, dan2, dan3];

console.log(dani);

/* 1. Napraviti arrow funksiju koja u konzoli ispisuje datum u kome je najviše puta izmerena temperatura. Ukoliko ima više takvih datuma, ispisati poslednji od njih.*/

najviseMerenja = () => {
    let max = dan1.temperature.length;
    let datum = dan1.datum;
    dani.forEach(elem => {
        if(elem.temperature.length >= max) {
            max = elem.temperature.length
            datum = elem.datum;
        }
    });
    return datum;
};

console.log(najviseMerenja());

/* 2. Napraviti arrow funksiju koja prebrojava i u konzoli ispisuje koliko je bilo kišnih dana, koliko je bilo sunčanih dana i koliko je bilo oblačnih dana */

brojac = () => {
    let kisa = 0;
    let sunce = 0;
    let oblacno = 0;
    dani.forEach(elem => {
        if(elem.kisa == true) {
            kisa++;
        }
        if(elem.oblacno == true) {
            oblacno++;
        }
        if(elem.sunce == true) {
            sunce++;
        }
    })
    console.log(`Kisnih dana je bilo ${kisa}`);
    console.log(`Suncanih dana je bilo ${sunce}`);
    console.log(`Oblacnih dana je bilo ${oblacno}`);
}

console.log(brojac());      // Ne znam zbog cega je undefined u ovoj funkciji

/* 3. Napraviti arrow funkciju koja računa i vraća koliko je bilo dana sa natprosečnom temperaturom. Pozvati ovu funkciju i njen rezultat ispisati u konzoli. */

prosek = () => {
    let suma =0;
    let brojac = 0;
    dani.forEach(elem => {
        brojac += elem.temperature.length
        for(let i = 0; i < elem.temperature.length; i++) {
            suma += elem.temperature[i];
        }
    })
    return(suma/brojac)
}

console.log(prosek());

iznadProseka = () => {
    let brojac = 0;
    dani.forEach(elem => {
        for(let i = 0; i < elem.temperature.length; i++){
            if(elem.temperature[i] > prosek()){
                brojac++;
                break;
            }
        }
    })
    return brojac;
}

console.log(iznadProseka())

// Valjda tacan drugi nacin 

zad3 = () => {
    let suma =0;
    let brojac = 0;
    dani.forEach(elem => {
        brojac += elem.temperature.length
        for(let i = 0; i < elem.temperature.length; i++) {
            suma += elem.temperature[i];
        }
    })
    let prosek = suma/brojac;
    let brojac2 = 0;
    dani.forEach(elem => {
        for(let i = 0; i < elem.temperature.length; i++){
            if(elem.temperature[i] > prosek) {
                brojac2++;
                break;
            }
        }
    })
    return brojac2;
}

console.log(zad3())


