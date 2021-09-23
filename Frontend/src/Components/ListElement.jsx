import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Label from './Label.jsx';
import './CSS/ListElement.css';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default class ListElement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.deleteElement = this.deleteElement.bind(this);
        this.pressEdit = this.pressEdit.bind(this);
    };

    async deleteElement(){
        await this.props.onPressDelete(this.props.id)
    }

    pressEdit(){
        this.props.onPressEdit(this.props.op)
    }

    render() {
        return (
            <div id = "element">
                <div id = "container">
                    <Label
                        flex={1}
                        text={this.props.type}
                        visible={this.props.withType}
                        fontSize={"1.2vw"}/>
                    <Label
                        flex={1}
                        text={this.props.amount}
                        visible={true}
                        fontSize={"1.2vw"}/>        
                    <Label
                        flex={1}
                        text={this.props.date}
                        visible={true}
                        fontSize={"1.2vw"}/>
                    <Label
                        flex={1}
                        text={this.props.concept}
                        visible={true}
                        fontSize={"1.2vw"}/>
                </div>
                <div id="options">
                <TouchableOpacity 
                        style={{
                            display : "flex",
                            flex : 1, 
                            alignItems: "center", 
                            border: "1px solid #FAFAFA",
                            borderRadius: "5px",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                        onPress = {this.pressEdit}>
                        <Text style={{fontWeight: 600, color: "black", fontSize: "1vw", margin: "3px"}}>
                        Editar
                        </Text>
                        <FaEdit style={{fontSize: "1vw"}}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            display : "flex",
                            flex : 1, 
                            alignItems: "center", 
                            backgroundColor: "#ad262b",
                            border: "1px solid #FAFAFA",
                            borderRadius: "5px",
                            flexDirection: "row",
                            justifyContent: "center"
                        }}
                        onPress = {this.deleteElement}>
                        <Text style={{fontWeight: 600, color: "black", fontSize: "1vw", margin: "3px"}}>
                            Eliminar
                        </Text>
                        <FaTrashAlt style={{fontSize: "1vw"}}/>
                    </TouchableOpacity>
                    
                </div>
            </div>
        );
    }
}