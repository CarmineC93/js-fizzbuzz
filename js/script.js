/* **Consegna:**
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

 //Apriamo un loop che vada da 1 a 100 e che proceda con incremento di uno
for (let i = 1; i <= 100; i++){
    let number = i;
    if(i % 3 == 0 && i % 5 == 0){
        number = "FizzBuzz";
    } else if (i % 3 == 0){
        number = "Fizz";
    } else if (i % 5 == 0) {
        number = "Buzz";
    }

    console.log(number);
}
    //Per ogni numero ottenuto SE il numero è divisibile per 3 E per 5 loggherà FizzBuzz

    //Se divisibile per 3 loggherà Fizz

    //Se divisibile per 5 loggherà Buzz

    //Altrimenti loggherà il semplice numero 