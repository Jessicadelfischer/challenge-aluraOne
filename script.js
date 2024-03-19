const mensagem = document.querySelectorAll('.mensagens')
const msgs = document.querySelectorAll('.msg')
const input = document.querySelector('textarea')

const change = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

function encrypt(text)  {   
  if(input.value === "") {
    alert("Digite algo")
    return
  }
  msgs.forEach(msg => {
    msg.remove()
  })
  
  mensagem.forEach(mensagem => {
    const newText = input.value.replace(/[aeiou]/gi, function(m) {
      return change[m.toLowerCase()]
    }).replace(/\n/g, '<br>')

    mensagem.innerHTML = newText
  })
}
const invertedChange = {
  "ai": "a",
  "enter": "e",
  "imes": "i",
  "ober": "o",
  "ufat": "u"
}

function decrypt() {
  mensagem.forEach(mensagem => {
    const newText = input.value.replace(/ai|enter|imes|ober|ufat/gi, function(m) {
      return invertedChange[m.toLowerCase()].replace(/\n/g, '<br>')
    })  
    mensagem.innerHTML = newText
  })
  
}