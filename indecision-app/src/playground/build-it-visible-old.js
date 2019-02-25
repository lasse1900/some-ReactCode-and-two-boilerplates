
const reset = () => {
    render();
};



const toggleVisibility = () => {
    visibility = !visibility;
    render();
  }

function showText() {
    return "Hide/Show"
}

const appRoot = document.getElementById('app');
let visibility = false;

const render = () => {
    const templateTwo = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>  
            <div>
                {visibility && (
                    <div>
                    <p>Reading is always a good decision!</p>
                    </div>
                )}
            </div>   
        </div>

    ); 
    ReactDOM.render(templateTwo, appRoot);
}

render();