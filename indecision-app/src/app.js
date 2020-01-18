class Header extends React.Component {
    // Must define this on react components: 
    render(){
        return (
            <div>
            <h1> To Do:</h1>
            <h2> Stop fucking procrastinating</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div> 
                <button> What should I do?</button>
            </div>
        )
    }
}

// options
class Option extends React.Component {
    render(){
    return (
        <div>
        <p>Options Here</p>
        </div>
    );
    }
}
// addoption 
class AddOption extends React.Component {
    render(){
        return (
            <div>
            <p>Add Options here</p>
            </div>
        );    
    }
}
const jsx =(
    <div>
    <Header /> 
    <Action />
    <Option />
    <AddOption />
    </div>
);
ReactDOM.render(jsx, document.getElementById('app')); 