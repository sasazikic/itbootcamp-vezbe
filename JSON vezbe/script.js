let request = new XMLHttpRequest();
request.addEventListener(`readystatechange`, () => {
    if(request.readyState === 4 && request.status === 200) {
        let data = JSON.parse(request.responseText);
        data.forEach(user => {
            if(user.website.includes(`.com`)) {
                console.log(user.name);
            }
        });
    }
    else if (request.readyState === 4) {
        console.log(`Server nije u stanju da obradi zahtev`);
    }
});
request.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
request.send();


// 3. Ispisati korisnike čije ime sadrži reč „Clementin“.
let zadatak3 = new XMLHttpRequest();
zadatak3.addEventListener(`readystatechange`, () => {
    if(zadatak3.readyState === 4 && zadatak3.status === 200) {
        let data = JSON.parse(zadatak3.responseText);
        data.forEach(user => {
            if(user.name.includes(`Clementin`)) {
                console.log(user.name);
            }
        });
    }
    else if (zadatak3.readyState === 4) {
        console.log(`Server nije u stanju da obradi zahtev`);
    }
})

zadatak3.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zadatak3.send();

// 4. Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 

let zadatak4 = new XMLHttpRequest();

zadatak4.addEventListener(`readystatechange`, () => {
    if(zadatak4.readyState === 4 && zadatak4.status === 200) {
        let data = JSON.parse(zadatak4.responseText);
        data.forEach(user => {
            if(user.company.name.includes(`Group`) || user.company.name.includes(`LLC`)) {
                console.log(user.name);
            }
        });
    }
    else if (zadatak4.readyState === 4) {
        console.log(`Server nije u stanju da obradi zahtev`);
    }
});

zadatak4.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zadatak4.send();


// 5. Ispisati sve različite gradove u kojima rade ovi korisnici.

let zadatak5 = new XMLHttpRequest();
zadatak5.addEventListener(`readystatechange`, () => {
    let sss = [];
    if(zadatak5.readyState === 4 && zadatak5.status === 200) {
        let data = JSON.parse(zadatak5.responseText);
        data.forEach(user => {
            if(sss.includes(user.address.city)){

            } 
            else {
                sss.push(user.address.city)
            }
        })
        sss.forEach(grad => {
            console.log(grad)
        })
    }
    else if (zadatak5.readyState === 4) {
        console.log(`Server nije u stanju da obradi zahtev`);
    }
});

zadatak5.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zadatak5.send();

// Znam da ce u slucaju da korisnici rade u istim gradovima ispisati isti grad vise puta ali nisam bas uspeo da postavim zadatak tako da ne ispisuje ponovo ukoliko je vec ispisan.

// 6. Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.

let zadatak6 = new XMLHttpRequest();
zadatak6.addEventListener(`readystatechange`, () => {
    let brojac = 0;
    if(zadatak6.readyState === 4 && zadatak6.status === 200) {
        let data = JSON.parse(zadatak6.responseText);
        data.forEach(user => {
            if(user.address.geo.lat < 0 && user.address.geo.lng < 0) {
                brojac++;
            }
        })
        console.log(`Broj ljudi cije su obe vrednosti gd i gs negativne je ${brojac}`)
    }
    else if (zadatak6.readyState === 4) {
        console.log(`Server nije u stanju da obradi zahtev`);
    }
})

zadatak6.open(`GET`, `https://jsonplaceholder.typicode.com/users`);
zadatak6.send();




