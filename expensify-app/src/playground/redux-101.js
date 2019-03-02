import { createStore } from 'redux';

const store = createStore((state = { count: 0}, action) => {

    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
        };  
        case 'SET':
            return {
                count: action.count
            }          
        default:
            return state;
    }

});

const unsubsribe = store.subscribe(() => {
    console.log(store.getState());
});


// Actions - an object that gets send to the store
// I'd like to increment, decrement, reset the count


store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

// unsubsribe();

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
});

// Compare
// this.prevState((prevState) => {
//     return prevState;
// });