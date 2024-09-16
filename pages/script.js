const contenitore=document.getElementById("contenitore");
const tabella= document.createElement("table");
tabella.classList.add("tabella");

function creaT(){
    //righe e colonne
    for(let i=0;i<6;i++){
        const tr= document.createElement("tr");

        for(let i=0;i<6;i++){
            const td=document.createElement("td");
            tr.appendChild(td);
        }
        tabella.appendChild(tr);
    }
    contenitore.appendChild(tabella);
}


//gestione funzioni
document.addEventListener("DOMContentLoaded", creaT);