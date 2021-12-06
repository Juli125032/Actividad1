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

function string(){
    const txt1 = document.querySelector("#texto1").value;
    const txt2 = document.querySelector("#texto2").value;
    const txt3 = document.querySelector("#texto3").value;

    let textResult = document.querySelector("#textResult");
    textResult.innerHTML = `Texto 1: ${txt1},
    Texto 2: ${txt2},
    Texto 3: ${txt3}, `
}

function StringBuffer() {
    this.__strings__ = new Array;
}
 
StringBuffer.prototype.append = function (str) {
    this.__strings__.push(str);
};
 
StringBuffer.prototype.toString = function () {
    return this.__strings__.join("");
};

function getStringBuffer(){
    var buffer = new StringBuffer();
    const txt1 = document.querySelector("#texto1").value;
    const txt2 = document.querySelector("#texto2").value;
    const txt3 = document.querySelector("#texto3").value;
    buffer.append(txt1);
    buffer.append(txt2);
    buffer.append(txt3);
    let result = buffer;
    let textResult = document.querySelector("#textResult");
    textResult.innerHTML = `Texto: ${result}`
}

function getStringTokenizer(){
    var buffer = new StringBuffer();
    const txt1 = document.querySelector("#texto1").value;
    const txt2 = document.querySelector("#texto2").value;
    const txt3 = document.querySelector("#texto3").value;
    buffer.append(txt1);
    buffer.append(txt2);
    buffer.append(txt3);
    let result = buffer.toString();
    const separador = document.querySelector("#separador").value;

    let textResult = document.querySelector("#textResult");
    textResult.innerHTML = `Texto Completo: ${result}, Texto tokenizer: ${result.split(separador)}`
}