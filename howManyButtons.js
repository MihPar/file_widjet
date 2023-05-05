// document.querySelector('.my_widget').classList.forEach(className=>{
//         if (className.startsWith('my_widget')) {
//             const probablyNumber = parseInt(className.replace('my_widget_', '').replace('btn', ''))
//             if (!Number.isNaN(probablyNumber))
//                 console.log(probablyNumber)
//         }
//     }
//     )

// const widget = document.querySelector('.my_widget')
// if (widget)
//     widget.classList.forEach(className=>{
//         if (className.startsWith('my_widget')) {
//             const probablyNumber = parseInt(className.replace('my_widget_', '').replace('btn', ''))
//             if (!Number.isNaN(probablyNumber))
//                 console.log(probablyNumber)
//         }
//     }
//     )
// else
//     console.log('You forgot to insert div.my_widget')

function howManyButtons() {
    let result
    const widget = document.querySelector('.my_widget')
    if (widget) {
        for (const className of widget.classList) {
            if (className.startsWith('my_widget_')) {
                const str = className.replace('my_widget_', '').replace('btn', '')
                const probablyNumber = parseInt(str)
                if (!Number.isNaN(probablyNumber)) {
                    result = probablyNumber
                    break
                }
            }
        }
    } else {
        throw new Error('You forgot to insert div.my_widget')
    }
    if (result !== undefined) {
        if (result > 0) {
            return result
        } else {
            throw new Error('value must be greater than zero')
        }
    } else {
        throw new Error('Specify how many button to create')
    }
}
