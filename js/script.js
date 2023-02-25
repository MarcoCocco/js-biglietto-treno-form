/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero

  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, 
  secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km(0.21 € al km)
- va applicato uno sconto del 20 % per i minorenni
- va applicato uno sconto del 40 % per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone
(non stilizzati), realizziamo le specifiche scritte sopra.La risposta finale(o output)
 sarà anch’essa da scrivere in console.

MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui 
l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina 
(il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
Questo richiederà un minimo di ricerca. 
*/

/*
Pseudo codice:
1- Chiedere l'età del cliente e memorizzarla.
2- Chiedere il numero di KM da percorrere e memorizzarli.
3- Il prezzo è uguale al numero di KM percorsi per 0.21€.
   ?SE l'età è inferiore a 18 anni va applicato il 20% di sconto.
   :ALTRIMENTI SE l'età è superiore a 65 anni va applicato il 40% di sconto.
   :ALTRIMENTI il prezzo rimane uguale al numero di KM percorsi.
4- Il prezzo finale deve essere espresso con massimo due decimali.
*/

let distanceEl = document.getElementById('distance');
let userAgeEl = document.getElementById('userAge');
let ticketButtonEl = document.getElementById('ticketButton');

ticketButtonEl.addEventListener('click', function () {
    let price = distanceEl.value * 0.21;
    let discountPrice20 = (price * 20) / 100;
    let discountPrice40 = (price * 40) / 100;

    let finalPrice20 = price - discountPrice20;
    let finalPrice40 = price - discountPrice40;

    if (userAgeEl.value < 18) {
        document.writeln(`Il prezzo del tuo biglietto è di ${finalPrice20.toFixed(2)}€`);
    } else if (userAgeEl.value > 65) {
        document.writeln(`Il prezzo del tuo biglietto è di ${finalPrice40.toFixed(2)}€`);
    } else {
        document.writeln(`Il prezzo del tuo biglietto è di ${price.toFixed(2)}€`);
    }


});


