import React, { Component } from 'react';
import { Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class Label extends Component {
    constructor(props) {
        super(props);
    }

    renderText(){
        if(this.props.hasTooltip && this.props.text != null && this.props.text.length > 23){
            return (
                <Popup trigger={
                        <Text 
                            style={{
                                color: "#FAFAFA",
                                fontWeight: 600,
                                fontSize: this.props.fontSize,
                                margin: "10px"
                            }}
                            onPress={() => {}}
                        > 
                            {this.props.text.substring(0, 20) + "..."}
                        </Text>}
                    modal
                    nested
                >
                    {close =>(
                        <div 
                            style={{
                            alignItems: "center",
                            borderRadius: "5px"}}
                        >
                            <div 
                                style={{
                                    wordWrap:"break-word",
                                    fontWeight: 600,
                                    textAlign: "center"
                                }}
                            >
                                {this.props.text}
                            </div>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#82655e", 
                                    alignItems: "center", 
                                    borderRadius: "5px", 
                                    justifyContent: "center", 
                                    fontWeight: 600,
                                    color: "white"
                                }}
                                onPress={() => {close()}}
                            >
                                cerrar
                            </TouchableOpacity>
                        </div>         
                    )}           
                </Popup>          
            )
        } else {
            return (
                <Text style={{
                    color: "#FAFAFA",
                    fontWeight: 600,
                    fontSize: this.props.fontSize,
                    margin: "10px"
                }}
                
            >
                {this.props.text}
            </Text>  
            )
        }
    }

    render() {
        if(this.props.visible){
            return (
                <div
                    style = {{
                        display: "flex", 
                        flex : this.props.flex,
                        border: "1px solid #FAFAFA",
                        borderRadius : "5px",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#FAFAFA",
                        fontWeight: 600,
                        fontSize: this.props.fontSize,
                        textDecoration: this.props.hasTooltip && this.props.text != null 
                        && this.props.text.length > 23 ? "underline white" : "none"
                    }}
                >
                    {this.renderText()}                 
                </div>
            );
        } else{
            return(<div></div>);
        }
        
    }
}
