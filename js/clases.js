
class Llanta {
    constructor(radio) {
        this.radio = radio;
    }

    calcularDiametro(){
        return this.radio * 2;
    }
}

class Carro extends Llanta{
    constructor(radioCarro) {
        super(radioCarro);
        const diametro = this.calcularDiametro();
        const result = document.querySelector("#resultDiametro");
        result.innerHTML = `El diametro es ${diametro}`
    }
}
