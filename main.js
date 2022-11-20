const myArrNum1 = genArr(5, 1, 100);
 let place = document.getElementById("place");
 let numgen;
 for(i = 0; i < myArrNum1.length; i++){
     let numgen = document.createElement("h1");
     numgen.innerHTML = `Numero ${i+1} = ${myArrNum1[i]}`;
     place.append(numgen);
     console.log(numgen);

 }

let button = document.getElementById("control");
let riprova = document.getElementById("riprova");

let intervallo = setTimeout(function(){
    myFunction();
 }, 3000);

button.addEventListener("click",
function(){
    let inp0 = parseInt(document.getElementById("inp0").value);
    let inp1 = parseInt(document.getElementById("inp1").value);
    let inp2 = parseInt(document.getElementById("inp2").value);
    let inp3 = parseInt(document.getElementById("inp3").value);
    let inp4 = parseInt(document.getElementById("inp4").value);
    let arrayUtente = [inp0,inp1,inp2,inp3,inp4];
    let numeriInComune = myArrNum1.filter(x => arrayUtente.includes(x));
    let numeriNonInComune = myArrNum1.filter(x => !arrayUtente.includes(x));
    if(numeriInComune.length == 5){
        document.getElementById("res").innerHTML = "Hai indovinato tutti i numeri";
        console.log("Hai indovinato tutti i numeri");
    }
    else if(numeriInComune.length == 1){
        document.getElementById("res").innerHTML = `Hai indovinato solo 1 numero. Il numero che hai indovinato è ${numeriInComune}`;    
    }
    else if(numeriInComune.length == 0){
        document.getElementById("res").innerHTML = `Hai sbagliato tutti i numeri`;  
    }
    else {
        document.getElementById("res").innerHTML = `Hai indovinato ${numeriInComune.length} numeri. I numeri che hai indovinato sono ${numeriInComune} invece i numeri che non hai indovinato sono ${numeriNonInComune}`;
    }
        
}
);
 riprova.addEventListener("click",
 function(){
     reloadPagina();
 }
   
 );

function randomInteger(min, max){
    return ( Math.floor(Math.random() * ((max + 1) -min) + min));
}

function genArr(quanti, minNum, maxNum){

    const newArr = [];

    while(newArr.length < quanti){
        let newNumber = randomInteger(minNum, maxNum);

        if(!newArr.includes(newNumber)){
            newArr.push(newNumber);
        }
    }
    return newArr;
}

function reloadPagina(){
    location.reload();
}

function myFunction() {
    const nodes = document.querySelectorAll("h1");
    nodes.forEach(node => node.style.display = "none");
    const nodes2 = document.querySelectorAll("input");
    nodes2.forEach(nodes2 => nodes2.readOnly = false);
  }




