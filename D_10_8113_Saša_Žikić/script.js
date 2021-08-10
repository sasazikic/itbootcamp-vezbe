console.log(`Zdravo svete`);

let i = 1;

let brSpan = 64;


for (i = 1; i <= brSpan; i++) {
    if ( i % 8 != 0){
        document.body.innerHTML += `<span>${i}</span>`;
    }
    else if ( i % 8 == 0) {
    document.body.innerHTML += `<span>${i}</span><br>`;
    }   
}

/*Zadatak - Petlje

A. Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.
B. Odrediti proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3, a potom od njega oduzeti zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7:
    a) Koristeći while petlju
    b) Kotisteći for petlju

C. Odrediti sumu kubova neparnih brojeva od n do m:
    a) Koristeći while petlju
    b) Koristeći for petlju
 */

// A Odrediti zbir cifara unetog celog broja i dobijeni zbir ispisati na ekranu.


let n = 45200;
i = n;
console.log(n);

let sumaCifaraBroja = 0;

while (i) {
    sumaCifaraBroja += i % 10;
    i = Math.floor(i / 10);
}

console.log(`Suma cifara broja ${n} je ` + sumaCifaraBroja);



// B

// B. a.
i = 1;
n = 2;
m = 28;
proizvod = 1;
zbir = 0;

for ( i = n; i <= m; i++) {
    if ( i % 7 == 0 && i % 3 != 0) {
        proizvod *= i;
    }
    else if ( i % 3 == 0 && i % 7 != 0) {
        zbir += i;
    }
}
console.log(`Razlika proizvoda ${proizvod} i zbira ${zbir} je ` + (proizvod - zbir));

// B. b.

i = 2;
n = 2;
m = 28;
proizvod = 1;
zbir = 0;

while ( i <= m) {
    if ( i % 7 == 0 && i % 3 != 0) {
        proizvod *= i;
    }
    else if ( i % 3 == 0 && i % 7 != 0) {
        zbir += i;
    }
    i++;
}
console.log(`Razlika proizvoda ${proizvod} i zbira ${zbir} je ` + (proizvod - zbir));


/* C. Odrediti sumu kubova neparnih brojeva od n do m:
    a) Koristeći while petlju
    b) Koristeći for petlju */

// C. b. FOR
i = 1;
n = 2;
m = 10;

let sumaKubova = 0;

for ( i = n; i <= m; i++) {
    if ( i % 2 != 0) {
        sumaKubova += i * i * i
    }
}
console.log(sumaKubova);
/*_______________________________________________________________*/

// C.a.  WHILE

i = 1;
n = 2;
m = 10;
sumaKubova = 0;

while ( n <= m) {
    if ( n % 2 != 0) {
        sumaKubova += n**3;
    }
    n++;
}

console.log(sumaKubova);

let c = 3;
let e = c**c;

console.log(e);


/* 1.Za uneto početno i krajnje radno vreme dva lekara, ispitati koliko sati i minuta se njihove smene preklapaju.

Ulaz (vrednosti koje samostalno dodeljujete promenljivama) : 
    Početak radnog vremena u satima i minutima za prvog lekara (pocSatLek1 i pocMinLek1)
    Kraj radnog vremena u satima i minutima za prvog lekara (krajSatLek1 i krajMinLek1)
    Počezak radnog vremena u satima i minutima za drugog lekara (pocSatLek2 i pocMinLek2)
    Kraj radnog vremena u satima i minutima za drugog lekara (krajSatLek1 i krajMinLek1)

Izlaz (vrednosti koje treba ispisati na ekranu i proizvoljno ih stilizovati) :
    Početak radnog vremena prvog lekara (izraženo u satima i minutima)
    Kraj radnog vremena prvog lekara (izraženo u satima i minutima)
    Početak radnog vremena drugog lekara (izraženo u satima i minutima)
    Kraj radnog vremena drugog lekara (izraženo u satima i minutima)
    Vreme koje su prvi lekar i drugi lekar zajedno proveli na poslu (izraženo u satima i minutima). Ukoliko nema preklapanja u radnim vremenima ova dva lekara, na ekranu ispisati da nema preklapanja.
 */ 

let pocSatLek1 = 10;
let pocMinLek1 = 00;
//////////////////////////////////
let krajSatLek1 = 13;
let krajMinLek1 = 00;

