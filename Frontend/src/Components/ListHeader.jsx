import React, { Component } from 'react';
import './CSS/ListHeader.css';
import Label from './Label.jsx';

export default class ListHeader extends Component {
    render() {
        return (
            <div id = "header-container">
                <Label
                    flex={1}
                    text={"Tipo"}
                    visible={this.props.includeType}
                    fontSize={"1.3vw"}/>
                <Label
                    flex={1}
                    text={"Monto"}
                    visible={true}
                    fontSize={"1.3vw"}/>        
                <Label
                    flex={1}
                    text={"Fecha"}
                    visible={true}
                    fontSize={"1.3vw"}/>
                <Label
                    flex={1}
                    text={"Concepto"}
                    visible={true}
                    fontSize={"1.3vw"}/>
            </div>
        );
    }
}