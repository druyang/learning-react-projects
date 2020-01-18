// My first app
// Makes a counter app in ReactJS

class Counter extends React.Component {
    constructor(props) { 
        super(props); 
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this); 
        this.handleRest = this.handleRest.bind(this); 
        this.state = {count: 0};
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        this.setState((state) => {
            return { 
                count: state.count - 1
            }
        })
    }
    handleRest() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return(
            <div>
                <h1>The count is: {this.state.count} </h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick = {this.handleMinusOne}>-1</button>
                <button onClick = {this.handleRest}>reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }; 
// const minusOne = () => { 
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }
// const templateTwo = (
//     <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button> 
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//     </div>
// ); 

// const appRoot = document.getElementById('app');
// ReactDOM.render(templateTwo, appRoot); 

// // Javascript Manual Data Binding
// // Need to render things that change on the page: 
// // ReactJS will determine minimal number of changes to efficiently render the application 
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button> 
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//         </div>
//     ); 
//     ReactDOM.render(templateTwo, appRoot);
//}
