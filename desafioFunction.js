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

console.log("");


function saudarUsuario(nome, hora) {
    if (hora < 12) {
        return `Bom dia, ${nome}!`;
    } else if (hora>=12 && hora < 18) {
        return `Boa tarde, ${nome}!`;
    } 
    else if (hora>= 18 && hora <=24 ) {
        return ` Boa noite, ${nome} `
        
    }
    else {
        return `O horario: ${nome} é invalido!`;
    }
}

console.log(saudarUsuario("Pedro", 19));


console.log("");


function gerarRecibo(nome, produto, valor) {
    return `Recibo de Compra
  Cliente: ${nome}
  Produto: ${produto}
  Total: R$${valor}
  Obrigado pela preferência!`;
}

console.log(gerarRecibo("Juan", "Geladeira", 3500));

console.log("");

function emailBoasVindas(nome, curso) {
    return `Olá, ${nome}!
  Seja bem-vindo ao curso de ${curso}.
  Estamos felizes por tê-lo conosco!`;
}

console.log(emailBoasVindas("Pedro", "FullStack"));

console.log("");


function calcularDesconto(nome, preco, desconto) {
    return `Olá, ${nome}. O produto custa: R$${preco} e com desconto de ${desconto}% custa: R$${preco - (preco * (desconto / 100))}.`;
}

console.log(calcularDesconto("Pedro", 200, 10));




