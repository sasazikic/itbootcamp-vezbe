let divOrder = document.querySelector(`#order`);
let formOrder = document.querySelector(`#order form`);
let inputOrder = document.querySelector(`#capacity`);

function getItems(resource, func) {
    let request = new XMLHttpRequest();
    request.addEventListener(`readystatechange`, function ()  {
        if(this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            func(data);
        }
        else if(this.readyState == 4) {
            console.log(`Could not fetch data`);
        }
    });
    request.open('GET', resource);
    request.send();
}

let click1 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    // console.log(capacity);
    let itemsNoStock = [];
    getItems('json/stock.json', data => {
        // Logika da se dohvate objekti koji nisu na stanju
        data.forEach(item => {
            if(item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        })
        // console.log(itemsNoStock)
        getItems('json/weights.json', data => {
            // Logika za tezine artikala
            let totalWeight = 0;
            data.forEach(item => {
                // Da li niz itemsNoStock sadrzi item.id
                if(itemsNoStock.includes(item.id)) {
                    totalWeight += item.weight;
                }
            })
            // console.log(totalWeight)
            if(totalWeight > capacity) {
                let pMessage = document.createElement(`p`);
                pMessage.style.fontWeight = `bold`;
                pMessage.style.fontSize = `24px`;
                pMessage.textContent = "Not enough capacity in truck!!";
                divOrder.appendChild(pMessage);
            }
            else {
                getItems('json/prices.json', data => {
                    // Logika za cene artikala
                    // console.log(data);
                    let totalPrice = 0;
                    data.forEach(item => {
                        if(itemsNoStock.includes(item.id)) {
                            totalPrice += item.price;
                        }
                    });
                    let pMessage = document.createElement(`p`);
                    pMessage.style.fontWeight = `bold`;
                    pMessage.style.fontSize = `24px`;
                    pMessage.textContent = `Total order price: ${totalPrice} RSD`;
                    divOrder.appendChild(pMessage);
                }); 
            }
        }); 
    });    
}
// Funkcija click1 je tacna, ali neprakticna
// (callback hell)
// formOrder.addEventListener(`submit`, click1);

// Promis je objekat koji "ceka" asinhroni poziv
// Zahvaljujuci njemu, postoje then() i catch() metode
function getItemsReturnPromise(resource) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.addEventListener(`readystatechange`, function ()  {
            if(this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText);
                resolve(data);
            }
            else if(this.readyState == 4) {
                reject(`Could not fetch data`);
            }
        });
        request.open('GET', resource);
        request.send();
    });
}

let click2 = event => {
    event.preventDefault();
    let capacity = inputOrder.value;
    let itemsNoStock = [];
    getItemsReturnPromise('json/stock.json')
    .then((data) => {
        data.forEach(item => {
            if(item.stock == 0) {
                itemsNoStock.push(item.id);
            }
        });
        return getItemsReturnPromise('json/weights.json')
    })
    .then(data => {
        let totalWeight = 0;
        data.forEach(item => {
            // Da li niz itemsNoStock sadrzi item.id
            if(itemsNoStock.includes(item.id)) {
                totalWeight += item.weight;
            }
        })
        // console.log(totalWeight)
        if(totalWeight > capacity) {
            let pMessage = document.createElement(`p`);
            pMessage.style.fontWeight = `bold`;
            pMessage.style.fontSize = `24px`;
            pMessage.textContent = "Not enough capacity in truck!!";
            divOrder.appendChild(pMessage);
        }
        else {
            return  getItemsReturnPromise('json/prices.json')
        }
    })
    .then(data => {
        if(data !== undefined){
            let totalPrice = 0;
            data.forEach(item => {
                if(itemsNoStock.includes(item.id)) {
                    totalPrice += item.price;
                }
            });
            // let pMessage = document.createElement(`p`);
            // pMessage.style.fontWeight = `bold`;
            // pMessage.style.fontSize = `24px`;
            // pMessage.textContent = `Total order price: ${totalPrice} RSD`;
            // divOrder.appendChild(pMessage)
            let tabela = document.createElement(`table`)
            tabela.style.border = `1px solid red`
            data.forEach(item => {
                if(itemsNoStock.includes(item.id)) {
                let red = document.createElement(`tr`);

                let tData1 = document.createElement(`td`)
                tData1.textContent = `${item.item}`
                red.appendChild(tData1);

                
                let tData2 = document.createElement(`td`);
                tData2.textContent = `${item.price}`;
                red.appendChild(tData2)

                tabela.appendChild(red)
                }
            })
            let poslednjiRed = document.createElement(`tr`);

            let tdUkupno = document.createElement(`td`)
            tdUkupno.textContent = `UKUPNO`
            poslednjiRed.appendChild(tdUkupno);

            let pMessage = document.createElement(`td`);
            pMessage.textContent = totalPrice;
            poslednjiRed.appendChild(pMessage)

            tabela.appendChild(poslednjiRed);

            divOrder.appendChild(tabela);
           
        }
    })
    .catch((error) => {
        console.log(error);
    });

}

