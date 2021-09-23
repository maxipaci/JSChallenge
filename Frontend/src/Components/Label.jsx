import React, { Component } from 'react';
import { Text} from 'react-native';

export default class Label extends Component {
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
                        fontSize: this.props.fontSize
                    }}>
                        <Text style={{
                            color: "#FAFAFA",
                            fontWeight: 600,
                            fontSize: this.props.fontSize,
                            margin: "10px"
                        }}>{this.props.text}</Text>
                        
                </div>
            );
        } else{
            return(<div></div>);
        }
        
    }
}