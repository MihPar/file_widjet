// const color = getRandomRGBA()
// console.log(color)



function test(count) {
    for (let i = 0; i < count; i++) {
        const color = getRandomRGBA()
        if (color.length !== 9) {
            return false
        }
    }
    return true
}
// test()