function saudaçao1() {
    console.log("Olá, seja bem-vindo!");
}

saudaçao1();


function saudaçao(nome) {
    console.log("Olá " + nome + "!");

}

saudaçao("João");


function soma(numero1, numero2) {
    let soma = numero1 + numero2

    console.log("soma: " + soma);

}

soma(1, 2)



function par(numero) {

    if (numero % 2 === 0) {
        console.log("O numero é par")
    }

    else { console.log("O numero é impar") }
}

par(2)

function media(nota1, nota2, nota3) {

    let notaM = (nota1 + nota2 + nota3) / 3
    console.log("Sua media é: " + notaM + " e você foi:  ");

    if (notaM >= 7) { console.log("Aprovado") }

    else if (notaM >= 5 && notaM < 7) { console.log("recuperaçao") }

    else { console.log("Reprovado") }

}

media(10, 10, 10)


function dobro(nu) { let nume = (nu + nu); console.log(nume); }

dobro(10)


function maior(number1, number2) {

    if (number1 > number2) {
        console.log(number1);
    }

    else if (number1 === number2) {
        console.log("Os números são Iguais");


    }

    else { console.log(number2) }
}

maior(20, 20)