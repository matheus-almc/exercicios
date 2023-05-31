let valor = prompt("Informe o valor a ser multiplicado")
parseFloat = (valor)
let resultado = ""


for (let calculo = 1; calculo <= 20; calculo++) {
  resultado += valor + " X " + calculo + " = " + (calculo * valor) + "\n\n"

}

alert(
  "Resultado da multiplicação :\n\n" + resultado
)