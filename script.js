//1) Variáveis e tipos de dados
//Crie variáveis para armazenar: seu nome, idade, se você gosta de programar, sua altura,
//uma lista de 3 cores favoritas e um objeto com nome e idade.
let nome = "Bruno"
let idade = 17
let altura = 1.63
let cores = ["Preto", "Roxo", "Turquesa"]

let info = {
    nome: "Bruno",
    idade: 17
}


//2) Conversão de tipos
//Receba uma string "42" e converta para número. Depois, some com mais 10 e exiba o resultado.
let stringnumber = "42"
let number = Number(stringnumber)
let soma = number + 10
let resultado = soma
console.log(resultado)


//3)Operadores aritméticos
// Peça ao usuário (prompt) dois números e exiba: soma, subtração multiplicação e divisão deles no console
function ativadade3() {
    let numberone = Number(prompt("Digite o primeiro número"))
    let numbertwo = Number(prompt("Digite o segundo número"))
    let soma = numberone + numbertwo
    let subtracao = numberone - numbertwo
    let multiplicacao = numberone * numbertwo
    let divisao = numberone / numbertwo
    alert("Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Multiplicação: " + multiplicacao + "\n" +
        "Divisão: " + divisao)
    console.log(soma, subtracao, multiplicacao, divisao)
}
//4) Condicional simples e ternário
//Peça a idade do usuário. Se for maior ou igual a 18, mostre “Maior de idade”, caso contrário “Menor de idade” — faça com if e depois com operador ternário.
function atividade4(){
    let idade = prompt("Qual sua idade?")
    if(idade >= 18){
        alert("Maior de idade")
    }
    else{
        alert("Menor de idade")
    }
    let verificao = (idade >=18) ? "Maior de idade" : "Menor de idade"
}


//5)Switch
//Crie um programa que receba um número de 1 a 7 e retorne o dia da semana correspondente.

function atividade5(){
    let dia =   Number(prompt("Digite um dia da semana, de 0 a 7"))
    switch (dia) {
        case 1:
          alert("Domingo");
          break;
        case 2:
          alert("Segunda-feira");
          break;
        case 3:
          alert("Terça-feira");
          break;
        case 4:
          alert("Quarta-feira");
          break;
        case 5:
          alert("Quinta-feira");
          break;
        case 6:
          alert("Sexta-feira");
          break;
        case 7:
          alert("Sábado");
          break;
        default:
          alert("Dia inválido");
      }
}

//6) Operadores lógicos e relacionais
//Crie um código que verifique se um número está entre 10 e 20 e é par.
function atividade6(){
    let numero = Number(prompt("Digite um número de 10 a 20"))
    if(numero < 10 || numero > 20){
        alert("Porfavor, escolha um número de 10 a 20")
    }
    else if (numero % 2 === 0){
       alert(numero + " é par")
    }
    else{
       alert(numero + " não é par")
    } 
}

//Métodos de string
//7) Peça um nome e exiba:
//a) Nome todo em maiúsculas
//b) Nome todo em minúsculas
//c) Quantidade de caracteres
function atividade7(){
    let nome = prompt("Digite um nome")
    alert(nome.toUpperCase() + "\n" + nome.toLowerCase() + "\n" + "Esse nome tem " + nome.length + " caracteres")
}


//8) Métodos de array
//Crie um array de frutas e use métodos para: adicionar uma fruta no final, remover a primeira, verificar se existe “maçã” e exibir o array final.
let frutas = ["Banana", "Coco", "Pera"]
frutas.push("maçã")
frutas.shift()
const frutaProcurada = "maçã"
if (frutas.includes(frutaProcurada)) {
    console.log(`A fruta "${frutaProcurada}" existe no array.`);
  } else {
    console.log(`A fruta "${frutaProcurada}" não existe no array.`);
  }
//9) For e While
//Use o laço de repetição for para contar de 1 a 10.
let numero = 0
while(numero < 10){
  numero += 1
  console.log(numero)
}


//10)forEach
//Crie um array de nomes e exiba cada nome no console com uma frase: "Olá,[nome]!".
let nomes = ["Yuri", "Jully", "Alex", "Carati"]
nomes.forEach(function (nome) {
    console.log(`Olá,${nome}`)
});
//11) map
//Crie um array de números e use map para criar um novo array com cada número ao quadrado
let numerosArray = [1,2,3,4,5]
let numerosAoQuadrado = numerosArray.map(numero => numero * numero)
console.log(numerosAoQuadrado)
//12) filter
//Crie um array de idades e filtre apenas as maiores ou iguais a 18.
let idades = [5, 18, 1, 42, 9, 20]
let maioresQueDez = idades.filter(numero => numero >= 18)
console.log(maioresQueDez)
//13) Função tradicional e arrow function
// Crie uma função tradicional que receba dois números e retorne a soma, e depois faça o mesmo com arrow function.
function tradicional(){
  let numberone = Number(prompt("Digite o primeiro número"))
  let numbertwo = Number(prompt("Digite o segundo número"))
  let soma = numberone + numbertwo
  console.log("Function tradicional" +"\n" +"A soma dos números é " + soma)
}

console.log()
//14)Função callback
//Crie uma função que receba outra função como parâmetro e a execute (ex.: função que recebe um nome e imprime no console)


//15) Função anônima
// Crie uma função anônima atribuída a uma variável que receba um número e retorne se ele é par ou ímpar.



//16) Manipulação de JSON
// Crie um objeto com nome e idade, converta para JSON e exiba no console. Depois, converta de volta para objeto


//17) Função assíncrona
//Crie uma função async que aguarde 2 segundos e depois exiba "Carregou!".


//18)Definição de back-end
// Explique, com suas palavras, o que é back-end e cite 3 exemplos de tecnologias usadas para desenvolvê-lo.


//19) Diferença entre server-side e client-side
// Escreva uma tabela comparando server-side e client-side, incluindo:
//a) Onde o código é executado
//b) Exemplos de linguagens
//c) Vantagens e desvantagens


//20) Fluxo de funcionamento do back-end
//Descreva um esquema simples mostrando o fluxo de dados quando um usuário acessa um site


//21) Primeiro script com Node.js
// Crie um arquivo teste.js, digite qualquer coisa e execute no terminal chamando o comando do node


//22) Verificação de instalação
// Você baixou o Nodejs no seu computador, mas precisa verificar se foi instalado corretamente. Quais comandos você deve executar no terminal para confirmar a instalação?


//23)NPM
// O que é o npm e qual a sua função?


//24) Exemplos reais de uso do back-end
// Pesquise e liste 3 exemplos de funcionalidades de sistemas que dependem do back-end para funcionar.


//25)Protocolos HTTP
// Liste 4 métodos HTTP e explique resumidamente para que serve cada um.

