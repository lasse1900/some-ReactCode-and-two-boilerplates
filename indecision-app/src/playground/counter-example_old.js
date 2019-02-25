// let count = 0;
// const someId = "my-id-here";
// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button id={someId} className="button">+1</button>
//     </div>
// );

// console.log(templateTwo);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>        
        </div>
    ); 
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();



// const user = {
//     name: 'Lasse',
//     age: 18,
//     location: 'Vantaa'
// }

// function getLocation(location) {
//     if(location){
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1> 
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );