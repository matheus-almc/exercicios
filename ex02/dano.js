let nomeDoAtacante = prompt("Digite o nome do seu personagem atacante:")
let nomeDopoder = prompt("Digite o nome do seu poderzinho: ")
let poderDeAtaque = prompt("Digite o poder de ataque do personagem: ")

let nomeDoDefensor = prompt("Digite o nome do seu personagem defensor: ")
let nomeDoPoderTwo = prompt("Digite o nome de poder do seu defensor: ")
let pontosDeVida = prompt("Digite os pontos de vida do seu personagem: ")
let poderDeDefesa = prompt("digite o poder de defesa do seu personagem")
let possuiEscudo = prompt("ele possui um escudo ??: ")

let dano = 0

if (poderDeAtaque > poderDeDefesa && possuiEscudo !== "sim") {
  dano = + poderDeAtaque - poderDeDefesa
  alert(
    `${nomeDoDefensor} perdeu ${dano} pontos de vida `
  )
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  dano = + (poderDeAtaque - poderDeDefesa) / 2
  alert(
    `${nomeDoDefensor} perdeu ${dano} pontos de vida `
  )
} else if (poderDeAtaque <= poderDeDefesa) {
  dano = + poderDeAtaque - poderDeAtaque
  alert(
    `${nomeDoDefensor} perdeu ${dano} pontos de vida `
  )
}

alert(
  `${nomeDoAtacante}\n poder: ${nomeDopoder}\n pontos de ataque: ${poderDeAtaque}\n 
   ${nomeDoDefensor}\n poder: ${nomeDoPoderTwo}\n pontos de defesa: ${poderDeDefesa}\n número de vida atual: ${pontosDeVida - dano}`
)


