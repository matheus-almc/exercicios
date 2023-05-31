const turista = prompt("informe seu nome viajante?")
let cidade = ""
let quantidade = 0 

let continua = prompt("ja viajou a alguma cidade ? (SIM/NAO)")

while (continua === "sim") {
  let cidades = prompt("quais foram meu caro viajante?")
  cidade += " - " + cidades + "\n"
  quantidade++
  continua = prompt("ja viajou a alguma outra cidade ? (SIM/NAO)")
}

alert(
  "\nesultados" +
  "\nNome do viajante: " + turista +
  "\nQuantidade de cidades que viajou: " + quantidade +
  "\nCidades visitadas:\n" + cidade 
)

