console.log(`Zdravo svete.`)

let i = 1;
let n = 40;
let tabela = "<table>";

while (i <= n) {
    if (i % 2 != 0) {
        tabela += 
        `
        <tr>
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
        `;
    } else if (i % 2 == 0) {
        tabela += 
        `
        <tr class="obojen">
        <td>Tekst</td>
        <td>Tekst</td>
        </tr>
        `;
    }
    i++;
}
tabela += "</table>"

document.body.innerHTML += tabela


i = 1;
let lista = "<ul>"
let duzinaListe = 10;

for (i = 1; i <= duzinaListe; i++) {
    lista += `<li>Element ${i}`
    if (i % 3 == 2) {
        i++;
        lista += 
        `
        <ul>
            <li class="ljubicasti"> Element ${i} </li>
        </ul>
        `
    }
    
    lista += `</li>`
}
lista += "</ul>"
document.body.innerHTML += lista;

/*

<ul>

<li>ELement (i) </li>
<li> ELement (i) 
    <ul>
        <li>Element (i) 

*/

i = 1;

let span = ``;
let brojSpanova = 64;

for (i = 1; i <= brojSpanova; i++) {
    if (i % 8 != 0 ) {  
    span += `<span>${i}</span>`;
    }    
    
    if ( i % 8 == 0) {
        span += `<span>${i}</span><br>`;
    }
}

document.body.innerHTML += span;

let paragraf = document.getElementById("prvi");

paragraf.innerHTML += " wtf " + paragraf.innerHTML