function whichColors() {
    const myWidget = document.querySelector('.my_widget')
    const result = []
    for (const className of myWidget.classList) {
        if (className.startsWith('my_widget_color')) {
            const color = className.replace('my_widget_color_', '')
            result.push(color)
        }
    }
    return result
}
whichColors()

// function resert() {
//     const colors = document.getElementsByClassName('my_widget')
//     for(let i = 0; i < colors.length; i++) {
//         colors[0].style.backgroundColor = 'green'
//         colors[1].style.backgroundColor = 'red'
//         colors[2].style.backgroundColor = 'yellow'
//         colors[3].style.backgroundColor = 'blue'
//     }
// }
// resert()
