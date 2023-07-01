let array = [1,2,3,4,5,6,7,8,9,10]

const avg = array.reduce((p , c) => {

    return p + c /array.length

},0);

document.write(`<h2>Total Average: `  + avg );