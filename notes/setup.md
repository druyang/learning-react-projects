
`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch` 

 * some HTML attributes aren't supported. Check DOM: https://reactjs.org/docs/dom-elements.html
 * Events supported by ReactJS: https://reactjs.org/docs/events.html

Objects are not supported by JSX inside of arrays

### Bind: 
Binds context of a function
If a function needs data (such as props) of the object's constructor. The function needs to be bound to the context of that data

### Component State: 
- Allows to manage data (k,v pairs). 
- Automatically rerender data when state changes (renders in both steps below)
1. Set up default state object: 

        <Counter />
        {
            count: 0 
        }

2. Change state based on event (+1, -1, reset)

        <Counter />
        {
            count: 1
        }
    

 - In JavaScript `setState()` is used to change state: 
    - Note ASYNCHRNOUS process 
    
        this.setState((prevState) =>{
            return {
                count: prevState + 1; 
                    }
                }
            )