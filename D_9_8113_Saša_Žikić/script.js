console.log("Zdravo svete")

/* 1. 
Za uneti ceo broj odrediti koliko ima delioca koji su deljivi brojem 3 i neparni su.
Npr. za broj 15, delioci su 1, 3, 5 i 15, što znači da ima 2 delioca koji su deljivi brojem 3 i neparni su (to su brojevi 3 i 15)
Npr. za broj 6, delioci su 1, 2, 3, 6, što znači da ima 2 delioca koji su deljivi brojem 3 (3 i 6), ali samo jedan od njih je neparan (broj 3), te je rešenje ovog primera 1. */

let n = 24;

let z = 1;

let brojNeparnihDelioca =  0;

while ( z <= n ) {
    if (n % z == 0 && z % 3 == 0 && z % 2 != 0) {
        brojNeparnihDelioca += 1;
    }
    z += 1;
}
console.log(brojNeparnihDelioca);