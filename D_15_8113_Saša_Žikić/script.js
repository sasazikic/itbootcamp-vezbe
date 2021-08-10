/* Formirati niz objekata knjiga, pri čemu svaki objekat sadrži:
Naziv knige,
Autora knjige,
Putanja do sličice,
Polje – indikator da li je knjiga pročitana ili ne (true ili false).
 */



let knjiga1 = {
    naziv: "Harry Potter",
    autor: "J.K. Rowling",
    url: "hp.jpg",
    procitana: true
};

let knjiga2 = {
    naziv: "Hunger Games",
    autor: "Suzanne Collins",
    url: "hg.jpg",
    procitana: true
};

let knjiga3 = {
    naziv: "Divergent",
    autor: "Veronica Roth",
    url: "dg.jpg",
    procitana: false
};


let knjige = [knjiga1, knjiga2, knjiga3];

console.log(knjige);


let body = document.getElementsByTagName(`body`)[0];
let tabela = document.createElement(`table`);
body.appendChild(tabela);


/*Formirati tabelu koja ima dve kolone i onoliko redova koliko ima niz knjiga.
* U prvoj koloni je potrebno staviti sličicu knjige, a u drugoj koloni u paragrafu naziv knjige i autora.
* Ukoliko je knjiga pročitana, boja teksta u tom redu treba da bude plava, a ako nije, boja teksta treba da bude siva.
* Vrste tabele treba da budu naizmenično obojene u dve pozadinske boje.
 */



knjige.forEach((elem, index) => {
    let redovi = document.createElement(`tr`);                              // Pravljenje tr taga
    if(index % 2 == 0) {                                                    // Bojenje pozadine naizmenicno
        redovi.style.backgroundColor = `red`;
    } else {
        redovi.style.backgroundColor = `yellow`;
    }
    tabela.appendChild(redovi);                                             // Ubacivanje tr taga u table
    let tbldata1 = document.createElement(`td`);                            // Pravljenje td taga
    let slika = document.createElement(`img`);                              // Pravljenje img taga
    slika.src = `${elem.url}`;                                              // Definisanje src za svaku sliku
    slika.setAttribute(`style`, `width: 150px; height: 150px;`)             // Postavljanje width i height za svaku sliku
    tbldata1.appendChild(slika);                                            // Ubacivanje slika u td tagove

    let tbldata2 = document.createElement(`td`);                            // Pravljenje druge kolone odnosno drugog tg taga za svaki red
    let paragraf = document.createElement(`p`);                             // Pravljenje p taga
    if(elem.procitana) {
        paragraf.style.color = `blue`;
    } else {
        paragraf.style.color = `grey`;
    }                            
    let pText = document.createTextNode(`${elem.naziv} ${elem.autor}`);     // Pravljenje teksta za svaki p tag
    paragraf.appendChild(pText);                                            // Ubacivanje teksta u svaki p tag
    tbldata2.appendChild(paragraf);                                         // Ubacivanje p taga u svaki drugi td tag

    redovi.appendChild(tbldata1);                                           // Ubacivanje td taga u tr
    redovi.appendChild(tbldata2);                                           // ------ || ------
}); 
















