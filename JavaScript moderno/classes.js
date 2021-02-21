// # Usando classes
class Animal {
    constructor(f) {
        this.familia = f;
    }
}

// Extendendo a classe Animal dentro da Cachorro
class Cachorro extends Animal {
    constructor(n, i) {
        // Enviando para família
        super('Carnívoros')
        this.nome = n
        this.idade = i
    }


    latir() {
        return `${this.nome}: au! au!`
    }
}

let rex = new Cachorro('Rex', 2);
// Impressão do objeto
console.log(rex);
console.log(rex.latir());
console.log(rex.familia());