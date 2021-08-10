
/* U klasi Pacijent, dodati odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550. */

class Pacijent {
    constructor(i, v, t) {
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }

    // SETERI \\
    set ime(value) {
        this._ime = value;
    }
    set visina(value) { 
        if(value > 0 && value < 250) {
            this._visina = value;
        }
        else {
            this._visina = 0;
        }
    }
    set tezina(value) {
        if(value > 0 && value < 550) {
            this._tezina = value;
        }
        else {
            this._tezina = 0;
        }
    }

    // GETERI \\
    get ime() {
        return this._ime;
    }

    get visina() {
        return this._visina;
    }
    get tezina() {
        return this._tezina;
    }


    ispisi() {
        console.log(this.ime, this.visina, this.tezina)
    }

    // Bmi(), koja vraća bmi vrednost pacijenta

    bmi() {
        let bmi = this.tezina / ((this._visina/100) * (this.visina/100))
        return bmi;
    }

    /* Kritican(), koja vraća true ukoliko je bmi pacijenta manji od 15 ili veći od 40, a u suprotnom vraća false. */

    kritican() {
        if(this.bmi() < 15 || this.bmi() > 40 ) {
            return true;
        }
        else {
            return false;
        }
    }
}

/* U klasi Pacijent, dodati odgovarajuće getere i setere, s tim što je potrebno da se u odgovarajućim seterima proveri da li je visina između 0 i 250, a težina između 0 i 550. */
// constructor(i, v, t)

let pacijent1 = new Pacijent("Marko", 220, 540);
let pacijent2 = new Pacijent("Petar", 150, 180);
let pacijent3 = new Pacijent("Zeljko", 240, 220);

pacijent1.ispisi();
pacijent2.ispisi();
pacijent3.ispisi();

console.log(pacijent1.bmi())
console.log(pacijent2.bmi())
console.log(pacijent3.bmi())

console.log(pacijent1.kritican())
console.log(pacijent2.kritican())
console.log(pacijent3.kritican())

let pacijenti = [pacijent1, pacijent2, pacijent3]

/* Kreirati niz od barem tri pacijenta.
Ispisati podatke o pacijentu sa najmanjom težinom.
Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
Ispisati sve pacijente čije ime sadrži slovo A.
Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata. */

//Ispisati podatke o pacijentu sa najmanjom težinom.
let min = pacijenti[0].tezina
let najlaksi = pacijenti[0]

for(let i = 0; i < pacijenti.length; i++) {
    if(pacijenti[i].tezina < min) {
        min = pacijenti[i].tezina;
        najlaksi = pacijenti[i];
    }
}
najlaksi.ispisi()

// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let maxBMI = pacijenti[0].bmi();
console.log(maxBMI)
let pacBMI = pacijenti[0]
for(let i = 0; i < pacijenti.length; i++){
    if(maxBMI < pacijenti[i]) {
        pacijenti[i] = maxBMI;
        pacBMI = pacijenti[i]
    }
}
pacBMI.ispisi();

// Ispisati sve pacijente čije ime sadrži slovo A.
console.log(`razmak`)
pacijenti.forEach(p => {
    if(p.ime.includes("a")) {
        p.ispisi()          
    }
})

/* Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.*/
srednjaVisina = niz => {
    let suma = 0;
    niz.forEach(elem => {
        suma += elem.visina;
    })
    return suma/niz.length;
}

console.log(srednjaVisina(pacijenti))


