import './CSS/HomeScreen.css';
import * as React from 'react';
import { HttpClient } from '../services/HttpClient';
import ListElement from '../Components/ListElement.js';
import ListHeader from '../Components/ListHeader';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, View} from 'react-native';

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

  formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    return dd + '/' + mm + '/' + yyyy;
  }

  renderList(){
    return this.state.operations.map(op => {
      return (
        <View>
          <ListElement
          type={op.type}
          amount={op.amount}
          date={this.formatDate(new Date(op.date))}
          concept={op.concept}/>
        </View>
      )
    })
  }
  
  render() {
    return ( 
       <div id = "body">
            <div id = "tittle">
              <p id = "tittle-text">Balance Actual - $ 300</p>
            </div>
            <div id = "tittle">
              <p id = "tittle-text">Ultimas 10 Operaciones</p>
            </div>
            <ListHeader/>
            
              <View style={{flex: 8, width: '90%', display: 'flex', margin: "10px"}}>
                <ScrollView style={{flex:1, display: 'flex'}}>
              
                {this.renderList()}
             

                </ScrollView>
              </View>
              
              
              




              

            
              
              
            
            <div id = "button-container">
              <button id = "button" onClick={this.nav.bind(this)}>
                <p id = "txt-button">Agregar</p>
              </button>
            </div>        
      </div> 
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
  },
  contentContainer: {
      height :"100%"
  },
  containerScroll: {
      backgroundColor:"blue",
      width:"100%",
      height: "100%",
      display: "flex",
      marginBottom: 0,
      paddingBottom: 0,
      marginTop: '0%',
  },
});