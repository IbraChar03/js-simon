const myArrNum1 = genArr(5, 1, 100);
let num = document.getElementById("num1").innerHTML=myArrNum1;
let inp = document.getElementById("inp");

let button = document.getElementById("control");
let riprova = document.getElementById("riprova");


let intervallo = setTimeout(function(){
    myFunction();
 }, 3000)


button.addEventListener("click",
function(){
     inp = parseInt(document.getElementById("inp").value);
   
     if (inp === myArrNum1[i] ){
         let stampaRis = document.getElementById("res").innerHTML = "Hai indovinato i  numeri"
     }
     else{
        let stampaRis = document.getElementById("res").innerHTML = "Non hai indovinato i  numeri"
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
    nodes.forEach(node => node.style.display="none");
  }


