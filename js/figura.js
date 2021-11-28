class Figura {

    desplazar(){

    }

    calcularArea(){

    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea(){
        let area = 2.14 * (this.radio * this.radio);
        const circle = document.querySelector(".circle");
        circle.style.width = `${area}px`;
        circle.style.height = `${area}px`;
        circle.style.borderRadius = `${area}px`;
    }
}

class Triángulo extends Figura {

}

class Rectángulo extends Figura {

}

class Rombo extends Figura {

}