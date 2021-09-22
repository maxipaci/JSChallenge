import React, { Component } from 'react';

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
                        fontWeight: 600
                    }}>
                        {this.props.text}
                </div>
            );
        } else{
            return(<div></div>);
        }
        
    }
}