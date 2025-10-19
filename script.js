let numero = 0





function mais() {
    numero = numero + 1
    render()
}

function menos() {
    numero = numero - 1
    render()
}

function reset() {
    numero = 0
    render()
}


function render() {
    const p = document.querySelector("p")
    p.innerText = numero
    
    if (numero >= 1) {
        p.style.color = "green"
    }
        if (numero <= 0){
        p.style.color = "red"
    }
  if (numero === 0){
    p.style.color = "white"
  }

}

render()