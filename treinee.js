// alert("bem vindo")

// prompt("qual seu nome ?")

// confirm("se vc deseja sair dessa pagina click ok")


// let nome = prompt("qual seu nome ?")
// let confirma = confirm("seu nome é: " + nome + "?");

// if (confirma) {
//     alert("nome confirmado")
// }
// else ("nome nao confirmado");

// let nome = prompt("qual seu nome ?")
// let idade = prompt("qual sua idade?")
// let filme = prompt("qual seu filme favorito?")

// // alert("Seu nome é: " + nome + " e sua idade é " + idade + " anos e seu filme favorito é " + filme )

// let usuario = { nome: nome, idade: idade, filme: filme }

// alert("Seu nome é:" + usuario.nome + " e sua idade é " + usuario.idade + " anos e seu filme favorito é " + usuario.filme);


const acessos = {
    email: "usuario@email.com",
    senha: "senha123"
  };
  
  
  const login = {
    email: prompt("Digite seu email:"),
    senha: prompt("Digite sua senha:")
  };
  
 
  function validarAcesso() {
    if (login.email === acessos.email && login.senha === acessos.senha) {
      alert("Acesso permitido!");
    } else {
      alert("Email ou senha incorretos!");
    }
  }
  

  validarAcesso();
  





