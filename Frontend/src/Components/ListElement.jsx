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
                            backgroundColor: "red",
                            border: "1px solid #FAFAFA",
                            borderRadius: "5px"
                        }}
                        onPress = {this.deleteElement}>
                        <Text style={{fontWeight: 600, color: "white", fontSize: "1vw"}}>
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
                        <Text style={{fontWeight: 600, color: "white", fontSize: "1vw"}}>
                        Editar
                        </Text>
                    </TouchableOpacity>
                </div>
            </div>
        );
    }
}