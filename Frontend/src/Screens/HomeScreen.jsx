import './CSS/HomeScreen.css';
import * as React from 'react';
import { HttpClient } from '../services/HttpClient';
import ListElement from '../Components/ListElement.jsx';
import ListHeader from '../Components/ListHeader.jsx';
import EditModal from '../Components/EditModal.jsx';
import { ScrollView } from 'react-native-gesture-handler';
import { View} from 'react-native';
import PostObserver from '../Events/Http/PostObserver.js';

const postObserver = PostObserver.getInstance();

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operations : [],
      balance : 0,
      modalVisibility : false,
      editOperation: {}     
    }
    this.delete = this.delete.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.editOperation = this.editOperation.bind(this);
  }

  async componentDidMount() {
    await this.fetchOperations();
    await this.fetchBalance();
    postObserver.suscribeToPostEvent(this);
  };

  async onEvent() {
    await this.fetchOperations();
    await this.fetchBalance();
  }

  fetchOperations = async () => {
    try {
        let params = '?limit=' + 10;
        let response = await new HttpClient().get('/operations');
        let str = response.data;
        this.setState({ operations: str });
    } catch (e) {
        console.log(e);
    }      
};

  fetchBalance = async () => {
    try{
      let response = await new HttpClient().get('/operations/balance');
      let str = response.data;
      this.setState({ balance: str.balance });
    } catch (e) {
      console.log(e);
    }
  }
  
  nav(){
    this.props.navigation.navigate('Operation');
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

  async deleteElement(id){
    try {
      let body = {
        operationId : id
      }
      let response = await new HttpClient().delete('/operations', body);
    } catch (e) {
        console.log(e);
    } 
  }

  async delete(id){
    await this.deleteElement(id);
    await this.fetchOperations();
    await this.fetchBalance();
  }

  async closeModal(){
    await this.fetchOperations();
    await this.fetchBalance();
    this.setState({modalVisibility : false})
  }

  async editOperation(operation){
    try {
      let body = operation;
      let response = await new HttpClient().put('/operations', body);
      console.log(response);
    } catch (e) {
        console.log(e);
    } 
  }

  openModal(op){
    this.setState({
      modalVisibility: true,
      editOperation: op
    })
  }

  renderList(){
    return this.state.operations.map(op => {
      return (
        <View key={op.id}>
          <ListElement
            type={op.type}
            amount={op.amount}
            date={this.formatDate(new Date(op.date))}
            concept={op.concept}
            onPressDelete={this.delete}
            onPressEdit={this.openModal}
            id={op.id}
            op={op}/>
        </View>
      )
    })
  }
  
  render() {
    return ( 
       <div id = "body">
         <div id = "containerB">
         <EditModal
            onCloseFunction={this.closeModal}
            onSaveFunction={this.editOperation}
            modalVisible={this.state.modalVisibility}
            editOperation={this.state.editOperation}
          />
          <div id = "tittle">
            <p id = "tittle-text">Balance Actual - $ {this.state.balance}</p>
          </div>
          <div id = "tittle">
            <p id = "tittle-text">Ultimas 10 Operaciones</p>
          </div>
          <ListHeader/>  
          <View style={{flex: 8, width: '90%', margin: "10px", flexBasis: 0}}>
            <ScrollView>           
              {this.renderList()}           
            </ScrollView>
          </View>                  
          <div id = "button-container">
            <button id = "button" onClick={this.nav.bind(this)}>
              <p id = "txt-button">Agregar</p>
            </button>
            <button id = "list-button">
              <p id = "txt-button">Ver todas</p>
            </button>
          </div>
         </div>
                 
      </div> 
    );
  }

  componentWillUnmount() {
    postObserver.desuscribeToPostEvent(this);
  }
}