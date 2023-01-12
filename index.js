// javascript
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")
const lengthP = document.getElementById("l-result")
const volumeP = document.getElementById("vol-result")
const massP = document.getElementById("mass-result")
let myCalc = []


convertBtn.addEventListener('click',  function(){
 myCalc.push(inputEl.value)
 
 //localStorage.setItem('myCalc', JSON.stringify(myCalc))

calculateL(3.281)
calculateV(0.264)
calculateM(2.204)
myCalc = []

})

console.log(myCalc)

function calculateL(num){
    let showC = ""
    let showB = ""
     for (let i = 0; i < myCalc.length; i++) {
 showC += myCalc[i] + " "
 showB += myCalc[i] + " "

 showC *= num
 showB /= num
 }
lengthP.textContent = `${inputEl.value} meters = ${showC.toFixed(3)} feet | ${inputEl.value} feet = ${showB.toFixed(3)} meters`
}


function calculateV(num){
    let showZ = ""
    let showY = ""
     for (let i = 0; i < myCalc.length; i++) {
 showZ += myCalc[i] + " "
 showY += myCalc[i] + " "

 showZ *= num
 showY /= num
 }

volumeP.textContent = `${inputEl.value} liters = ${showZ.toFixed(3)} gallons | ${inputEl.value} gallon = ${showY.toFixed(3)} liters`
}

function calculateM(num){
    let showA = ""
    let showD = ""
     for (let i = 0; i < myCalc.length; i++) {
 showA += myCalc[i] + " "
 showD += myCalc[i] + " "

 showA *= num
 showD /= num
 }
massP.textContent = `${inputEl.value} kilos = ${showA.toFixed(3)} pounds | ${inputEl.value} pounds = ${showD.toFixed(3)} kilos`
}



/*
 let length =  inputEl * 3.381
  let volume = inputEl * 0.264
  let kilogram = inputEl * 2.204
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

resetBtn.addEventListener('click', function(){
    inputEl.value = ""
    massP.textContent = ""
    volumeP.textContent = ""
    lengthP.textContent = ""
})