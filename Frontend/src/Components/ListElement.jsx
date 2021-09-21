import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Label from './Label.jsx';
import './CSS/ListElement.css';

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
                        text={this.props.type}/>
                    <Label
                        flex={1}
                        text={this.props.amount}/>        
                    <Label
                        flex={1}
                        text={this.props.date}/>
                    <Label
                        flex={1}
                        text={this.props.concept}/>
                </div>
                <div id="options">
                    <TouchableOpacity 
                        style={{
                            display : "flex",
                            flex : 1, 
                            alignItems: "center", 
                            backgroundColor: "red",
                            border: "1px solid #FAFAFA",
                            borderRadius: "5px"
                        }}
                        onPress = {this.deleteElement}>
                        <Text style={{fontWeight: 600, color: "white"}}>
                            Eliminar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            display : "flex",
                            flex : 1, 
                            alignItems: "center", 
                            backgroundColor: "blue",
                            border: "1px solid #FAFAFA",
                            borderRadius: "5px"
                        }}
                        onPress = {this.pressEdit}>
                        <Text style={{fontWeight: 600, color: "white"}}>
                        Editar
                        </Text>
                    </TouchableOpacity>
                </div>
            </div>
        );
    }
}