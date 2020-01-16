console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.task.value;

    if (option){
        app.options.push(option);
        e.target.elements.task.value = '';
        renderApp();
    }
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? "There are options" : "No Options"}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type = "text" name = "task"/> 
            <button>Add text</button>
        </form>
    </div>
);

const removeAll = () => {
    app.options = [];
    renderApp();
}

const renderApp = () => {
    
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle) && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? "There are options" : "No Options"}</p>
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type = "text" name = "task"/> 
                <button>Add text</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot); 
}

const appRoot = document.getElementById('app');
renderApp();