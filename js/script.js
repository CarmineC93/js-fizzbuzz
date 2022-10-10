/*  **Consegna:**
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. 
 
    **BONUS 1:**
Crea un container nel DOM , aggiungendo (attraverso la funzione `append()`) un elemento 
html con il numero o la stringa corretta da mostrare.

 
    **BONUS 2:**
 Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.*/

 //Apriamo un loop che vada da 1 a 100 e che proceda con incremento di uno
for (let i = 1; i <= 100; i++){
    //creo una variabile che contenga il contatore, non potendo modificarlo direttamente
    let number = i;
    //Per ogni numero ottenuto SE il numero è divisibile per 3 E per 5 loggherà FizzBuzz
    if(i % 3 == 0 && i % 5 == 0){
        number = "fizzbuzz";
    //Se divisibile per 3 loggherà Fizz
    } else if (i % 3 == 0){
        number = "fizz";
    //Se divisibile per 5 loggherà Buzz
    } else if (i % 5 == 0) {
        number = "buzz";
    }
    //Altrimenti loggherà il semplice numero 

    //Creiamo attraverso .createElement un elemento div, salvandolo in una variabile
    const col = document.createElement("div");
    //Assegniamo a questo div una classe
    col.classList.add("col", "col-md-1", "text-center", "fw-bold", "fs-5", "g-3", "ms-3");
    //In questo elemento inseriamo il valore di i, salvato nella variabile number
    col.innerHTML = number;
    //verifichiamo che si siano creati 100 div con all'interno valori crescenti da 1 a 100 
    console.log(col);
    //Spostiamo questo elemento nel DOM attraverso .append()
    document.querySelector(".row").append(col);

    //Creiamo 4 classi in CSS con differenti background per ciascuno dei 4 valori ottenibili dal IF (numero, stringa Fizz, stringaBuzz, stringaFizzBuzz)
    //Per evitare di dover creare un secondo IF il nome delle 3 classi stringa sarà lo stesso dei valori ottenibili dal primo IF
    //Assegneremo quindi al div una nuova classe attraverso .classList che sarà uguale al valore attuale della costante number.
    col.classList.add(number);

}


