import React, { Component } from 'react';
import { Text} from 'react-native';

export default class Label extends Component {
    constructor(props) {
        super(props);
    }


    onPressTxt(){
        alert(this.props.text)     
    }

    renderText(){
        if(this.props.hasTooltip && this.props.text != null && this.props.text.length > 23){
            return (
                <Text style={{
                    color: "#FAFAFA",
                    fontWeight: 600,
                    fontSize: this.props.fontSize,
                    margin: "10px"                
                }}
                onPress={this.onPressTxt.bind(this)}
                
            >
                {this.props.text.substring(0, 20) + "..."}
            </Text>  
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
                        textDecoration: this.props.hasTooltip && this.props.text != null && this.props.text.length > 23 ? "underline white" : "none"
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
