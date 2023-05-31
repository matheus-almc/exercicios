let medidaEmMetro = prompt("Insira a quantidade de metros que quer converter:")


const medidaConvertida = prompt(
  "Escolha a alternativa em que deseja converter" +
  "\na) Melimetro (mm)" +
  "\nb) Centímetros (cm)" +
  "\nc) Decímetros (dm)" +
  "\nd) Decâmetros (dam)" +
  "\ne) Hectômetros (hm)" +
  "\nf) Quilômetros (km)" 
  )

 

switch (medidaConvertida) {
  case "a":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro * 1000 + "mm")
    break
  case "b":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro * 100 + "cm")
    break
  case "c":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro * 10 + "dm") 
    break
  case "d":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro / 10 + "dam")
    break
  case "e":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro / 100 + "hm")
    break
  case "f":
    alert("Resultado: " + medidaEmMetro + "m =" + medidaEmMetro / 1000 + "km")
    break
  default:
    alert("Opção invalida !")
}