// let nome = "Pedro Juan"
// let idade = 22
// let nacionalidade = "Brasileiro"

// console.log("Eu me chamo " + nome + " e tenho " + idade + " anos e sou " + nacionalidade);

// console.log("");
// console.log("");
// console.log("");

// let eAluno = true
// let curso = "full Stack"

// if (eAluno === true) {
//     console.log("Olá, me chamo " + nome + " e sou aluno do curso " + curso);
// }

// else { console.log("Olá, me chamo " + nome + " e sou professor do curso " + curso); }


// let frutas = ["laranja", "Maça", "uva" , "goiaba" , "manga" , "kiui" , "jaca" , "morango" , "uva verde" , "tomate"]

// console.log(frutas[0]);

// console.log(frutas.length);

// console.log(frutas[frutas.length -1]);


// console.log("");
// console.log("");
// console.log("");


// for (let i = 1; i<= 10; i++){
//     console.log(i);
// }



// console.log("");
// console.log("");
// console.log("");

// console.log("lista de frutas");

// for( let i = 1; i < frutas.length; i++){
//     console.log(frutas[i]);
// }


// function saudaçao() {
//     console.log("Olá Mundo");   
// }

// saudaçao();

// function soma(numero1 , numero2) {
//     console.log(numero1 + numero2);
//     console.log(numero1);
//     console.log(numero2);

//     let soma = numero1 + numero2

//     console.log("soma: " + soma);


// }

// soma(4 ,4)



// function saudaçao(nome1, idade , nacionalidade) {
//     console.log("ola " + nome1 + " vc tem " + idade + " anos de idade e sua nacionalidade é: " + nacionalidade);

// }

// saudaçao("joao" , 10 , "Brasileiro")

// let listaDeNomes = ["Rafinha", "Pedro", "Ariana", "AYRON"];


// function listaNomes(nomes) {
//     for (let i = 0; i < nomes.length; i++) {
//       console.log("Olá, " + nomes[i] + "!");
//     }

//     for  (let nome of nomes){
//         console.log("Olá, " + nome + "!");
//         }
//   }

// listaNomes(listaDeNomes);


// let carro = {modelo: "civic", ano:2024, marca:"honda"}


// let celular1 = {modelo: "A10" , tipo:"smartphone", bateria: 1500}



// let celulares =  [ {modelo: "a10", tipo: "smartphone"}, {modelo: "civic", ano:2024, marca:"honda"} ]

// console.log(celulares);




function criarFilme(titulo, genero, ano, duraçao) {
    return {
        titulo: titulo,
        genero: genero,
        ano: ano,
        duraçao: duraçao
    }

}

let filme1 = criarFilme("Um Sonho de Liberdade", "Policial, Drama", 2025, "2h 55min")

console.log(filme1);


let filmes = [{ titulo: "Um Sonho de Liberdade", genero: "Policial, Drama", ano: 2025, duraçao: "2h 55min" }, { titulo: "O Poderoso Chefão", genero: "Drama", ano: 2025, duraçao: "2h 22min" }]

console.log(filmes[1].titulo);