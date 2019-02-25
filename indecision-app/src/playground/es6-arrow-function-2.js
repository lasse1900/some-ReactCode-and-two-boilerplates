// const add = function (a, b) {
//     console.log(arguments);
//     return a + b;
// }

const add = (a, b) =>  {
    // console.log(arguments);
    return a + b;
}

console.log(add(5,1,1001));

// const user = {
//     name: 'Lasse',
//     cities: ['Lohja','Vantaa'],
//     printPlacesLived: function () {
//         this.cities.forEach((city) => {
//             console.log(this .name + ' has lived in ' + city);
//         });
//     }
// };


// const user = {
//     name: 'Lasse',
//     cities: ['Lohja','Vantaa'],
//     printPlacesLived() {

//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//         return cityMessages; 

//         // this.cities.forEach((city) => {
//         //     console.log(this .name + ' has lived in ' + city);
//         // });
//     }
// };
// // user.printPlacesLived();

// console.log(user.printPlacesLived());


// const user = {
//     name: 'Lasse',
//     cities: ['Lohja','Vantaa'],
//     printPlacesLived() {

//         const cityMessages = this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//         return cityMessages; 

//     }
// };

// console.log(user.printPlacesLived());

// const user = {
//     name: 'Lasse',
//     cities: ['Lohja','Vantaa'],
//     printPlacesLived() {

//         return this.cities.map((city) => {
//             return this.name + ' has lived in ' + city;
//         });
//     }
// };
// console.log(user.printPlacesLived());

const user = {
    name: 'Lasse',
    cities: ['Lohja','Vantaa'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

// Challenge

const multiplier = {
    numbers: [2, 3, 4],
    multiply(num) {
        return this.numbers.map((number) => number * num);
    }
    };
    
console.log(multiplier.multiply(3));

