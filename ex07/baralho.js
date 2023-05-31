let baralho = []
opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1.Adicionar carta:\n2.puxar carta:\n3.sair"
  )

  switch (opcao) {
    case "1":
      let maisCarta = prompt("Nome da carta que deseja adicionar ?")
      baralho.unshift(maisCarta)
      break
    case "2":
      let menosCarta = baralho.shift()
      if (menosCarta) {
        alert("voce puxou um(a)" + menosCarta)
      } else {
        alert("nao ha cartas")
      }
      break
    case "3":
      alert("saindo....")
      break
    default:
      alert("esta opção nao existe")

  }
} while (opcao !== "3")