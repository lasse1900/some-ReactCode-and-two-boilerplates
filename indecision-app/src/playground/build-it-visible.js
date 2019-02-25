 
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        console.log(this.state.visibility);
    }

    render() {
      return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
            </button>  
            <div>
                {this.state.visibility && (
                    <div>
                    <p>Reading is always a good decision!</p>
                    </div>
                )}
            </div>   
        </div>

      );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
