let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + " ° - " + fila[i] + "\n"
  }
  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:" +
    "\n1.Novo paciente:\n" +
    "2.Consultar paciente\n" +
    "3.sair"
  )

  switch (opcao) {
    case "1":
      let novoPaciente = prompt("Adicione o nome do paciente:")
      fila.push(novoPaciente)
      break
    case "2":
      let consultado = fila.shift()
      if (consultado) {
        alert(consultado + " foi consultado!")
      } else {
        alert("não ha nenhum paciente na fila !")
      }
      break
    case "3":
      alert("encerrando...")
      break
    default:
      alert("esta opção nao existe")
  }

} while (opcao !== "3")
