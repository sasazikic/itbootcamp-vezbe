let dan = {
    datum: `2021.05.19.`,
    kisa: true,
    sunce: false,
    oblacno: false,
    temperatura: [7, 10, 13, 16, 19, -26, 7, 24, 17, 15, 10, 24],
    max: function() {
        let najveci = this.temperatura[0];
        this.temperatura.forEach(elem => {
            if(elem > najveci) {
                najveci = elem;
            }
        });
        return najveci;
    },
    min: function() {
        let najmanji = this.temperatura[0];
        this.temperatura.forEach(elem => {
            if(elem < najmanji) {
                najmanji = elem;
            }
        });
        return najmanji;
    },
    lista: function() {
        let max = this.max();
        let min = this.min();
        let list = `<ul>`;
        this.temperatura.forEach(elem => {
            if(elem == max){
                list += `<li style="color:red">${elem}</li>`;
            }
            else if (elem == min) {
                list += `<li style="color:blue">${elem}</li>`
            }
            else {
                list += `<li>${elem}</li>`
            }
        });
        list += `</ul>`;
        return list;
    },
    kisaHladno: function () {
        let kHladno = false;
        for(let i = 0; i < this.temperatura.length; i++) {
            if(this.kisa && this.temperatura[i] < -5) {
                kHladno = true;
                break;
            }
        }
        return kHladno;
    },
    oblacnoToplo: function() {
        let oToplo = false;
        for(let i = 0; i < this.temperatura.length; i++) {
            if(this.oblacno  && this.temperatura[i] > 25) {
                oToplo = true;
                break;
            }
        }
        return oToplo;
    },
    neuobicajen: function() {
        if(this.kisa && this.oblacno && this.sunce) {
            return true;
        } 
        else if (this.kisaHladno() || this.oblacnoToplo()) {    // ovo oblcnoToplo mi je promenilo u tamno zelenu boju i ne znam o cemu se radi
            return true;
        }
        else { 
            return false;   
        }
    }
};
console.log(`Oblacno toplo`);
console.log(dan.oblacnoToplo());
console.log(`Kisa hladno`);
console.log(dan.kisaHladno());
console.log(`Neuobicajen dan?`)
console.log(dan.neuobicajen());


/* Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Napisati metod koji vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false. */

/* Napisati metod koji na ekranu ispisuje neuređenu listu, čija je sadržina (čiji su elementi/buleti) vrednosti temperature iz datog niza temperatura. 
Maksimalnu (ili maksimalne ukoliko ih je više) vrednost u neurešenoj listi obojiti crvenom bojom. 
Minimalnu (ili minimalne vrednosti ukoliko ih je više) obojiti plavom bojom.  */

console.log(dan.max());
console.log(dan.min());

document.body.innerHTML += dan.lista()



