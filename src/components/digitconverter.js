function digi(value) {
    if (value.length == 6) {
        if (value[1] == 0) {
            console.log(value.slice(0, 1) + "lahk")
        } else if (value[1] !== 0) {
            console.log(`${value.slice(0, 1)}.${value[1]}lahks `)
        }
    } else if (value.length == 7) {
        if (value[2] == 0) {
            console.log(value.slice(0, 2) + "lahks")
        } else if (value[2] != 0) {
            console.log(`${value.slice(0, 2)}.${value[2]}lahks`)
        }
    } else if (value.length == 8) {
        if (value[2] == 0) {
            console.log(value.slice(0, 1) + "cr")
        }else if (value[2] !== 0) {
            console.log(`${value.slice(0, 1)}.${value[2]}cr `)
    }
}else if (value.length == 9) {
    if (value[2] == 0) {
        console.log(value.slice(0, 2) + "cr")
    } else if (value[2] != 0) {
        console.log(`${value.slice(0, 2)}.${value[2]}cr`)
    }
}

}
digi()
