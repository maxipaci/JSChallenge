
import './CSS/Screen.css';
import * as React from 'react';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operations : [{
          id: 1,
          concept: "tt",
          amount: 200,
          typeId: 1
        },
        {
          id: 1,
          concept: "tt",
          amount: 200,
          typeId: 1
        },
        {
          id: 1,
          concept: "tt",
          amount: 200,
          typeId: 1
        }]      
    }
  }

  sum(num1, num2){
    return num1 + num2;
  }
  
  nav(){
    this.props.navigation.navigate('pantalla2');
  }

  renderList(){
    console.log("entra")
    return this.state.operations.map(op => {
      return (
        <p>{op.concept}</p>
      )
    })
  }
  
  render() {
    return ( 
       <div className="App-header">
            <div id = "para">
              {this.renderList()}
            </div>
            <div id="boton">
            <button id="but" onClick={this.nav.bind(this)}>
              <p>navegar a la 2</p>
            </button>
            </div>        
      </div> 
    );
  }
}