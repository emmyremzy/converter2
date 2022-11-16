let inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

inputEl.value = "";
const liter = 0.264
const meter = 3.281
const kilogram = 2.202

convertBtn.addEventListener("click", function () {
    callFunc();
})

const callFunc = () => {
    toLiter();
    toMeter();
    toKilogram();
    inputEl.value = "";
}

function toLiter() {
    volumeEl.textContent = inputEl.value * liter
}
function toMeter() {
    lengthEl.textContent = meter * inputEl.value
}
function toKilogram() {
    massEl.textContent = inputEl.value * kilogram

}







