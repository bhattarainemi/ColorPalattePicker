// document.getElementById('color').addEventListener('input',function(){
//     console.log(document.getElementById('color').value)
// })



document.getElementById('detail-form').addEventListener('submit',function(e){
    e.preventDefault()
    const pickedColor = document.getElementById('color').value
    const pickedPalate = document.getElementById('palatte').value
    const numColors = document.getElementById('numberOfColors').value
    console.log(pickedColor, pickedPalate, numColors)
    let colorsName = [];

    fetch(`https://www.thecolorapi.com/scheme?hex=${pickedColor.replace("#",'')}&format=json&mode=${pickedPalate}&count=${numColors}`)
    .then(res => res.json())
    .then(data =>{
        for (color of data.colors){
            colorsName.push(color.hex.value)
        }
        const colorScheme = document.getElementById("color-container")
        let html = ""
        let texthtml = ''
        for (color of colorsName){
            html +=`<div class="colorStrip" style="background: ${color}"></div>`
        }
        colorScheme.innerHTML = html

        const nameScheme = document.getElementById("color-name-container")
        for (color of colorsName){
            texthtml +=`<div class="colorStripName">${color}</div>`
        }
        nameScheme.innerHTML = texthtml})
})