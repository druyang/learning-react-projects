console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? "There are options" : "No Options"}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

const user = {
    name: 'Andrew',
    age: '20',
    location: 'hanover'
};

function getLocation(location){
    if (location){
        return location;
    }
    else {
        return 'Unknown';
    }
};

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
); 

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot); 