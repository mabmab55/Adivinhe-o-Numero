var numeroSecreto = Math.floor(Math.random() * 11)
var tentativas = 3

function verificar() {
if (tentativas > 0) {
  var chute = document.getElementById("chute").value
  if (chute == numeroSecreto) {
    document.getElementById("verificar").innerHTML = "Parabéns você acertou"
    document.getElementById("chute").classList.add('certo')
  } else if (chute > numeroSecreto) {
    document.getElementById("verificar").innerHTML = "O número secreto é menor"
    tentativas = tentativas - 1
  } else if (chute < numeroSecreto) {
    document.getElementById("verificar").innerHTML = "O número secreto é maior"
    tentativas = tentativas - 1
  }
} else {
    document.getElementById("verificar").innerHTML = "Suas tentativas acabaram, o número era: " + numeroSecreto
    document.getElementById("chute").classList.add('errado')
  }

}

function reset() {
  tentativas = 3
  document.getElementById("verificar").innerHTML = ""
  document.getElementById("chute").classList.remove('certo', 'errado')
  numeroSecreto = Math.floor(Math.random() * 11)
}