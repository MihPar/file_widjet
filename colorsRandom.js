// const randomColors = document.querySelector('.my_widget')

//     randomColors.addEventListener('click', changeGB)

//     function changeGB() {
//         const col1 = getRandomRGB()
//         const col2 = getRandomRGB()
//         const col3 = getRandomRGB()
//         const col4 = getRandomRGB()

//         const colorString = `rgb(${col1}, ${col2}, ${col3}, ${col4})`

//         randomColors.style.backgroundColor = colorString
//         randomColors.innerText = colorString
//     }

//     function getRandomRGB() {
//         return Math.floor(Math.random() * 256)

//     }
/*
    #12ff5ff
red: 12
green: ff
blue: 5f
alpha: f
*/
function getRandomRGBA() {
    let result = '#'
    for (let i = 0; i < 3; i++) {
        result += Math.floor(Math.random() * 256).toString(16).padStart(2,'0')
    }
    result += (Math.floor(Math.random() * 128) + 128).toString(16)
    return result
}

