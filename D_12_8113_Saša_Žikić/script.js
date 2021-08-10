/* 1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća indeks minimalnog elementa ovog niza. Ukoliko ima više jednakih minimalnih elemenata, vratiti indeks bilo kog od minimalnih elemenata. */ 

let a = [1, 5, 20, 12, 0, 0, -1];

let b = [5, -7, -9, 10, 20]

function minimalniElem(a) {
    let indeks = 0;
    let min = a[0];
    for(let i = 0; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            indeks = i;
        }
    }
    return indeks;
}

console.log(minimalniElem(b));


// 2. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.

a = [1, 5, 20, 12, 0, 0, 10]; 

b = [5, -7, -9, 10, 20];

function suma(a) {
    let suma = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 == 0) {
            suma += a[i];
        }
    }
    return suma;
}

console.log(suma(b));

/* 3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli. */

a = [1, 5, 20, 12, 0, 0, 15]; 

b = [5, -7, -9, 10, 20];

function promenaZnaka (a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] % 2 != 0 && i % 2 == 0) {
            a[i] *= -1;
        }
    }
    console.log(a);
}

promenaZnaka(a);
promenaZnaka(b);