let pocSatLek2 = 11;
let pocMinLek2 = 00;
/////////////////////////////////
let krajSatLek2 = 14;
let krajMinLek2 = 00;

document.body.innerHTML += `<p>Radno vreme prvog lekara pocinje u ${pocSatLek1} casova i ${pocMinLek1} minuta.</p>`;
document.body.innerHTML += `<p>Kraj radnog vremena prvog lekara je u ${krajSatLek1} casova i ${krajMinLek1} minuta.</p>`;

document.body.innerHTML += `<p>Pocetak radnog vremena drugog lekara je u ${pocSatLek2} casova i ${pocMinLek2} minuta.</p>`;
document.body.innerHTML += `<p>Kraj radnog vremena drugog lekara je u ${krajSatLek2} casova i ${krajMinLek2} minuta.</p>`;
/*
if (pocSatLek2 < krajSatLek1) { //Ako lekar 1 krece prvi da radi i vreme im se preklapa
    if (krajSatLek2 < krajSatLek1) {
        if (pocMinLek2 > krajMinLek2) {
            document.body.innerHTML += `<p>Vreme preklapanja radnog vremena je ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2))/60)} sata i ${((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2)) % 60} minuta.</p>`;
        } else {
            document.body.innerHTML += `<p>Vreme preklapanja radnog vremena je ${krajSatLek2 - pocSatLek2} sata i ${krajMinLek2 - pocMinLek2} minuta.</p>`;
        }
    }
    else if (krajMinLek1 >= pocMinLek2) { 
        document.body.innerHTML += `<p>Vreme preklapanja radnog vremena je ${krajSatLek1 - pocSatLek2} casova i ${krajMinLek1 - pocMinLek2} minutaa.</p>`;
    }
    else {
        document.body.innerHTML += `<p>Vreme preklapanja radnog vremena je ${Math.floor(((krajSatLek1 - pocSatLek2)*60 - (pocMinLek2 -krajMinLek1))/60)} sat i ${((krajSatLek1 - pocSatLek2)*60 - (pocMinLek2 -krajMinLek1)) % 60} minutaa.`;
    }
}
else if (pocSatLek2 == krajSatLek1) { 
    if (pocMinLek2 > krajMinLek1) {
        document.body.innerHTML += `<p>Nema preklapanja</p>`;
    }
    else if (pocMinLek2 == krajMinLek1) {
        document.body.innerHTML += `<p>Susretnu se</p>`;
    }
    else {
        document.body.innerHTML += `<p>Vreme preklapanja radnog vremena je 0 casova i  ${krajMinLek1 - pocMinLek2} minuta.</p>`;
    }
} 
else {
    document.body.innerHTML += `<p>Nema ni malo preklapanja.</p>`;
} */
// k1 - (krajSatLek1 * 60 + krajMinLek1)

// k2 - (krajSatLek2 * 60 + krajMinLek2)

// p1 - (pocSatLek1 * 60 + pocMinLek1)

// p2 - (pocSatLek2 * 60 + pocMinLek2)

