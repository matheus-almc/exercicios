let saldo = prompt("Insira seu valor atual :")
saldo = parseFloat(saldo)
let opcao = ""

do {
  opcao = prompt(
    "Escolha uma das opções:\n " +
    "Saldo atual: " + saldo +
    "\n1.Adicionar dinheiro" +
    "\n2.Retirar dinheiro" +
    "\n3.Encerrar"
  )

  switch (opcao) {
    case "1":
      saldo += parseFloat(prompt("quanto deseja depositar ?"))
      break
    case "2":
      saldo -= prompt("quanto deseja retirar ?")
      break
    case "3":
      alert("encerrando....")
    default:
      alert("invalido")
  }
} while (opcao !== "3")