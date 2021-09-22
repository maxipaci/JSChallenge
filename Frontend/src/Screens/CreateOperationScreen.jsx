import './CSS/HomeScreen.css';
import * as React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import Selector from '../Components/Selector';
import { HttpClient } from '../services/HttpClient';
import PostObserver from '../Events/Http/HttpObserver.js';

const postObserver = PostObserver.getInstance();
const options = [
  {
    value: 1,
    label: "Ingreso"
  },
  {
    value: 2,
    label: "Egreso"
  }
]

export default class CreateOperationScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          startDate : new Date(),
          typeId: 1,
          amount: 0,
          concept: ""
        }
        this.goBack = this.goBack.bind(this);
        this.postOperation = this.postOperation.bind(this);
        this.onSelectorChange = this.onSelectorChange.bind(this);
      }

      goBack(){
        this.props.navigation.goBack();
      }

      async postOperation(){
        try {
            let body = {
              concept : this.state.concept,
              amount : this.state.amount,
              date : this.state.startDate,
              typeId : this.state.typeId
            }
          let response = await new HttpClient().post('/operations', body);
          postObserver.postEvent();
          console.log(response)
          this.goBack();
        } catch (e) {
            console.log(e);
        } 
      }

      onSelectorChange(type, typeId){
        this.setState({typeId : parseInt(typeId)})
      }

      render(){
        const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
          <TouchableOpacity style={styles.dateInput} onPress={onClick} ref={ref}>
            {value}
          </TouchableOpacity>
        ));

        return (
            <View style={styles.modalView}>
              <View style={styles.formContainer}>
                <Text style={styles.tittle}>Crear Operacion</Text>
                <View>
                  <Text style={styles.butonTittle}>Monto</Text>
                </View>
                <TextInput 
                  style={styles.input}
                  placeholder="600"
                  onChangeText={e => {this.setState({amount : parseInt(e)})}}
                />
                <View></View>
                <DatePicker
                  selected={this.state.startDate}
                  onChange={(date) => this.setState({startDate : date})}
                  customInput={<ExampleCustomInput />}
                />
                <View></View>
                <TextInput 
                  style={styles.input}
                  placeholder="Comida"
                  onChangeText={e => {this.setState({concept : e})}}
                />
                <View></View>
                <Selector
                  options={options}
                  context={this}
                  onChange={this.onSelectorChange}
                />
                <View style={styles.buttonContainer}>
                  <TouchableOpacity 
                    style={styles.saveButton}
                    onPress={this.postOperation}
                  >
                    <Text style={styles.butonTittle}>Guardar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    style={styles.cancelButton}
                    onPress={this.goBack}
                  >
                    <Text style={styles.butonTittle}>Cancelar</Text>
                  </TouchableOpacity>
                </View>
              </View>                   
            </View>                 
         );
      }
}


const styles = StyleSheet.create({
  modalView: {
      flex: 1,
      backgroundColor:"#282c34",
      justifyContent: "center",
      alignItems:"center"
  },
  formContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width : "70%"
  },
  input:{
      backgroundColor: '#ffffff',
      borderRadius: 5,
      borderColor: '#C5CED6',
      borderWidth: 1,
      padding: 20,
      height: 40,
      width: '100%',
      color: 'black',
      margin: 5
  },
  dateInput:{
    backgroundColor: "white",
    padding: 20,
    fontWeight: 500,
    height: 40,
    justifyContent: 'center',
    borderRadius: 5,
  },
  tittle:{
      fontSize: 20,
      fontWeight: "bold",
      color: "#FAFAFA"
  },
  butonTittle:{
      fontWeight: "bold",
      color: "#FAFAFA",
      fontSize: "1.2vw"
  },
  buttonContainer:{
      width: "100%",
      flexDirection: "row",
      height: 40,
      justifyContent: "center"
  },
  saveButton:{
      backgroundColor: "green",
      width: "30%",
      marginRight: 5,
      borderRadius: "5px",
      justifyContent: "center",
      alignItems: "center"
  },
  cancelButton:{
      backgroundColor: "red",
      width: "30%",
      marginLeft: 5,
      borderRadius: "5px",
      justifyContent: "center",
      alignItems: "center"
  }
})