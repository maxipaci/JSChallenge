import React, { Component } from 'react';
import { View, Modal, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import PostObserver from '../Events/Http/HttpObserver.js';
import { Validator } from '../Utils/Validator';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const postObserver = PostObserver.getInstance();



export default class EditModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            concept: "",
            date: new Date(),
            colorInputAmount: '#D1D1D1',
            amountCorrectionTxt: "",
            isValidAmount: false,
            colorInputConcept: '#D1D1D1',
            cocneptCorrectionTxt: "",
            isValidConcept: false
        };
        this.closeModal = this.closeModal.bind(this);
        this.onSavePress = this.onSavePress.bind(this);
    };

    async closeModal(){
        postObserver.postEvent();
        await this.props.onCloseFunction();
        this.resetState();
    }

    resetState(){
        this.setState({
            amount: 0,
            concept: "",
            date: new Date(),
            colorInputAmount: '#D1D1D1',
            amountCorrectionTxt: "",
            isValidAmount: false,
            colorInputConcept: '#D1D1D1',
            cocneptCorrectionTxt: "",
            isValidConcept: false
        })
    }

    onAmountChange(amount){
        if(amount.length == 0){
          this.setState({colorInputAmount: "#D1D1D1", amount: 0, amountCorrectionTxt: "", isValidAmount: false})
        }
        else if(Validator.isValidAmount(amount)){
          this.setState({colorInputAmount: "#4DB748", amount: parseInt(amount), amountCorrectionTxt: "", isValidAmount: true})

        } else {
          this.setState({colorInputAmount: "red", amountCorrectionTxt: "Monto Erroneo", isValidAmount: false})
        }
      }

    onConceptChange(concept){
      if(concept.length == 0){
        this.setState({colorInputConcept: "#D1D1D1", concept: 0, conceptCorrectionTxt: "", isValidConcept: false})
      }
      else if(Validator.isValidConcept(concept)){
        this.setState({colorInputConcept: "#4DB748", concept: concept, conceptCorrectionTxt: "", isValidConcept: true})

        } else {
          this.setState({colorInputConcept: "red", conceptCorrectionTxt: "Concepto Erroneo", isValidConcept: false})
        }
    }

    async onSavePress(){
        let operation = {};
        operation.concept = this.state.concept;
        operation.amount = this.state.amount;
        operation.date = new Date(this.state.date);
        operation.id = this.props.editOperation.id;
        operation.typeId = this.props.editOperation.type == "Ingreso" ? 1 : 2;
        console.log(operation);
        await this.props.onSaveFunction(operation);
        await this.closeModal();
    }

    render(){
        const ExampleCustomInput = React.forwardRef(({ value, onClick }, ref) => (
            <TouchableOpacity style={styles.dateInput} onPress={onClick} ref={ref}>
              {value}
            </TouchableOpacity>
          ));

        return(            
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.modalVisible}
                onRequestClose={this.closeModal}
                presentationStyle="fullScreen"
            >
                <View style={styles.modalView}>
                    <View style={styles.formContainer}>
                        <Text style={styles.tittle}>Editar</Text>
                        <View style = {styles.correctionTxtContainer}>
                            <Text style ={{color: "red"}}>
                                {this.state.amountCorrectionTxt}
                            </Text>
                        </View>
                        <TextInput 
                            style={[styles.input,
                                {
                                  border: "2px solid " + this.state.colorInputAmount
                                 }]}
                            placeholder={"$ " + this.props.editOperation.amount}
                            onChangeText={(e) => this.onAmountChange(e)}/>
                        <View></View>
                        <DatePicker
                            selected={this.state.date}
                            onChange={(date) => this.setState({startDate : date})}
                            customInput={<ExampleCustomInput />}
                        />
                        <View style = {styles.correctionTxtContainer}>
                            <Text style ={{color: "red"}}>
                                {this.state.conceptCorrectionTxt}
                            </Text>
                        </View>
                        <TextInput 
                            style={[styles.input,
                                {
                                  border: "2px solid " + this.state.colorInputConcept
                                 }]}
                            placeholder={this.props.editOperation.concept}
                            onChangeText={(e) => this.onConceptChange(e)}/>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={[styles.saveButton, {backgroundColor: 
                      !this.state.isValidAmount || !this.state.isValidConcept ? '#D1D1D1' : "green"}]}
                                    onPress={this.onSavePress}
                                    disabled={!this.state.isValidAmount || !this.state.isValidConcept}
                            ><Text style={styles.butonTittle}>Guardar</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.cancelButton}
                            onPress={this.closeModal}><Text style={styles.butonTittle}>Cancelar</Text></TouchableOpacity>
                        </View>
                    </View>                   
                </View>
                

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        backgroundColor:"#282c34",
        justifyContent: "center",
        alignItems:"center"
    },
    dateInput:{
        backgroundColor: "white",
        padding: 20,
        fontWeight: 500,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
      },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
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
    correctionTxtContainer:{
        width: "100%",
        flexDirection: "row",
        alignItems:"flex-start",
        justifyContent: "flex-start"
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