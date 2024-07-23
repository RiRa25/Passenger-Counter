// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el") // pass in arguments
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    saveEl.textContent = saveEl.textContent + countStr
    count = 0
    countEl.textContent = count
}