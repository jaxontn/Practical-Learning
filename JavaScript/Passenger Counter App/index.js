let count = 0
let saveEl = document.getElementById("save-el") //this is how to get the element aka button //
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContenttStr += countStr
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!");
//going to continue on this tmr.
//must understand how to make the web app.
