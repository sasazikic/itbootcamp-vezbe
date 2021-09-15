let prva = document.getElementById(`prvaRec`);
let druga = document.getElementById(`drugaRec`);
let text = document.getElementById(`text`)


let dugme = document.getElementById(`dugme`)

dugme.addEventListener("click", () => {
    let jedan = prvaRec.value;
    let dva = drugaRec.value;
    function rima (prvaRec, drugaRec) {
        
        let first = "";
        let second = "";
        for(let i = prvaRec.length - 2; i < prvaRec.length; i++) {
            first += prvaRec[i]
        }
        for(let i = drugaRec.length - 2; i < drugaRec.length; i++) {
            second += drugaRec[i]
        }
    
        if(prvaRec[0] != drugaRec[0]) {
            if(first === second) {
                let paragraf = document.createElement(`p`)
                paragraf.textContent = `Rimuju se`;
                text.appendChild(paragraf)
                console.log(`rimuju se`)
            }
            else {
                let paragraf = document.createElement(`p`)
                paragraf.textContent = `Ne rimuju se`;
                text.appendChild(paragraf)
                console.log(`Ne rimuju se`)
            }
        }
        else {
            let paragraf = document.createElement(`p`)
            paragraf.textContent = `Ne rimuju se`;
            text.appendChild(paragraf)
            console.log(`Ne rimuju se`)
        }
    }

    rima(jedan, dva)
    
})











