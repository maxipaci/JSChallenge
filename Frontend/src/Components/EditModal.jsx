import React, { Component } from 'react';
import { View, Modal, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';



export default class EditModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,
            concept: "",
            date: ""
        };
        this.closeModal = this.closeModal.bind(this);
        this.onSavePress = this.onSavePress.bind(this);
    };

    async closeModal(){
        await this.props.onCloseFunction();
    }

    async onSavePress(){
        let operation = {};
        operation.concept = this.state.concept;
        operation.amount = this.state.amount;
        operation.date = new Date(this.state.date);
        operation.id = this.props.editOperation.id;
        operation.typeId = 2;
        console.log(operation);
        await this.props.onSaveFunction(operation);
        await this.closeModal();
    }

    render(){
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
                        <View><Text style={styles.butonTittle}>Monto</Text></View>
                        <TextInput 
                            style={styles.input}
                            placeholder={this.props.editOperation.amount}
                            onChangeText={e => {this.setState({amount : e})}}/>
                        <View></View>
                        <TextInput 
                            style={styles.input}
                            placeholder={this.props.editOperation.date}
                            onChangeText={e => {this.setState({date : e})}}/>
                        <View></View>
                        <TextInput 
                            style={styles.input}
                            placeholder={this.props.editOperation.concept}
                            onChangeText={e => {this.setState({concept : e})}}/>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.saveButton}
                                    onPress={this.onSavePress}
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
    tittle:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#FAFAFA"
    },
    butonTittle:{
        fontWeight: "bold",
        color: "#FAFAFA"
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