formOrder.addEventListener(`submit`, click2);

/* BONUS VARIJANTA: Ne ispisati samo ukupnu cenu svih artikala, već tabelu sa dve kolone: U prvoj koloni je ispisan naziv artikla koji se poručuje, u sledećoj je njegova cena. U poslednjem redu tabele, u prvoj ćeliji stoji tekst “UKUPNO”, a u drugoj ćeliji ukupna cena svih artikala. */

let divRange = document.getElementById(`range`);
let rangeForm = document.querySelector(`#range form`)
let inputName = document.getElementById(`name`);
let rangeOne = document.getElementById(`rangeOne`);
let rangeTwo = document.getElementById(`rangeTwo`);




let taskTwo = event => {
    event.preventDefault();
    let itemsInStock = [];
    let tabela = document.createElement(`table`)
    let lista = document.createElement(`ul`);
    // Odrediti sve proizvode koji su na stanju.
    // Naći takve proizvode koji u nazivu sadrže reč koju je korisnik uneo.
    getItemsReturnPromise("json/stock.json")
    .then((data) => {
        data.forEach(item => {
            if(item.stock > 0) {
                if(item.item.includes(inputName.value)) {
                    itemsInStock.push(item);
                }
            }
        })
        return getItemsReturnPromise("json/prices.json");
    })  // Kao i one čija je cena između dve vrednosti zadate u dva numerička inputa.
        // Korisniku prikazati u listi nazive tih artikala.
        /* BONUS VARIJANTA: Ne ispisati samo nazive artikala, već ispis izvršiti u tabeli sa tri kolone: U prvoj koloni staviti naziv artikla, u drugoj stanje u magacinu, u trećoj cenu artikla. */
    .then((data) => {
        data.forEach(item => {
           itemsInStock.forEach(elem => {
               if( (item.id == elem.id) && (item.price > rangeOne.value && item.price < rangeTwo.value ) ) {
                    let li = document.createElement(`li`);
                    li.textContent = `${elem.item}`;
                    lista.appendChild(li)

                    let tableRow = document.createElement(`tr`)
                    tabela.appendChild(tableRow)

                    let tableDataName = document.createElement(`td`)
                    tableDataName.textContent = elem.item;
                    tableDataName.style.border = `1px solid blue`
                    tableRow.appendChild(tableDataName)

                    let tableDataStock = document.createElement(`td`)
                    tableDataStock.textContent = elem.stock;
                    tableDataStock.style.border = `1px solid blue`
                    tableRow.appendChild(tableDataStock)

                    let tableDataPrice = document.createElement(`td`)
                    tableDataPrice.textContent = item.price;
                    tableDataPrice.style.border = `1px solid blue`
                    tableRow.appendChild(tableDataPrice)
                    
                }            
           })
        })
        divRange.appendChild(lista);
        divRange.appendChild(tabela)
    })
    .catch((error) => {
        console.log(error);
    });
}

rangeForm.addEventListener(`submit`, taskTwo);








