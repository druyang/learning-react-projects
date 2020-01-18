// Nested React Components 
class TaskApp extends React.Component { 
    render() { 
        const title = 'To Do List:';
        const subtitle = 'Stop fucking procrastinating'; 
        const options = ['Thing one', 'Thing two', 'Thing three'];

        return ( 
            <div>
                
                <Header title = {title} subtitle={subtitle} /> 
                <Action />
                <Options options = {options}/>
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    // Must define this on react components: 
    render(){
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handleClick(){
        alert('handleClick');
    }

    render() {
        return (
            <div> 
                <button onClick = {this.handleClick}> What should I do?</button>
            </div>
        );
    }
}

// options
class Options extends React.Component {
    handleRemoveAll(){
        alert('test');
    }
    render(){
    return (
        <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
        {
            this.props.options.map((option) => 
            <Option key={option} optionText = {option}/>)
        }
        </ol>
        </div>
    );
    }
}

// Option  

class Option extends React.Component {
    render(){
        return (
            <div> 
                <li>{this.props.optionText}</li>
            </div>
        );
    }
}

// Text input and submit button 
// onSubmit 
// handleAddOption -> takes value type -> throws in array

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

ReactDOM.render(<TaskApp />, document.getElementById('app')); 