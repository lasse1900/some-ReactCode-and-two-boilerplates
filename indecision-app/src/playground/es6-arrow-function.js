const square = function (x) {
    return x * x;
}

const squareArrowLong = (x) => {
    return x * x;
}

const squareArrow = (x) => x * x;

console.log(square(5));
console.log(squareArrowLong(6));
console.log(squareArrow(7));

const getFirstName = function (fullName) {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Mike Smith'));


const getFirstNameArrow = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrow('Tony Montana'));