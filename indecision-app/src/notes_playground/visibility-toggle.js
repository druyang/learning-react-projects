// For the eduction: a ReactJS practice environment 

class VisibilityToggle extends React.Component {
    constructor(props){
        super(props); 
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return{
                visible: !prevState.visible
            }
        })
    }
    
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? 'Unsurprise' : 'Surprise'}</button>
                {
                    this.state.visible && (<p>Hello there</p>)
                }
            </div>
        )
    }
}


ReactDOM.render(< VisibilityToggle />, document.getElementById('app'))
// let visibleText = false; 

// const renderApp = () => {
    
//     const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVis}>{visibleText ? "Hide Details" : "Show Details"}</button>     
//         {
//             visibleText && (<p>Hello there</p>)
//         }
//     </div>
//     );


//     ReactDOM.render(template, appRoot);
// }

// const toggleVis = () => {
//     visibleText = !visibleText; 
//     renderApp();
// }


// const appRoot = document.getElementById('app');
// renderApp();