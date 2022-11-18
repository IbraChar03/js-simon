const myArrNum1 = genArr(5, 1, 100);
let num = document.getElementById("num1").innerHTML=myArrNum1;
console.log(num);
let inp0 = document.getElementById("inp0");
let inp1= document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");

let button = document.getElementById("control");
let riprova = document.getElementById("riprova");


let intervallo = setTimeout(function(){
    myFunction();
 }, 3000)


button.addEventListener("click",
function(){
    inp0 = parseInt(document.getElementById("inp0").value);
    inp1 = parseInt(document.getElementById("inp1").value);
    inp2 = parseInt(document.getElementById("inp2").value);
    inp3 = parseInt(document.getElementById("inp3").value);
    inp4 = parseInt(document.getElementById("inp4").value);
    for(n = 0; n < 5; n++){
        if( eval('inp' + n) === myArrNum1[n]){
            let stampaRis = document.getElementById("res").innerHTML = `Hai indovinato ${n+1}  numeri`
        }
  
    }
   
    //  if (inp1 === myArrNum1[0]){
    //      let stampaRis = document.getElementById("res").innerHTML = "Hai indovinato solo il primo numero"
    //  }
    //  else if (inp2 === myArrNum1[1]){
    //     let stampaRis = document.getElementById("res").innerHTML = "Hai indovinato solo il secondo numero"
    //  }
    //  else if (inp3 === myArrNum1[2]){
    //     let stampaRis = document.getElementById("res").innerHTML = "Hai indovinato solo il terzo numero"
    //  }
     
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



