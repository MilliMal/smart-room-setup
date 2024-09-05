const tempSetter = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(tempSetter(18, 26));


module.exports = {
tempSetter : tempSetter
}
