const person = {
    name: 'Lasse',
    age: 51,
    location: {
        city: 'Vantaa',
        temp: -4
    } 
};

const { name: firstname = 'Anonymous', age } = person;
console.log(`${firstname} is ${age}.`);

const { city, temp: temperature } = person.location;
if(city && temperature) {
    console.log(`It' s ${temperature} in ${city}.`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penquin'
    }
};

const { name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);