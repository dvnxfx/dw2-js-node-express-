// CLASSES NO JAVASCRIPT

// Uma forma de criar objetos e organizar o código de forma mais clara e reutilizável. Elas funcionam como "modelos" para criar múltiplos objetos com as mesmas propriedades e métodos.

// Criando uma classe

// Nomes de classes devem iniciar com a primeira letra maiúscula

class Carro {
     // Para criar os ATRIBUTOS de Classe deve-se utilizar o método "constructor"
     constructor(marca, modelo, ano) {
        // this representa a instância (objeto)
        // o valor que for enviado a classe será atribuido a instância
        // ATRIBUTOS
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    };
         // MÉTODOS 
    buzinar() {
        return "Beep! Beep!";
    }
};

// Criando INSTÂNCIAS (objetos) derivados da Classe Carro 
const carroPopular = new Carro ("Fiat", "Uno", 2012);
document.write(
    `<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${carroPopular.ano}. 
    Quando buzina faz ${carroPopular.buzinar()}</p>`
);

// Objeto - Carro Esportivo 
const carroEsportivo = new Carro();
    carroEsportivo.marca = "chevrolet";
    carroEsportivo.modelo = "Camaro";
    carroEsportivo.ano = 2024;

document.write(
    `<p>O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano de ${carroEsportivo.ano}. 
    Quando buzina faz ${carroEsportivo.buzinar()}</p>`
);   