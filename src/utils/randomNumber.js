const getRandomNumber = (limit) => {
    let number = Math.floor(Math.random() * limit) + 1
    return number;
}

export {
    getRandomNumber
}