
// Fai inserire un numero, che chiameremo N, all'utente.
//  Genera con una funzione N array, ognuno formato da 10 
//  numeri casuali da 1 a 100.
//  Ogni volta che ne crei uno, stampalo.


let NumberArray = parseInt(prompt('inserisci numero di Array'));

function generaArrayCasuale() {
    let vettore = [];
    for(let i = 0; i < 10; i++) {
        vettore.push(Math.floor(Math.random() * 100) + 1);
    }
    return vettore;
}

for(let i = 0; i < NumberArray ; i++) {
    let vettoreCasuale = generaArrayCasuale();
    console.log(`vettore ${i+1}:`, vettoreCasuale);
}