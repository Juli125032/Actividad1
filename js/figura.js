class Figura {

    constructor(figura) {
        this.figura = figura;
    }

    desplazar(){
        let margin = this.figura.style.marginLeft;
        if(margin){
            margin = margin.split('px')[0];
            this.figura.style.marginLeft = `${parseInt(margin)+15}px`;
            return;
        }
        this.figura.style.marginLeft = `15px`;

    }

    restaurar(){
        this.figura.style.marginLeft = `0px`;
    }


    calcularArea(base, altura){
        return base * altura;
    }
}

class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea(){
        let area = 3.14 * (this.radio * this.radio);
        const circle = document.querySelector(".circle");
        circle.style.width = `${area}px`;
        circle.style.height = `${area}px`;
        circle.style.borderRadius = `${area}px`;
        document.querySelector("#resultAreaCircle").innerHTML = `Area: ${area}`
    }
}

class Triangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        let areaForma = new Figura(document.querySelector(".triangulo")).calcularArea(this.base, this.altura);
        let area = areaForma / 2;
        const triangulo = document.querySelector(".triangulo");
        triangulo.style.width = `${this.base}px`;
        triangulo.style.height = `${this.altura}px`;
        document.querySelector("#resultAreaTriangulo").innerHTML = `Area: ${area}`
    }
}

class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){
        let area = new Figura(document.querySelector(".rectangulo")).calcularArea(this.base, this.altura);
        const rectangulo = document.querySelector(".rectangulo");
        rectangulo.style.width = `${this.base}px`;
        rectangulo.style.height = `${this.altura}px`;
        document.querySelector("#resultAreaRectangulo").innerHTML = `Area: ${area}`
    }
}

class Rombo extends Figura {
    constructor(diagonalMenor, diagonalMayor) {
        super();
        this.diagonalMenor = diagonalMenor;
        this.diagonalMayor = diagonalMayor;
    }

    calcularArea(){
        let areaForma = new Figura(document.querySelector(".rombo")).calcularArea(this.diagonalMenor, this.diagonalMayor);
        let area = areaForma / 2;
        const rombo = document.querySelector(".rombo");
        rombo.style.width = `${this.diagonalMenor}px`;
        rombo.style.height = `${this.diagonalMayor}px`;
        document.querySelector("#resultAreaRombo").innerHTML = `Area: ${area}`
    }
}