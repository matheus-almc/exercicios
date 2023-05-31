let palavra = prompt("Insira uma palavra para a verificação de polimdromo:")
let palavaraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavaraInvertida += palavra[i]
}

if (palavra === palavaraInvertida) {
  alert("Esta palavra é um polimdromo:\n\n" + palavra + " = " + palavaraInvertida)
} else {
  alert("Esta palavra não é um polimdromo:\n\n" + palavra + " x " + palavaraInvertida)
}