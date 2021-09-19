
import './CSS/HomeScreen.css';
import * as React from 'react';
import { HttpClient } from '../services/HttpClient';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operations : []      
    }
  }

  async componentDidMount() {
    await this.fetchOperations();
  };

  fetchOperations = async () => {
    try {
        let response = await new HttpClient().get('/operations');
        let str = response.data;
        this.setState({ operations: str });
    } catch (e) {
        console.log(e);
    }      
};

  sum(num1, num2){
    return num1 + num2;
  }
  
  nav(){
    this.props.navigation.navigate('pantalla2');
  }

  renderList(){
    return this.state.operations.map(op => {
      return (
        <p>{op.concept}</p>
      )
    })
  }
  
  render() {
    return ( 
       <div id = "body">
            <div id = "list">
              {this.renderList()}
            </div>
            <div id = "button-container">
            <button id = "button" onClick={this.nav.bind(this)}>
              <p>navegar a la 2</p>
            </button>
            </div>        
      </div> 
    );
  }
}