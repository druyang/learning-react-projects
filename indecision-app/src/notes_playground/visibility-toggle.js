let visibleText = false; 

const renderApp = () => {
    
    const template = (
    <div>
        <h1>Visibility Toggle</h1>
        <button onClick={toggleVis}>{visibleText ? "Hide Details" : "Show Details"}</button>     
        {
            visibleText && (<p>Hello there</p>)
        }
    </div>
    );


    ReactDOM.render(template, appRoot);
}

const toggleVis = () => {
    visibleText = !visibleText; 
    renderApp();
}


const appRoot = document.getElementById('app');
renderApp();