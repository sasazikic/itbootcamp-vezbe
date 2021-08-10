console.log("Zdravo svete");

/* 1. zadatak. Da bi gosti kafića mogli na distanci da sede tokom pandemije, ministarstvo je uvelo meru da za svakog čoveka mora biti obezbeđeno 3m2  površine lokala. Za posmatrani kafić su dati podaci da ima v m2 i da je u njemu trenutno n gostiju. Brojeve vi n određujete sami. 
Vaš zadatak je da na ekranu ispišete DA zelenom bojom ukoliko se kafić prema unetim podacima pridržava propisane mere ili NE crvenom bojom ukoliko se kafić ne pridržava propisane mere. 
Ukoliko je ispis NE, crvenom bojom ispisati i koliko ljudi je potrebno da napusti lokal da bi mera bila zadovoljena. 
 */

let v = 250;  //kvadratura lokala
let n = 100;  //broj ljudi u kaficu

let da = "DA";
let ne = "NE";

let dozvoljenBroj = v / 3; //dozvoljen broj ljudi ali decimalan broj
let dozvoljenBrojLjudi = Math.floor(dozvoljenBroj) // dozvoljen broj ljudi ceo broj

let visakLjudi = n - dozvoljenBrojLjudi // ukoliko bude visak ljudi primenjivace se ovo

console.log(dozvoljenBrojLjudi)

if ( dozvoljenBrojLjudi >= n) {
    document.body.innerHTML = `<span>${da}</span>`
} else {
    document.body.innerHTML = `<p>${ne}, </p>`
    document.body.innerHTML += `<p>${visakLjudi} osoba mora napustiti kafic.</p>`
}

/* 2. zadatak  Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.*/

let godinaRodjenja = 1998;

let datum = new Date ();
let godina = datum.getFullYear();
console.log(godina);

let uzrast = godina - godinaRodjenja;
console.log(uzrast); 

if(uzrast >= 18) {
    console.log("Punoletan")
} else {
    console.log("Maloletan")
}


