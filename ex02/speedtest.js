let carOne = prompt("insira o nome do seu primeiro veiculo:")
let carTwo = prompt("insira o nome do seu segundo veiculo:")

let speedOne = prompt("qual é a velocidade do primeiro veiculo ?")
let speedTwo = prompt("qual é a velocidade do segundo veiculo ?")

if (speedOne > speedTwo) {
  alert(
    carOne + " É mais rapido que " + carTwo
  )
} else {
  alert(
    carTwo + " É mais rapido que " + carOne
  )
}

