let chovendo = false;
let nublado = true;
let temperatura = 0;


if (chovendo == false && temperatura >= 20 && temperatura <= 30) {
    console.log("Ótimo dia para um passeio!");
} else if (chovendo == true || temperatura < 20) {
    console.log("Melhor ficar em casa hoje.");
} else if (nublado == true && temperatura >= 20) {
    console.log("Pode sair, mas leve um casaco.");

}