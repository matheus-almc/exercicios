let opcao = ""

do {
  opcao = prompt(
    "escolha uma das opções abaixo:\n" +
    "\nOpção 1" +
    "\nOpção 2" +
    "\nOpção 3" +
    "\nOpção 4" +
    "\nencerrar 5"
  )

  switch (opcao) {
    case "1":
      alert("Você escolheu a drogra da opção 1")
      break
    case "2":
      alert("Você escolheu a drogra da opção 2")
      break
    case "3":
      alert("Você escolheu a drogra da opção 3")
      break
    case "4":
      alert("Você escolheu a drogra da opção 4")
      break
    case "5":
      alert("Finalizando")
      break
    default:
      alert("Opção invalida")
  }

} while (opcao !== "5")