// Posle jako puno pokusaja ja ovo ne umem da uradim. Probacu ponovo sutra ponovo ali ovo vec par sata ne ide...
if ((krajSatLek1 * 60 + krajMinLek1) >= (pocSatLek2*60 + pocMinLek2) && (krajSatLek1 * 60 + krajMinLek1) <= (krajSatLek2 * 60 + krajMinLek2)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1*60 + pocMinLek1))/60)} sata i ${((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1*60 + pocMinLek1))%60} minuta. 1</p>`;
}
else if ((pocSatLek1 * 60 + pocMinLek1) >= (pocSatLek2 * 60 + pocMinLek2) && (pocSatLek1 * 60 + pocMinLek1) <= (krajSatLek2 * 60 + krajMinLek2)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek1 * 60 + pocMinLek1))/60)} sata i ${((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek1 * 60 + pocMinLek1))%60} minuta. 2</p>`;
}
else if ((pocSatLek1 * 60 + pocMinLek1) >= (pocSatLek2 * 60 + pocMinLek2) && (krajSatLek1 * 60 + krajMinLek1) <= (krajSatLek2 * 60 + krajMinLek2)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1 * 60 + pocMinLek1))/60)} sata i ${((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek1 * 60 + pocMinLek1))%60} minuta. 3</p>`;
}
else if ((krajSatLek1*60 + krajMinLek1) <= (krajSatLek2 * 60 + krajMinLek2) && (pocSatLek2 * 60 + pocMinLek2) <= (krajSatLek1 * 60 + krajMinLek1)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2))/60)} sata i ${((krajSatLek1 * 60 + krajMinLek1) - (pocSatLek2 * 60 + pocMinLek2))%60} minuta. 4</p>`;
} 
else if ( (pocSatLek1* 60 + pocMinLek1) <= (pocSatLek2 * 60 + pocMinLek2) &&  (krajSatLek2*60 + krajMinLek2) <= (krajSatLek1 * 60 + krajMinLek1)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2))/60)} sata i ${((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2))%60} minuta. 5</p>`
}  
else if ((pocSatLek2*60 + pocMinLek2) >= (pocSatLek1 * 60 + pocMinLek1) && (krajSatLek2 * 60 + krajMinLek2) <= (krajSatLek1 * 60 + krajMinLek1)) {
    document.body.innerHTML += `<p>Vreme preklapanja je ${Math.floor(((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2))/60)} sata i ${((krajSatLek2 * 60 + krajMinLek2) - (pocSatLek2 * 60 + pocMinLek2))%60} minuta. 6</p>`
}
else {
    document.body.innerHTML += `<p>Nema preklapanja</p>`
}

// SWITCH 

let boja = "zuta";

switch (boja) {
    case "crvena":
        console.log(`Izabrali ste crvenu boju`);
        break;
    case "zelena":
        console.log(`Izabrali ste zelenu boju`);
        break;
    case "zuta":
        console.log(`Izabrali ste zutu boju`);
        break;
    default:
        console.log(`Niste izabrali nijednu od ponudjenih boja`)
}

// Prethodni zadatak samo sa IF-om, a ne SWITCH-om
let color = "white";

if (color == "blue") {
    console.log(`You picked blue color`);
} else if (color == "red") {
    console.log(`You picked red color`);
} else if (color == "green") {
    console.log(`You picked green color`);
} else if (color == "yellow") {
    console.log(`You picked yellow color`);
} else {
    console.log(`You didn't pick any of the recommended color`);
}

// 1. Za uneti redni broj ispisati koji je to dan u nedelji, 1. dan je ponedljak.

let redniBroj = 0;

switch (redniBroj) {
    case 1:
        console.log(`Danas je ponedaljak`);
        break;
    case 2:
        console.log(`Danas je utorak`);
        break;
    case 3:
        console.log(`Danas je sreda`);
        break;
    case 4:
        console.log(`Danas je cetvrtak`);
        break;
    case 5:
        console.log(`Danas je petak`);
        break;
    case 6:
        console.log(`Danas je subota`);
        break;
    case 0:
        console.log(`Danas je nedelja`);
        break;
    default:
        console.log(`Pogresno unet datum`);   
}

// 2. Za unetu ocenu učenika (ceo broj od 1 do 5) ispisati njegov uspeh te školske godine (nedovoljan, …, odličan).

let ocena = 5;

switch(ocena) {
    case 1:
        console.log(`Nedovoljan`);
        break;
    case 2:
        console.log(`Dovoljan`);
        break;
    case 3:
        console.log(`Dobar`);
        break;
    case 4:
        console.log(`Vrlo dobar`);
        break;
    case 5:
        console.log(`Odlican`);
        break;
    default: 
        console.log(`Pogresno uneta ocena`);
}

// 3. Za uneti paran broj manji od 10 ispitati da li je uneti broj nula, dvojka, četvorka, šestica, osmica ili je unos pogrešan.

n = 8;
switch(n) {
    case 0:
        console.log(`Unet je broj 0`);
        break;
    case 2:
        console.log(`Unet je broj 2`);
        break;
    case 4:
        console.log(`Unet je broj 4`);
        break;
    case 6:
        console.log(`Unet je broj 6`);
        break;
    case 8:
        console.log(`Unet je broj 8`);
        break;
    default:
        console.log(`Pogresan unos`)
}

