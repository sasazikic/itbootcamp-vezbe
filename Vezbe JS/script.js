/* 1. Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.*/

let sati = 15;
let minuti = 20;

let protekloVreme = sati * 60 + minuti;

console.log(protekloVreme); 

// 2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

let protekloMinuta = 250;

console.log(Math.floor(250/60) + " sata i " + 250 % 60 + " minuta")

// 3. Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 700;
let novcanica = 2000;

console.log(`Kusur koji je potrebno vratiti je ` + (novcanica - cenaRobe) + ` dinara.`)

/* 4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.*/

let date = new Date();
console.log(date);

let h = date.getHours();
let min = date.getMinutes();

console.log(h);
console.log(min);

console.log(`Proteklo vreme izrazeno u minutima je ` + (h * 60 + min));

/* 5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.*/

let d = date.getDate();
console.log(d);
let m = date.getMonth();
console.log(m);
let y = date.getFullYear();

console.log(d + `.` + m + `.` + y + `.`)
console.log(y + `/` + m + `/` + d + `.`)

/* 6. Konverzija valute iz evra u dinare (i obrnuto). */
/*
let dinar = 500;
let euro = 250;

let euroUDinar = euro * 117;
let dinarUEuro = dinar / 117;

console.log(`${dinar} dinara vredi ${dinarUEuro} eura.`);
console.log(`${euro} eura vredi ${euroUDinar} dinara.`);
*/
/* 7 .Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra. */

let dolar = 40;

let protivVrednostDolara = 98;
let protivVrednostEura = 117;

let dolarUeuro = protivVrednostDolara * dolar / 117;
console.log(dolarUeuro)


// Uporediti dva uneta datuma i ispisati koji od njih je raniji. 

let dan1 = 26;
let mesec1 = 6;
let godina1 = 2015;

console.log(`Datum 1 je ${dan1}.${mesec1}.${godina1}.`)
let dan2 = 26;
let mesec2 = 6;
let godina2 = 2015;
console.log(`Datum 2 je ${dan2}.${mesec2}.${godina2}.`)

if (godina1 < godina2) {
    console.log(`Datum 1 je raniji.`);
} else if (godina2 < godina1) {
    console.log(`Datum 2 je raniji.`);
} else if (godina1 == godina2) {
    if (mesec1 < mesec2) {
        console.log(`Datum 1 je raniji.`);
    } else if (mesec2 < mesec1) {
        console.log(`Datum 2 je raniji`);
    } else if (mesec1 == mesec2) {
        if (dan1 < dan2) {
            console.log(`Datum 1 je raniji`);
        } else if (dan2 < dan1) {
            console.log(`Datum 2 je raniji`);
        } else {
            console.log(`Datumi su isti.`);
        }
    }
}

// Za uneti broj ispitati da li je paran. 

let z = 15;
console.log(z);

if (z % 2 == 0) {
    console.log(`Broj ${z} je paran.`);
} else {
    console.log(`Broj ${z} nije paran.`);
}

// Za uneti broj ispitati da li je deljiv sa 3.

z = 21;
console.log(z);

if (z % 3 == 0) {
    console.log(`Broj ${z} je deljiv sa 3.`);
} else {
    console.log(`Broj ${z} nije deljiv sa 3.`)
}

// Za učitani broj ispitati da li je ceo.

z = 10;

if (z % 1 == 0) {
    console.log(`Broj ${z} je ceo.`)
} else {
    console.log(`Broj ${z} nije ceo broj.`)
}

// Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.


let a = 12;
let b = 16;
let c = 64;

console.log(a)
console.log(b)
console.log(c)

let najveci = a;
let najmanji = b;

if (a > b) {
    if (a > c) {
        najveci = a;
    }
} if (b > a) {
    if (b > c) {
        najveci = b;
    }
} if (c > a) {
    if (c > b) {
        najveci = c;
    }
} if (a < b) {
    if (a < c) {
        najmanji = a;
    }
} if ( b < a) {
    if ( b < c) {
        najmanji = b;
    }
} if ( c < a) {
    if ( c < b) {
        najmanji = c;
    }
}
let zbir = a+b+c;
console.log(zbir);
console.log(`Najveci broj je broj ${najveci}`);
console.log(`Najmanji broj je broj ${najmanji}`);
console.log(`Srednji broj je broj ` + (zbir - najveci - najmanji));


let n = 24;
let k = 23;

if (n > k) {
    if ( n % 2 == 0) {
        console.log(`Veci broj je ${n} i on je paran.`)
    } else {
        console.log(`Veci broj je ${n} i on nije paran.`)
    }
} else if ( k % 2 == 0) {
    console.log(`Veci broj je ${k} i on je paran.`);
} else {
    console.log(`Veci broj je ${k} i on nije paran.`)
}

/* Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.*/

let godina = 2000;
console.log(godina);

if ((godina % 4 == 0 && godina % 100 != 0) || godina % 400 == 0) {
    console.log(`Godina ${godina} je prestupna.`)
} else {
    console.log(`Godina ${godina} nije prestupna.`)
}




