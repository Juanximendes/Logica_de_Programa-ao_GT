let nome = "Pedro Juan"
let idade = 22
let nacionalidade = "Brasileiro"

console.log("Eu me chamo " + nome + " e tenho " + idade + " anos e sou " + nacionalidade);

console.log("");
console.log("");
console.log("");

let eAluno = true
let curso = "full Stack"

if (eAluno === true) {
    console.log("Olá, me chamo " + nome + " e sou aluno do curso " + curso);
}

else { console.log("Olá, me chamo " + nome + " e sou professor do curso " + curso); }

let frutas = ["laranja", "Maça", "uva" , "goiaba" , "manga" , "kiui" , "jaca" , "morango" , "uva verde" , "tomate"]

console.log(frutas[0]);

console.log(frutas.length);

console.log(frutas[frutas.length -1]);


console.log("");
console.log("");
console.log("");


for (let i = 1; i<= 10; i++){
    console.log(i);
}



console.log("");
console.log("");
console.log("");

for( let i = 1; i < frutas.length; i++){
    console.log(frutas[i]);
}
