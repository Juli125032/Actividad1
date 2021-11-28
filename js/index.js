'use strict'

function elevar(){
    const base = document.querySelector("#base").valueAsNumber;
    const exponente = document.querySelector("#exponente").valueAsNumber;
    const result = document.querySelector("#result");
    result.innerHTML = '';    

    let resultado = 0;

    for (let item = 1; item < exponente; item++) {
        if(item == 1){
            resultado = base * base;
        } else {
            resultado = resultado * base;
        }
    }

    result.innerHTML = `El valor resultate es ${resultado}`
}