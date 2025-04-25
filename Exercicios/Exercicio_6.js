let ladoA = 5;
let ladoB = 7;
let ladoC = 9;

if (ladoA === ladoB && ladoB === ladoC) {
  console.log("Triângulo Equilátero");
} else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
  console.log("Triângulo Isósceles");
} else {
  console.log("Triângulo Escaleno");
}
