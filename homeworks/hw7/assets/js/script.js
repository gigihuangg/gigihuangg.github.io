function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum / 3;
    return Math.floor(avg);
}

function createSentence(num, noun) {
    let s = "On average, a Berkeley student has " + num + " " + noun + "s";
    return s;
}

function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}

var x = getRandomNum(20)
var y = getRandomNum(10)
var z = getRandomNum(13)

let avg = averageThreeNumbers(x, y, z);

let sentence = createSentence(avg, 'Penguin')

console.log(sentence);
