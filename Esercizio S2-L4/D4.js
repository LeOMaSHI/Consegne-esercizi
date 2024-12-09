/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(b,a){
    return b * a;
}
const resultArea = area(10,5);
console.log("l'area del rettangolo:" + resultArea)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function(num1, num2){
    if(num1 === num2){
    return (num1 + num2) * 3
    }
    return num1 + num2
}
   const resutCrazy = crazySum(10,5)
   console.log("il risultato della funzione:" + resutCrazy)

   /* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num2, num3 = 19) {
     if(num2 > 19){
         return math.abs(num2 - num3) * 3
      }
      return Math.abs (num2-num3)
}
const resultDiff = crazyDiff(10-19)
console.log(resultDiff)

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if(n >= 20 && n <= 100 || n === 400){
        return true
    }else{
        return false
    }
}
const resultBoundary = boundary(200)
console.log(resultBoundary)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(str) {
    if(str.startsWith("EPICODE")){

    return str
}
    return "EPICODE"
}

const resultEpify = epify("test")
console.log(resultEpify)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = (n) => {
    if(n>0 && (n%3 === 0 || n%7 === 0)){
        return true
    } else {
        return false
    }
}

const resultCheck = check3and7(20)
console.log("il risulato e:" + resultCheck)
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str){
    let arrStr = str.split("")
    /* console.log(arrStr)
    let strReverse = ""
    for(let i=arrStr.length; i<0; i--){
       strReverse += arrStr[i-1]
    }
return strReverse */
let strReverse = arrStr.reverse();
return strReverse.join("")


}

const resultReverseString = reverseString("EPICODE")
console.log(resultReverseString)

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(str){
    let arrStr = str.split(" ");
    let completeString = []
    for (let i = 0; i < array.length; i++){
     let word = arrStr[i];
     let firstLetter = word.charAt(0).toUpperCase()
     let parolaSenzaLaPrimaLettera = word.slice(1)
     let finalWord = firstLetter + parolaSenzaLaPrimaLettera
     completeString.push(finalWord) 
    }
        return completeString.join(' ')
    }

const resultUpperFirst =upperFirst("ciao a tutti")
console.log(resultUpperFirst)
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
