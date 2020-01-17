// My first app
// Makes a counter app in ReactJS

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
}
const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button> 
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
); 

const appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot); 

// Javascript Manual Data Binding
// Need to render things that change on the page: 
// ReactJS will determine minimal number of changes to efficiently render the application 
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