// 4. Za uneta dva broja i karakter napraviti kalkulator koji vrši množenje ta dva broja ukoliko je uneto slovo ’m’, deljenje ukoliko je uneto slovo ’d’, sabiranje ukoliko je uneto slovo ’s’ ili oduzimanje ukoliko je uneto slovo ’o’.

let broj1 = 50;
let broj2 = 0;
let slovo = "d";

console.log(broj1);
console.log(broj2);
console.log(slovo);

switch (slovo) {
    case "m":
        console.log(broj1 * broj2);
        break;
    case "d":
        if (broj2 == 0) {
            console.log(`Pogresan unos brojeva`)
            break;
        } else { 
        console.log(broj1 / broj2);
        break;
        }
    case "s":
        console.log(broj1 + broj2);
        break;
    case "o":
        console.log(broj1 - broj2);
        break;
    default:
        console.log(`Pogresan unos brojeva.`)
}

// 5. Za preuzeti dan sa računara ispisati još koliko dana je preostalo do vikenda.

let datum = new Date();
let danas = datum.getDay();
console.log(danas);

switch(danas){
    case 0:
        console.log(`0 dana je preostalo do vikenda`);
        break;
    case 1:
        console.log(`5 dana je preostalo do vikenda`);
        break;
    case 2: 
        console.log(`4 dana je preostalo do vikenda`);
        break;
    case 3: 
        console.log(`3 dana je preostalo do vikenda`);
        break;
    case 4:
        console.log(`2 dana je preostalo do vikenda`);
        break;
    case 5:
        console.log(`1 dan je preostao do vikenda`);
        break;
    case 6:
        console.log(`0 dana je preostalo do vikenda`);
        break;
    default:
        console.log(`Pogresno unet dan`);
}
// 6. Preuzeti redni broj meseca sa računara i ispisati koji je to mesec u godini.
let mesec = datum.getMonth();
console.log(mesec);
console.log(datum);

switch(mesec) {
    case 0:
        console.log(`Januar`);
        break;
    case 1:
        console.log(`Februar`);
        break;
    case 2:
        console.log(`Mart`);
        break;
    case 3:
        console.log(`April`);
        break;
    case 4:
        console.log(`Maj`);
        break;
    case 5:
        console.log(`Jun`);
        break;
    case 6:
        console.log(`Jul`);
        break;
    case 7:
        console.log(`Avgust`);
        break;
    case 8 :
        console.log(`Septembar`);
        break;
    case 9:
        console.log(`Oktobar`);
        break;
    case 10:
        console.log(`Novembar`);
        break;
    case 11:
        console.log(`Decembar`);
        break;
    default:
        console.log(`Pogresno unet mesec.`)
}

/* 7. Preuzeti redni broj meseca sa računara i ispisati koliko taj mesec ima dana. 
Ukoliko je u pitanju mesec februar, preuzeti i godinu sa računara, ispitati da li je godina prestupna i na osnovu toga ispisati broj dana meseca februara. */

/* Ovaj zadatak ne umem da uradim, ovo sam na netu nasao pa mi ni ovo nije jasno kako  i zasto je ovo uradilo */



let date = new Date();
let month = date.getMonth() + 1;
let year = date.getFullYear;


switch (month) {
    case 1:
    case 3:
    case 5: 
    case 7:
    case 8:
    case 10:
    case 12:
        console.log(`Mesec ima 31 dan.`);
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log(`Mesec ima 30 dana.`);
        break;
    case 2:
        switch((year % 4 == 0 && year % 100 !=0)|| year % 400 == 0) {
            case true:
                console.log(`Mesec ima 29 dana.`);
                break;
            default:
                console.log(`Mesec ima 28 dana`);
        }
        break;
}

/* Na osnovu unete boje na engleskom jeziku obojiti tekst paragrafa u crveno, zeleno ili plavo. Ukoliko nije uneta ni jedna od ove tri boje, tekst paragrafa obojiti u žuto.*/


boja = "plava";
console.log(boja);


switch (boja) {
    case "crvena":
        document.getElementById("obojiti").style.color = "red";
        break;
    case "zelena":
        document.getElementById("obojiti").style.color = "green";
        break;
    case "plava":
        document.getElementById("obojiti").style.color = "blue";
        break;
    default:
        document.getElementById("obojiti").style.color = "yellow";
}


