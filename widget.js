(function() {
    const count = howManyButtons()
    const container = document.querySelector('.my_widget')
    const colors = whichColors()
    for (let i = 1; i <= count; i++) {
        const btn = document.createElement('button')
        container.append(btn)
        // btn.innerText = 'Click_' + i
        btn.innerText = `Click_${i}`
        if (colors.length === 0) {
            btn.id = getRandomRGBA()
        } else {
            btn.id = whichColors()[i - 1]
        }
    }
    container.onclick = function({target}) {
        function updateState(color, timeout) {
            target.style.backgroundColor = color
            setTimeout(function() {
                target.style.backgroundColor = ''
            }, timeout)
        }
        updateState(target.id, 1000) 
    }
}
)()
