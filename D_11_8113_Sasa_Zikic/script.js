/*
1.Zadatak
Napisati funkciju suma kojoj se prosleđuju parametri n i m, dok funkcija vraća sumu kubova brojeva od n do m.
Pozvati funkciju i njen rezultat ispisati u konzoli. */


function suma(n, m) {
    let sumaKubova = 0;
    while (n <= m) {
        sumaKubova += n * n * n;
        n++;
    }
    return sumaKubova;
}

console.log(suma(2, 5));


/* 2.Zadatak
Napisati funkciju godine kojoj se prosleđuje parametar godRodjenja.
Parametar godRodjenja predstavlja godinu rođenja neka osobe. Funkcija treba da vrati koliko godina ima ta (prosleđena) osoba. 
Broj godina osobe izračunati na osnovu prosleđene godine rođenja i trenutne godine koju preuzimate sa računara. 
Pozvati funkciju i dobijeni rezultat ispisati u konzoli. */




function godina(godRodjenja) {
    let brojGodina = 0;
    let date = new Date();
    let year = date.getFullYear();
    brojGodina += year - godRodjenja;
    return brojGodina;
}


console.log(godina(2004));

/* 3.Zadatak
Napisati funkciju deljiv kojoj se prosleđuju tri parametra n, m i k. Funkcija na ekranu treba da ispiše broj brojeva od n do m koji su deljivi brojem k. Pozvati funkciju.*/ 



function deljiv(n, m, k) {
    let brojBrojeva = 0;
    while (n <= m) {
        if (n % k == 0){
            brojBrojeva += 1;
        }
        n++;
    }
    document.body.innerHTML += `<p>${brojBrojeva}</p>`
}

console.log(deljiv(2, 40, 4));
