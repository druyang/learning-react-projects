// Nested React Components 
class TaskApp extends React.Component { 
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteTasks = this.handleDeleteTasks.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.handleRemoveTask = this.handleRemoveTask.bind(this);
        this.state = {
            tasks: []
        };
    }
    handleDeleteTasks() {
        this.setState(() => {
            return{
                tasks: []
            };
        });
    }
    handleAddTask(task) {
        if (!task) { 
            return 'Enter valid value'
        } else if (this.state.tasks.indexOf(task) > -1) { 
            return 'Enter unique task'
        }
        this.setState((prevState) => { 
            return { 
                tasks: prevState.tasks.concat([task])
            }
        });
    }
    handlePick() { 
       const randNum = Math.floor(Math.random() * this.state.tasks.length);
       alert(this.state.tasks[randNum])
    }

    handleRemoveTask(id) { 
        this.setState(prevState => ({
                tasks: prevState.tasks.filter(task => task !== id)
            })
        );
    }

    render() { 
        const title = 'To Do List:';
        const subtitle = 'Stop fucking procrastinating'; 

        return (
            <div>
                
                <Header title = {title} subtitle={subtitle} /> 
                <Action 
                    hasTasks={this.state.tasks.length > 0} 
                    handlePick = {this.handlePick}
                />
                <Tasks
                    tasks = {this.state.tasks}
                    handleDeleteTasks = {this.handleDeleteTasks}
                    handleRemoveTask = {this.handleRemoveTask}
                />
                <AddTask 
                    handleAddTask={this.handleAddTask}
                />
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
    render() {
        return (
            <div> 
                <button 
                    onClick = {this.props.handlePick}
                    disabled = {!this.props.hasTasks}
            > What should I do?</button>
            </div>
        );
    }
}

// tasks
class Tasks extends React.Component {
    render(){
    return (
        <div>
        <button onClick={this.props.handleDeleteTasks}>Remove All</button>
        <ol>
        {
            this.props.tasks.map((task) => 
            <Task 
                key={task} 
                taskText = {task} 
                handleRemoveTask = {this.props.handleRemoveTask}
            />)
        }
        </ol>
        </div>
    );
    }
}

// Task  

class Task extends React.Component {
    render(){
        return (
            <div> 
                <li>
                    {this.props.taskText}
                    <button onClick = {() => {this.props.handleRemoveTask(this.props.taskText)}} > x </button>
                </li>
            </div>
        );
    }
}

// Text input and submit button 
// onSubmit 
// handleAddTask -> takes value type -> throws in array

// addtask 
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddTask = this.handleAddTask.bind(this)
        this.state = { 
            error: undefined
        }
    }
    handleAddTask(e) {
        e.preventDefault(); 
        
        const task = e.target.elements.task.value.trim(); 
        const error = this.props.handleAddTask(task);

        this.setState(() => {
            return {
                error
            }
        })
    }
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.handleAddTask}>
                <input type = "text" name = "task" />
                <button>Add task</button>
            </form>
            </div>
        );    
    }
}

ReactDOM.render(<TaskApp />, document.getElementById('app')); 