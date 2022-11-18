const myArrNum1 = genArr(5, 1, 100);
let num = document.getElementById("num1").innerHTML=myArrNum1;
console.log(num);

let button = document.getElementById("control");
let riprova = document.getElementById("riprova");

let intervallo = setTimeout(function(){
    myFunction();
 }, 3000)


button.addEventListener("click",
function(){
    let inp0 = parseInt(document.getElementById("inp0").value);
    let inp1 = parseInt(document.getElementById("inp1").value);
    let inp2 = parseInt(document.getElementById("inp2").value);
    let inp3 = parseInt(document.getElementById("inp3").value);
    let inp4 = parseInt(document.getElementById("inp4").value);
    for(let n = 0; n < 5; n++){
        if( eval('inp' + n) === myArrNum1[n]){
            let stampaRis = document.getElementById("res").innerHTML = `Hai indovinato ${n+1} numero/i`
        }
    }
         if( inp0 !== myArrNum1[0] && inp1 !== myArrNum1[1] && inp2 !== myArrNum1[2] && inp3 !== myArrNum1[3] && inp4 !== myArrNum1[4]){
        let stampaRis = document.getElementById("res").innerHTML = `Hai sbagliato tutti i numeri`
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



