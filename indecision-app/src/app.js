console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

var template = (
    <div>
        <h1 id ="someID">{app.title}</h1>
        <p>{app.subtitle}</p>
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
    </div>
);

var user = {
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

var templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
); 

var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot); 